import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Lease Analyzer", href: "/lease-analyzer" },
      { label: "Upload Lease", href: "/upload" },
      { label: "Example Report", href: "/example-report" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Letter Templates", href: "/letters" },
      { label: "Embed Our Tools", href: "/widgets" },
      { label: "Partner With Us", href: "/partners" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "Canada", href: "/canada" },
      { label: "Ontario", href: "/canada/ontario" },
      { label: "Toronto", href: "/canada/ontario/toronto" },
      { label: "British Columbia", href: "/canada/british-columbia" },
      { label: "Vancouver", href: "/canada/british-columbia/vancouver" },
      { label: "Alberta", href: "/canada/alberta" },
      { label: "Quebec", href: "/canada/quebec" },
      { label: "United States", href: "/united-states" },
      { label: "Canadian Lease Laws", href: "/canadian-lease-laws" },
      { label: "Renting in Canada", href: "/renting-in-canada" },
    ],
  },
  {
    heading: "Lease Clauses",
    links: [
      { label: "Security Deposit", href: "/lease-clause/security-deposit" },
      { label: "Rent Increase", href: "/lease-clause/rent-increase" },
      { label: "Early Termination", href: "/lease-clause/early-termination" },
      { label: "Maintenance", href: "/lease-clause/maintenance" },
      { label: "Subletting", href: "/lease-clause/subletting" },
      { label: "Late Fees", href: "/lease-clause/late-fees" },
    ],
  },
  {
    heading: "Tenant Rights",
    links: [
      { label: "Tenant Rights", href: "/tenant-rights" },
      { label: "Canada Tenant Rights", href: "/tenant-rights/canada" },
      { label: "Ontario Tenant Rights", href: "/tenant-rights/ontario" },
      { label: "BC Tenant Rights", href: "/tenant-rights/british-columbia" },
      { label: "Alberta Tenant Rights", href: "/tenant-rights/alberta" },
      { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
      { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
      { label: "Find a Tenant Lawyer", href: "/tenant-lawyer" },
      { label: "For Lawyers: Get Listed", href: "/for-lawyers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Tenant Q&A", href: "/answers" },
      { label: "Printable Checklists", href: "/checklists" },
      { label: "Rent Increase History", href: "/ontario-rent-increase-history" },
      { label: "Lease Basics", href: "/resources/lease-basics" },
      { label: "Before You Sign", href: "/resources/before-you-sign" },
      { label: "AI Lease Review", href: "/resources/ai-lease-review" },
      { label: "Tenant Guides", href: "/resources/tenant-guides" },
      { label: "Landlord Guides", href: "/resources/landlord-guides" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Methodology", href: "/methodology" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Legal Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0a1628] text-slate-300" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">

        {/* Logo + tagline */}
        <div className="mb-12 flex flex-col gap-2 max-w-xs">
          <Link
            href="/"
            aria-label="LeasePlain home"
            className="inline-flex items-center font-extrabold text-xl tracking-tight select-none"
          >
            <span className="text-white">Lease</span>
            <span className="text-blue-400">Plain</span>
            <span className="text-slate-400 font-normal text-sm ml-0.5">.com</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            AI-powered lease analysis for Canadian renters. Understand your lease in plain English.
          </p>
          <p className="text-xs text-slate-500">Not a law firm. Not legal advice.</p>
        </div>

        {/* Link columns */}
        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors leading-snug"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} LeasePlain. All rights reserved.</p>
          <p className="text-center sm:text-right">
            LeasePlain provides general information only and is not a substitute for professional legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
