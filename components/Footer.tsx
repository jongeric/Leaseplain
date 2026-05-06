import Link from "next/link";

const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Lease Analyzer", href: "/lease-analyzer" },
      { label: "Upload Lease", href: "/upload" },
      { label: "Example Report", href: "/example-report" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Lease Clauses",
    links: [
      { label: "Security Deposit", href: "/lease-clause/security-deposit" },
      { label: "Rent Increase", href: "/lease-clause/rent-increase" },
      { label: "Early Termination", href: "/lease-clause/early-termination" },
      { label: "Maintenance Responsibilities", href: "/lease-clause/maintenance" },
      { label: "Subletting", href: "/lease-clause/subletting" },
      { label: "Late Fees", href: "/lease-clause/late-fees" },
    ],
  },
  {
    heading: "Tenant Rights",
    links: [
      { label: "Ontario", href: "/tenant-rights/ontario" },
      { label: "Toronto", href: "/tenant-rights/toronto" },
      { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
      { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
      { label: "Landlord Responsibilities", href: "/tenant-rights/landlord-responsibilities" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
      { label: "Lease Agreement Explained", href: "/resources/lease-agreement-explained" },
      { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Legal Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0a1628] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        {/* Brand row */}
        <div className="mb-10 flex flex-col gap-3 max-w-xs">
          <Link
            href="/"
            aria-label="LeasePlain home"
            className="flex items-center gap-0 font-extrabold text-xl tracking-tight select-none"
          >
            <span className="text-white">Lease</span>
            <span className="text-blue-400">Plain</span>
            <span className="text-slate-400 font-normal text-sm ml-0.5">.com</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Understand your lease in plain English. AI-powered analysis that
            highlights risks, explains clauses, and protects your rights as a
            tenant.
          </p>
          <p className="text-xs text-slate-500">
            Not a law firm. Not legal advice.
          </p>
        </div>

        {/* Columns grid */}
        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} LeasePlain. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            <strong className="text-slate-400">Disclaimer:</strong> LeasePlain
            provides general information only and is not a substitute for
            professional legal advice. Always consult a licensed attorney before
            signing any legal agreement.
          </p>
        </div>
      </div>
    </footer>
  );
}
