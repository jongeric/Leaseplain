"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { Upload, FileText, Type, AlertCircle, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamic = "force-static";

type InputMode = "paste" | "upload";

export default function UploadPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState<InputMode>("paste");
  const [leaseText, setLeaseText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type === "application/pdf") {
      setFile(dropped);
    } else {
      setError("Please upload a PDF file.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.type !== "application/pdf") {
        setError("Only PDF files are supported.");
        return;
      }
      setFile(selected);
      setError(null);
    }
  };

  const handleSubmit = async () => {
    setError(null);

    if (mode === "paste" && leaseText.trim().length < 100) {
      setError("Please paste at least 100 characters of your lease text.");
      return;
    }
    if (mode === "upload" && !file) {
      setError("Please select a PDF file to upload.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      if (mode === "paste") {
        formData.append("text", leaseText);
      } else if (file) {
        formData.append("file", file);
      }

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Analysis failed. Please try again.");
      }

      const data = await res.json();
      // Cache the analysis so the result page can display it without needing D1
      if (data.analysis) {
        sessionStorage.setItem(
          `lp_analysis_${data.id}`,
          JSON.stringify({ teaser: data.teaser, ...data.analysis })
        );
      }
      router.push(`/analysis/${data.id}${data.teaser ? "?teaser=1" : ""}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Analyze Your Lease
            </h1>
            <p className="text-slate-500">
              Paste your lease text or upload a PDF — we&apos;ll translate it
              into plain English.
            </p>
          </div>

          <DisclaimerBanner />

          <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            {/* Mode toggle */}
            <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-6">
              <button
                onClick={() => { setMode("paste"); setFile(null); setError(null); }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors",
                  mode === "paste"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                <Type className="w-4 h-4" />
                Paste Text
              </button>
              <button
                onClick={() => { setMode("upload"); setLeaseText(""); setError(null); }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors",
                  mode === "upload"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                <Upload className="w-4 h-4" />
                Upload PDF
              </button>
            </div>

            {/* Paste mode */}
            {mode === "paste" && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Paste your lease text
                </label>
                <textarea
                  value={leaseText}
                  onChange={(e) => { setLeaseText(e.target.value); setError(null); }}
                  placeholder="Paste the full text of your residential lease agreement here. The more complete the text, the better the analysis..."
                  rows={14}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 resize-none leading-relaxed"
                />
                <p className="text-xs text-slate-400 mt-1.5">
                  {leaseText.length} characters
                  {leaseText.length > 0 && leaseText.length < 100 && (
                    <span className="text-amber-500 ml-1">— minimum 100 required</span>
                  )}
                </p>
              </div>
            )}

            {/* Upload mode */}
            {mode === "upload" && (
              <div>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    "border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors",
                    dragOver
                      ? "border-indigo-400 bg-indigo-50"
                      : file
                      ? "border-green-300 bg-green-50"
                      : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"
                  )}
                >
                  {file ? (
                    <div className="flex flex-col items-center gap-2">
                      <FileText className="w-8 h-8 text-green-500" />
                      <p className="font-medium text-slate-800 text-sm">{file.name}</p>
                      <p className="text-xs text-slate-400">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFile(null); }}
                        className="mt-1 text-xs text-red-500 hover:underline flex items-center gap-1"
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <Upload className="w-8 h-8 text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-700 text-sm">
                          Drop your PDF here
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          or click to browse — PDF only, max 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mt-4 flex items-start gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing your lease...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  Analyze My Lease
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              Analysis takes 10–30 seconds. Not legal advice.
            </p>
          </div>
        </div>
      

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What file size limit does LeasePlain accept?", a: "LeasePlain accepts PDF files up to 10MB. Most residential lease PDFs are well under 5MB. If your file is larger, try compressing the PDF before uploading." },
                  { q: "Can I paste my lease text instead of uploading a PDF?", a: "Yes. Use the text tab to paste your lease text directly. This works well for leases you receive as Word documents, emails, or online forms. Copy the full text, including any addenda, for the most complete analysis." },
                  { q: "What happens after I upload my lease?", a: "LeasePlain's AI reads the full document and generates a structured analysis within 30–60 seconds. You'll see a summary, financial terms, red flags, unclear clauses, questions to ask, and negotiation suggestions." },
                  { q: "Is my uploaded lease kept private?", a: "Your lease is processed securely to generate your analysis. LeasePlain does not sell or share your lease data. Create an account to save and access your analysis history. See our privacy policy for full details." },
                  { q: "Can I analyze more than one lease?", a: "Yes. Free users can analyze leases with full access to core features. Pro users get unlimited analyses and access to the complete financial terms section. If you are comparing multiple apartments, Pro is well worth it." }
                ]} />
              </div>
      </main>

      <Footer />
    </div>
  );
}
