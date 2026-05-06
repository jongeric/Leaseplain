"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, LogOut, LayoutDashboard, ChevronRight,
} from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

// ─── Navigation data ────────────────────────────────────────────────────────

const NAV_LOCATIONS = {
  canada: {
    heading: "Canada",
    hub: { label: "All Canada", href: "/canada" },
    links: [
      { label: "Ontario", href: "/canada/ontario" },
      { label: "Toronto", href: "/canada/ontario/toronto" },
      { label: "British Columbia", href: "/canada/british-columbia" },
      { label: "Vancouver", href: "/canada/british-columbia/vancouver" },
      { label: "Alberta", href: "/canada/alberta" },
      { label: "Quebec", href: "/canada/quebec" },
    ],
  },
  us: {
    heading: "United States",
    hub: { label: "All United States", href: "/united-states" },
    links: [
      { label: "New York", href: "/united-states/new-york" },
      { label: "California", href: "/united-states/california" },
      { label: "Florida", href: "/united-states/florida" },
    ],
  },
};

const NAV_CLAUSES = {
  hub: { label: "All Lease Clauses", href: "/lease-clauses" },
  links: [
    { label: "Security Deposit", href: "/lease-clause/security-deposit" },
    { label: "Rent Increase", href: "/lease-clause/rent-increase" },
    { label: "Early Termination", href: "/lease-clause/early-termination" },
    { label: "Maintenance", href: "/lease-clause/maintenance" },
    { label: "Subletting", href: "/lease-clause/subletting" },
    { label: "Late Fees", href: "/lease-clause/late-fees" },
    { label: "Utilities", href: "/lease-clause/utilities" },
    { label: "Pets", href: "/lease-clause/pets" },
    { label: "Guests", href: "/lease-clause/guests" },
    { label: "Repairs", href: "/lease-clause/repairs" },
  ],
};

