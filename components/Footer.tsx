import Link from "next/link";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              LeasePlain
            </div>
            <p className="text-sm text-slate-500">
              Plain-English lease analysis powered by AI. Not a law firm. Not legal advice.
            </p>
          </div>
          <div className="flex gap-12 text-sm text-slate-600">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-800">Product</span>
              <Link href="/upload" className="hover:text-slate-900">Analyze Lease</Link>
              <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
              <Link href="/dashboard" className="hover:text-slate-900">Dashboard</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-800">Account</span>
              <Link href="/login" className="hover:text-slate-900">Log in</Link>
              <Link href="/login" className="hover:text-slate-900">Sign up</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-400 text-center">
          <strong className="text-slate-500">Disclaimer:</strong> LeasePlain provides general information only and is not a substitute for professional legal advice.
          Always consult a licensed attorney before signing any legal agreement. &copy; {new Date().getFullYear()} LeasePlain.
        </div>
      </div>
    </footer>
  );
}
