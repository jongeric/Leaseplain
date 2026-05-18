"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

interface NoticeType {
  label: string;
  requiredDays: number;
  note: string;
  secondaryNote?: string;
}

interface ProvinceData {
  name: string;
  notices: NoticeType[];
}

const PROVINCE_DATA: Record<string, ProvinceData> = {
  ON: {
    name: "Ontario",
    notices: [
      {
        label: "N4 – Non-payment of rent",
        requiredDays: 14,
        note: "Landlord must give 14 days' notice. Tenant can void the notice by paying all arrears within 7 days of receiving it.",
      },
      {
        label: "N5 – Damage or disturbance (first notice)",
        requiredDays: 20,
        note: "First N5 gives the tenant 20 days' notice and a chance to correct the issue within 7 days. If corrected, the landlord cannot file at the LTB.",
      },
      {
        label: "N5 – Damage or disturbance (second within 6 months)",
        requiredDays: 14,
        note: "A second N5 within 6 months of the first requires 14 days' notice. The tenant does not get a chance to correct the issue.",
      },
      {
        label: "N8 – Persistent late payment of rent",
        requiredDays: 60,
        note: "60 days' notice required. Used when a tenant repeatedly pays rent late, even if they eventually pay.",
      },
      {
        label: "N12 – Personal use by landlord or buyer",
        requiredDays: 60,
        note: "60 days' notice required. The landlord or purchaser must also pay the tenant one month's compensation. The landlord/buyer must genuinely intend to occupy the unit for at least one year.",
        secondaryNote: "Note: compensation of one month's rent is also required.",
      },
      {
        label: "N13 – Demolition, conversion, or major renovation",
        requiredDays: 120,
        note: "120 days' notice required. Compensation is also required. Tenant has a right of first refusal to re-occupy after renovations.",
        secondaryNote: "Note: compensation and right of first refusal apply.",
      },
    ],
  },
  BC: {
    name: "British Columbia",
    notices: [
      {
        label: "One Month Notice – Non-payment of rent",
        requiredDays: 10,
        note: "In BC, a non-payment notice requires only 10 days. The tenant can avoid eviction by paying all rent within 5 days of receiving the notice.",
      },
      {
        label: "Two Month Notice – Landlord personal use",
        requiredDays: 60,
        note: "Two full rental months' notice required when landlord or a close family member intends to occupy the unit.",
      },
      {
        label: "Four Month Notice – Renovations",
        requiredDays: 120,
        note: "Four full rental months' notice required for renovations or repairs that require the unit to be vacant.",
      },
      {
        label: "One Month Notice – Cause (other breach)",
        requiredDays: 30,
        note: "One month notice for cause such as material breach of tenancy agreement, damage, or illegal activity.",
      },
    ],
  },
  AB: {
    name: "Alberta",
    notices: [
      {
        label: "14-Day Notice – Non-payment of rent",
        requiredDays: 14,
        note: "14 days' notice required for non-payment of rent. The tenant can remedy by paying all overdue rent before the 14 days expire.",
      },
      {
        label: "14-Day Notice – Substantial breach",
        requiredDays: 14,
        note: "14 days' notice for substantial breach of the lease (e.g. damage, disturbance, illegal activity).",
      },
      {
        label: "3-Month Notice – End of fixed-term tenancy",
        requiredDays: 90,
        note: "3 months' notice required to end a periodic tenancy or to not renew a fixed-term lease.",
      },
    ],
  },
  GENERIC: {
    name: "Other Province",
    notices: [
      {
        label: "Non-payment notice (typical)",
        requiredDays: 14,
        note: "Most provinces require 14–15 days for a non-payment notice. Check your provincial tenancy authority for exact requirements.",
      },
      {
        label: "General eviction notice (typical)",
        requiredDays: 30,
        note: "Most provinces require approximately 30 days for a general eviction notice. Verify with your provincial tenancy authority.",
      },
    ],
  },
};

const PROVINCE_OPTIONS = [
  { value: "ON", label: "Ontario" },
  { value: "BC", label: "British Columbia" },
  { value: "AB", label: "Alberta" },
  { value: "GENERIC", label: "Manitoba / Saskatchewan / Nova Scotia / New Brunswick / NL / PEI" },
];

const faqs = [
  {
    q: "Do I have to leave when I get an eviction notice?",
    a: "No. An eviction notice (like an N12 or N4) is the first step in a process, not an order to leave. You do not legally have to vacate until a tribunal (like the LTB in Ontario) issues a formal eviction order after a hearing. You have the right to dispute the notice.",
  },
  {
    q: "What happens if I don't respond to an eviction notice?",
    a: "If you ignore the notice and don't pay arrears (for an N4) or don't vacate, the landlord can apply to the tribunal for an eviction order. If you don't attend the hearing, an order may be issued by default. Always respond in writing and attend any scheduled hearings.",
  },
  {
    q: "Can a landlord evict me verbally?",
    a: "No. Eviction notices must be in writing and use the proper form in most provinces (e.g. specific N-forms in Ontario). A verbal notice to leave has no legal effect.",
  },
  {
    q: "What is 'without cause' eviction?",
    a: "Some provinces (like BC) allow landlords to end a tenancy without cause by giving extended notice (typically 4 months for renovations or 2 months for personal use). Ontario requires a specific reason for every eviction notice — there is no 'no-fault' eviction in Ontario outside of specific forms.",
  },
  {
    q: "Can I dispute an eviction notice?",
    a: "Yes. You can respond to an N12 in Ontario by not vacating and waiting for the landlord to apply to the LTB — at which point you can attend the hearing and present your case. You can also file your own applications if the notice is being used in bad faith (e.g. the landlord doesn't actually intend to occupy the unit).",
  },
];

