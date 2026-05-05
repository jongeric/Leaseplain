import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, GitBranch, Mail } from "lucide-react";

export default function LoginPage() {
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
                Welcome to LeasePlain
              </h1>
              <p className="text-slate-500 text-sm mt-2">
                Sign in to access your lease analysis history
              </p>
            </div>

            {/* Auth placeholder notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-6 text-center">
              <p className="text-xs text-amber-700 font-medium">
                Authentication coming soon — try the app as a guest below
              </p>
            </div>

            {/* Social auth placeholders */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                disabled
                className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 bg-slate-50 cursor-not-allowed"
              >
                <GitBranch className="w-4 h-4" />
                Continue with GitHub
              </button>
              <button
                disabled
                className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 bg-slate-50 cursor-not-allowed"
              >
                <Mail className="w-4 h-4" />
                Continue with Google
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs text-slate-400 bg-white px-3">
                or continue with email
              </div>
            </div>

            {/* Email form placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="you@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 text-slate-400 cursor-not-allowed outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  disabled
                  placeholder="••••••••"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50 text-slate-400 cursor-not-allowed outline-none"
                />
              </div>
              <button
                disabled
                className="w-full bg-indigo-300 text-white font-semibold py-3 rounded-xl cursor-not-allowed text-sm"
              >
                Sign In (coming soon)
              </button>
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/login" className="text-indigo-600 hover:underline font-medium">
                Sign up
              </Link>
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <Link
                href="/upload"
                className="text-sm text-indigo-600 hover:underline font-medium"
              >
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