const NAV_TENANT_RIGHTS = {
  hubs: [
    { label: "Tenant Rights", href: "/tenant-rights" },
    { label: "Canada Tenant Rights", href: "/tenant-rights/canada" },
    { label: "US Tenant Rights", href: "/tenant-rights/united-states" },
  ],
  canada: [
    { label: "Ontario", href: "/tenant-rights/ontario" },
    { label: "British Columbia", href: "/tenant-rights/british-columbia" },
    { label: "Alberta", href: "/tenant-rights/alberta" },
    { label: "Quebec", href: "/tenant-rights/quebec" },
  ],
  topics: [
    { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
    { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
    { label: "Eviction Notices", href: "/tenant-rights/eviction-notices" },
    { label: "Repairs & Maintenance", href: "/tenant-rights/repairs-maintenance" },
  ],
};

const NAV_RESOURCES = [
  {
    heading: "Lease Basics",
    hub: "/resources/lease-basics",
    links: [
      { label: "What Is a Lease?", href: "/resources/what-is-a-lease-agreement" },
      { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
      { label: "Lease Agreement Explained", href: "/resources/lease-agreement-explained" },
      { label: "Lease vs Rental Agreement", href: "/resources/lease-vs-rental-agreement" },
    ],
  },
  {
    heading: "Before You Sign",
    hub: "/resources/before-you-sign",
    links: [
      { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
      { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
      { label: "Questions to Ask", href: "/resources/questions-before-signing" },
      { label: "Hidden Lease Fees", href: "/resources/hidden-lease-fees" },
    ],
  },
  {
    heading: "AI Lease Review",
    hub: "/resources/ai-lease-review",
    links: [
      { label: "What Is AI Lease Analyzer?", href: "/resources/what-is-ai-lease-analyzer" },
      { label: "AI vs Lawyer", href: "/resources/ai-lease-review-vs-lawyer" },
      { label: "Can AI Explain a Lease?", href: "/resources/can-ai-explain-a-lease" },
    ],
  },
  {
    heading: "Tenant Guides",
    hub: "/resources/tenant-guides",
    links: [
      { label: "First-Time Renter Guide", href: "/resources/first-time-renter-guide" },
      { label: "Student Lease Guide", href: "/resources/student-lease-guide" },
      { label: "Condo Lease Guide", href: "/resources/condo-lease-guide" },
    ],
  },
];

// ─── MegaMenu wrapper ────────────────────────────────────────────────────────

interface MegaMenuProps {
  label: string;
  isActive: boolean;
  children: React.ReactNode;
}

function MegaMenu({ label, isActive, children }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handlePointer);
    return () => document.removeEventListener("mousedown", handlePointer);
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
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 ${
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
          className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-slate-100 py-4"
          style={{ minWidth: "min-content" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Mega menu panel content ─────────────────────────────────────────────────

function LocationsPanel({ close }: { close: () => void }) {
  return (
    <div className="flex gap-0 px-1" style={{ width: 520 }}>
      {/* Canada */}
      <div className="flex-1 px-4">
        <Link
          href={NAV_LOCATIONS.canada.hub.href}
          role="menuitem"
          onClick={close}
          className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 hover:text-blue-600 transition-colors"
        >
          {NAV_LOCATIONS.canada.heading}
        </Link>
        <Link
          href={NAV_LOCATIONS.canada.hub.href}
          role="menuitem"
          onClick={close}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline mb-2"
        >
          {NAV_LOCATIONS.canada.hub.label}
          <ChevronRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        {NAV_LOCATIONS.canada.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            role="menuitem"
            onClick={close}
            className="block px-1 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="w-px bg-slate-100 mx-1" />

      {/* United States */}
      <div className="flex-1 px-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          {NAV_LOCATIONS.us.heading}
        </p>
        <Link
          href={NAV_LOCATIONS.us.hub.href}
          role="menuitem"
          onClick={close}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline mb-2"
        >
          {NAV_LOCATIONS.us.hub.label}
          <ChevronRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        {NAV_LOCATIONS.us.links.map((l) => (
          <div key={l.href} className="flex items-center justify-between px-1 py-1.5">
            <Link
              href={l.href}
              role="menuitem"
              onClick={close}
              className="text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
            <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full ml-2">
              Soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClausesPanel({ close }: { close: () => void }) {
  return (
    <div className="px-4" style={{ width: 380 }}>
      <Link
        href={NAV_CLAUSES.hub.href}
        role="menuitem"
        onClick={close}
        className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline mb-3 pb-3 border-b border-slate-100"
      >
        {NAV_CLAUSES.hub.label}
        <ChevronRight className="w-3 h-3" aria-hidden="true" />
      </Link>
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
        {NAV_CLAUSES.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            role="menuitem"
            onClick={close}
            className="px-1 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function TenantRightsPanel({ close }: { close: () => void }) {
  return (
    <div className="flex gap-0 px-1" style={{ width: 560 }}>
      {/* Main hubs */}
      <div className="px-4" style={{ minWidth: 160 }}>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Overview</p>
        {NAV_TENANT_RIGHTS.hubs.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            role="menuitem"
            onClick={close}
            className="block px-1 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors font-medium"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="w-px bg-slate-100 mx-1" />

      {/* Canada provinces */}
      <div className="px-4" style={{ minWidth: 160 }}>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Canada</p>
        {NAV_TENANT_RIGHTS.canada.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            role="menuitem"
            onClick={close}
            className="block px-1 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="w-px bg-slate-100 mx-1" />

      {/* Key topics */}
      <div className="px-4" style={{ minWidth: 180 }}>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Topics</p>
        {NAV_TENANT_RIGHTS.topics.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            role="menuitem"
            onClick={close}
            className="block px-1 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ResourcesPanel({ close }: { close: () => void }) {
  return (
    <div className="flex gap-0 px-1" style={{ width: 680 }}>
      {NAV_RESOURCES.map((cat, i) => (
        <div key={cat.heading} className="flex">
          {i > 0 && <div className="w-px bg-slate-100 mx-1" />}
          <div className="px-4" style={{ minWidth: 155 }}>
            <Link
              href={cat.hub}
              role="menuitem"
              onClick={close}
              className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 hover:text-blue-600 transition-colors"
            >
              {cat.heading}
            </Link>
            {cat.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                role="menuitem"
                onClick={close}
                className="block px-1 py-1.5 text-sm text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors leading-tight"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Mobile section ──────────────────────────────────────────────────────────

interface MobileSection {
  key: string;
  label: string;
  content: React.ReactNode;
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
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
    setExpanded(null);
  };

  const toggle = (key: string) => setExpanded((v) => (v === key ? null : key));

  const isLocationActive = pathname.startsWith("/canada") || pathname.startsWith("/united-states") || pathname === "/locations";
  const isClausesActive = pathname.startsWith("/lease-clause");
  const isRightsActive = pathname.startsWith("/tenant-rights");
  const isResourcesActive = pathname.startsWith("/resources");

  // Reusable mobile link list
  function MobileLinks({ links }: { links: { label: string; href: string }[] }) {
    return (
      <div className="ml-3 pl-3 border-l-2 border-slate-100 mt-1 mb-2 flex flex-col gap-0.5">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={closeMobile}
            className="py-2 px-2 rounded-md text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          >
            {l.label}
          </Link>
        ))}
      </div>
    );
  }

  const mobileSections: MobileSection[] = [
    {
      key: "locations",
      label: "Locations",
      content: (
        <>
          <p className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2 mb-1">Canada</p>
          <MobileLinks links={[NAV_LOCATIONS.canada.hub, ...NAV_LOCATIONS.canada.links]} />
          <p className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2 mb-1">United States</p>
          <MobileLinks links={[NAV_LOCATIONS.us.hub, ...NAV_LOCATIONS.us.links]} />
        </>
      ),
    },
    {
      key: "clauses",
      label: "Lease Clauses",
      content: <MobileLinks links={[NAV_CLAUSES.hub, ...NAV_CLAUSES.links]} />,
    },
    {
      key: "rights",
      label: "Tenant Rights",
      content: (
        <>
          <MobileLinks links={NAV_TENANT_RIGHTS.hubs} />
          <p className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 mb-1">Canada</p>
          <MobileLinks links={NAV_TENANT_RIGHTS.canada} />
          <p className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 mb-1">Key Topics</p>
          <MobileLinks links={NAV_TENANT_RIGHTS.topics} />
        </>
      ),
    },
    {
      key: "resources",
      label: "Resources",
      content: (
        <>
          {NAV_RESOURCES.map((cat) => (
            <div key={cat.heading}>
              <p className="ml-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2 mb-1">{cat.heading}</p>
              <MobileLinks links={cat.links} />
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          aria-label="LeasePlain home"
          className="flex items-center font-extrabold text-xl tracking-tight select-none shrink-0"
        >
          <span className="text-[#0f1f47]">Lease</span>
          <span className="text-blue-600">Plain</span>
          <span className="text-[#0f1f47] font-normal text-sm ml-0.5">.com</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1">
          <Link
            href="/lease-analyzer"
            className={`px-2 py-1 text-sm font-medium transition-colors hover:text-slate-900 rounded ${
              pathname === "/lease-analyzer" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            Lease Analyzer
          </Link>
          <Link
            href="/how-it-works"
            className={`px-2 py-1 text-sm font-medium transition-colors hover:text-slate-900 rounded ${
              pathname === "/how-it-works" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            How It Works
          </Link>

          <MegaMenu label="Locations" isActive={isLocationActive}>
            <LocationsPanel close={() => {}} />
          </MegaMenu>

          <MegaMenu label="Lease Clauses" isActive={isClausesActive}>
            <ClausesPanel close={() => {}} />
          </MegaMenu>

          <MegaMenu label="Tenant Rights" isActive={isRightsActive}>
            <TenantRightsPanel close={() => {}} />
          </MegaMenu>

          <MegaMenu label="Resources" isActive={isResourcesActive}>
            <ResourcesPanel close={() => {}} />
          </MegaMenu>

          <Link
            href="/pricing"
            className={`px-2 py-1 text-sm font-medium transition-colors hover:text-slate-900 rounded ${
              pathname === "/pricing" ? "text-blue-600" : "text-slate-600"
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop right */}
        <div className="hidden xl:flex items-center gap-3">
          {user ? (
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
                type="button"
                onClick={handleSignOut}
                className="text-sm font-medium flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Log in
            </Link>
          )}
          <Link
            href="/upload"
            className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Upload Lease
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="xl:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="xl:hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="px-4 py-3 flex flex-col gap-0.5">

            <Link href="/lease-analyzer" onClick={closeMobile} className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
              Lease Analyzer
            </Link>
            <Link href="/how-it-works" onClick={closeMobile} className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
              How It Works
            </Link>

            {mobileSections.map(({ key, label, content }) => (
              <div key={key}>
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  aria-expanded={expanded === key}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {label}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-150 ${expanded === key ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {expanded === key && content}
              </div>
            ))}

            <Link href="/pricing" onClick={closeMobile} className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
              Pricing
            </Link>

            {user ? (
              <>
                <Link href="/dashboard" onClick={closeMobile} className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => { closeMobile(); handleSignOut(); }}
                  className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" aria-hidden="true" />
                  Sign out
                </button>
              </>
            ) : (
              <Link href="/login" onClick={closeMobile} className="py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                Log in
              </Link>
            )}

            <div className="pt-2 pb-1">
              <Link
                href="/upload"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 w-full"
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