type ResultStatus = "valid" | "invalid" | "review";

interface CheckResult {
  status: ResultStatus;
  requiredDays: number;
  givenDays: number;
  noticeName: string;
  noticeNote: string;
  secondaryNote?: string;
}

export default function EvictionNoticeClient() {
  const [province, setProvince] = useState("");
  const [noticeIndex, setNoticeIndex] = useState<string>("");
  const [daysGiven, setDaysGiven] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);

  const provinceData = province ? PROVINCE_DATA[province] : null;

  const handleProvinceChange = (val: string) => {
    setProvince(val);
    setNoticeIndex("");
    setResult(null);
  };

  const handleNoticeChange = (val: string) => {
    setNoticeIndex(val);
    setResult(null);
  };

  const check = () => {
    if (!provinceData || noticeIndex === "" || !daysGiven) return;
    const idx = parseInt(noticeIndex, 10);
    const notice = provinceData.notices[idx];
    if (!notice) return;

    const given = parseInt(daysGiven.replace(/[^0-9]/g, ""), 10);
    if (isNaN(given)) return;

    let status: ResultStatus;
    if (given >= notice.requiredDays) {
      status = "valid";
    } else if (given < notice.requiredDays * 0.75) {
      status = "invalid";
    } else {
      // Close but short — flag for review
      status = "invalid";
    }

    setResult({
      status,
      requiredDays: notice.requiredDays,
      givenDays: given,
      noticeName: notice.label,
      noticeNote: notice.note,
      secondaryNote: notice.secondaryNote,
    });
  };

  const isReady = province && noticeIndex !== "" && daysGiven;

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-xl mb-4">
              <Shield className="w-6 h-6 text-slate-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Eviction Notice Validity Checker</h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Check whether an eviction notice meets the legally required notice period for your province.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <div className="flex flex-col gap-4">
              {/* Step 1: Province */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold mr-2">1</span>
                  Province
                </label>
                <select
                  value={province}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <option value="">Select province…</option>
                  {PROVINCE_OPTIONS.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Step 2: Notice type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold mr-2">2</span>
                  Notice Type
                </label>
                <select
                  value={noticeIndex}
                  onChange={(e) => handleNoticeChange(e.target.value)}
                  disabled={!provinceData}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="">Select notice type…</option>
                  {provinceData?.notices.map((n, i) => (
                    <option key={i} value={i}>{n.label}</option>
                  ))}
                </select>
              </div>

              {/* Step 3: Days given */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold mr-2">3</span>
                  Days of Notice Given
                </label>
                <input
                  type="number"
                  value={daysGiven}
                  onChange={(e) => { setDaysGiven(e.target.value); setResult(null); }}
                  placeholder="e.g. 14"
                  min="1"
                  disabled={noticeIndex === ""}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:bg-slate-50 disabled:text-slate-400"
                />
              </div>

              <button
                onClick={check}
                disabled={!isReady}
                className="w-full bg-slate-700 text-white font-semibold py-3 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check Notice
              </button>
            </div>

            {result && (
              <div className="mt-6 space-y-4">
                {/* Main verdict */}
                <div className={`rounded-xl border p-4 ${
                  result.status === "valid"
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}>
                  <div className="flex items-start gap-3">
                    {result.status === "valid" ? (
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-semibold text-sm mb-1 ${
                        result.status === "valid" ? "text-green-900" : "text-red-900"
                      }`}>
                        {result.status === "valid"
                          ? "Notice period appears valid"
                          : "Notice period is too short — this notice may be invalid"}
                      </p>
                      <p className={`text-sm ${
                        result.status === "valid" ? "text-green-800" : "text-red-800"
                      }`}>
                        {result.givenDays} days given — {result.requiredDays} days required for {result.noticeName}.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What comes next */}
                <div className={`bg-white border rounded-xl p-4 ${
                  result.status === "valid" ? "border-green-200" : "border-red-200"
                }`}>
                  <p className="text-sm font-semibold text-slate-900 mb-2">What this means</p>
                  <p className="text-sm text-slate-600 mb-3">{result.noticeNote}</p>
                  {result.secondaryNote && (
                    <p className="text-sm text-slate-600 mb-3">{result.secondaryNote}</p>
                  )}
                  {result.status === "valid" ? (
                    <div className="space-y-2">
                      <p className="text-sm text-slate-700 font-medium">What comes next:</p>
                      <ul className="space-y-1 text-sm text-slate-600 list-disc list-inside">
                        <li>The landlord must still apply to the tribunal for an eviction order — a notice alone does not mean you have to leave.</li>
                        <li>You have the right to attend the tribunal hearing and dispute the eviction.</li>
                        <li>Respond to the notice in writing to document that you received it.</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-slate-700 font-medium">What you can do:</p>
                      <ul className="space-y-1 text-sm text-slate-600 list-disc list-inside">
                        <li>Write to your landlord in writing, stating that the notice period is insufficient and does not meet legal requirements.</li>
                        <li>Do not vacate based on an invalid notice alone.</li>
                        <li>Contact your provincial tenancy tribunal to file a dispute or seek guidance.</li>
                        <li>Keep all written communications for your records.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Universal reminder */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      <strong>Important:</strong> A notice to end tenancy is NOT an eviction order. You do not have to leave until a tribunal issues an eviction order after a hearing.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-8">
            <strong>Not legal advice.</strong> Notice requirements can change and individual circumstances vary. Always verify with your provincial tenancy authority or a legal professional.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">Have a lease with unusual eviction clauses? LeasePlain analyzes the full text and flags concerning provisions.</p>
            <Link href="/upload" className="inline-flex items-center gap-2 bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-sm">
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
