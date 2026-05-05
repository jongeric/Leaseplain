"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FileText, Loader2, AlertCircle } from "lucide-react";
import { signIn, signUp } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Mode = "login" | "signup";

export default function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/dashboard";

  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"github" | "google" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error: err } = await signUp.email({ name, email, password });
        if (err) throw new Error(err.message ?? "Sign up failed.");
      } else {
        const { error: err } = await signIn.email({ email, password });
        if (err) throw new Error(err.message ?? "Invalid email or password.");
      }
      router.push(redirect);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider: "github" | "google") => {
    setSocialLoading(provider);
    setError(null);
    try {
      await signIn.social({ provider, callbackURL: redirect });
    } catch {
      setError(`${provider} sign-in failed. Please try again.`);
      setSocialLoading(null);
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 mb-4">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-slate-500 text-sm mt-2">
                {mode === "login"
                  ? "Sign in to access your lease analysis history"
                  : "Start analyzing your leases in plain English"}
              </p>
            </div>

            {/* Social buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                onClick={() => handleSocial("github")}
                disabled={!!socialLoading || loading}
                className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {socialLoading === "github" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )}
                Continue with GitHub
              </button>
              <button
                onClick={() => handleSocial("google")}
                disabled={!!socialLoading || loading}
                className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {socialLoading === "google" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                )}
                Continue with Google
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-slate-400">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400"
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !!socialLoading}
                className={cn(
                  "w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl transition-colors text-sm",
                  "bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> {mode === "login" ? "Signing in..." : "Creating account..."}</>
                ) : (
                  mode === "login" ? "Sign In" : "Create Account"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              {mode === "login" ? (
                <>Don&apos;t have an account?{" "}
                  <button onClick={() => { setMode("signup"); setError(null); }} className="text-indigo-600 hover:underline font-medium">
                    Sign up
                  </button>
                </>
              ) : (
                <>Already have an account?{" "}
                  <button onClick={() => { setMode("login"); setError(null); }} className="text-indigo-600 hover:underline font-medium">
                    Sign in
                  </button>
                </>
              )}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <Link href="/upload" className="text-sm text-indigo-600 hover:underline font-medium">
                Continue as guest &rarr;
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            Not legal advice. For informational purposes only.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
