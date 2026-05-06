"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const leaseClausesLinks = [
  { label: "Security Deposit", href: "/lease-clause/security-deposit" },
  { label: "Rent Increase", href: "/lease-clause/rent-increase" },
  { label: "Early Termination", href: "/lease-clause/early-termination" },
  { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
  { label: "Subletting", href: "/lease-clause/subletting" },
  { label: "Late Fees", href: "/lease-clause/late-fees" },
];

const tenantRightsLinks = [
  { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
  { label: "Tenant Rights in Toronto", href: "/tenant-rights/toronto" },
  { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
  { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
  { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
];

const resourcesLinks = [
  { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
  { label: "Lease Agreement Explained", href: "/resources/lease-agreement-explained" },
  { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
  { label: "AI Lease Review Guide", href: "/resources/ai-lease-review" },
  { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  isActive: boolean;
}

function Dropdown({ label, items, isActive }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, close]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      close();
      buttonRef.current?.focus();
    }
  }

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
          isActive ? "text-blue-600" : "text-slate-600"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={close}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpanded((v) => (v === section ? null : section));
  };

  const mobileSections = [
    { key: "clauses", label: "Lease Clauses", links: leaseClausesLinks },
    { key: "rights", label: "Tenant Rights", links: tenantRightsLinks },
    { key: "resources", label: "Resources", links: resourcesLinks },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="LeasePlain home"
          className="flex items-center gap-0 font-extrabold text-xl tracking-tight select-none"
        >
          <span className="text-[#0f1f47]">Lease</span>
          <span className="text-blue-600">Plain</span>
          <span className="text-[#0f1f47] font-normal text-sm ml-0.5">.com</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-5"
        >
          <Link
            href="/lease-analyzer"
            className={`text-sm font-medium transition-colors hover:text-slate-900 ${
              pathname === "/lease-analyzer" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            Lease Analyzer
          </Link>
          <Link
            href="/how-it-works"
            className={`text-sm font-medium transition-colors hover:text-slate-900 ${
              pathname === "/how-it-works" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            How It Works
          </Link>
          <Dropdown
            label="Lease Clauses"
            items={leaseClausesLinks}
            isActive={pathname.startsWith("/lease-clause")}
          />
          <Dropdown
            label="Tenant Rights"
            items={tenantRightsLinks}
            isActive={pathname.startsWith("/tenant-rights")}
          />
          <Dropdown
            label="Resources"
            items={resourcesLinks}
            isActive={pathname.startsWith("/resources")}
          />
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors hover:text-slate-900 ${
              pathname === "/pricing" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            Pricing
          </Link>

          {user && (
            <>
              <Link
                href="/dashboard"
                className={`text-sm font-medium flex items-center gap-1.5 transition-colors hover:text-slate-900 ${
                  pathname === "/dashboard" ? "text-blue-600" : "text-slate-600"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="text-sm font-medium flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
                Sign out
              </button>
            </>
          )}
          {!user && (
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log in
            </Link>
          )}

          <Link
            href="/upload"
            className="ml-1 inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Upload Lease
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-slate-100 bg-white"
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
            <Link
              href="/lease-analyzer"
              onClick={closeMobile}
              className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Lease Analyzer
            </Link>
            <Link
              href="/how-it-works"
              onClick={closeMobile}
              className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              How It Works
            </Link>

            {mobileSections.map(({ key, label, links }) => (
              <div key={key}>
                <button
                  onClick={() => toggleMobileSection(key)}
                  aria-expanded={mobileExpanded === key}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${
                      mobileExpanded === key ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {mobileExpanded === key && (
                  <div className="ml-3 pl-3 border-l-2 border-slate-100 mt-1 mb-1 flex flex-col gap-0.5">
                    {links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className="py-2 px-2 rounded-md text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/pricing"
              onClick={closeMobile}
              className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
            >
              Pricing
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeMobile}
                  className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center gap-2"
                >
                  <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
                  Dashboard
                </Link>
                <button
                  onClick={() => { closeMobile(); handleSignOut(); }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" aria-hidden="true" />
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={closeMobile}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              >
                Log in
              </Link>
            )}

            <div className="pt-2">
              <Link
                href="/upload"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors w-full"
              >
                Upload Lease
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
