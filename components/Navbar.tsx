"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
          <FileText className="w-5 h-5 text-indigo-600" />
          LeasePlain
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/dashboard" className="hover:text-slate-900 transition-colors">Dashboard</Link>
          <Link href="/login" className="hover:text-slate-900 transition-colors">Log in</Link>
          <Link
            href="/upload"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Analyze Lease
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-slate-700">
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
          <Link
            href="/upload"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:bg-indigo-700 transition-colors"
          >
            Analyze Lease
          </Link>
        </div>
      )}
    </header>
  );
}
