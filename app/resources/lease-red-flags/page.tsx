import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, ChevronRight, Upload, Clock, BookOpen, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import ArticleSchema from "@/components/ArticleSchema";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "15 Lease Red Flags Every Tenant Should Know | LeasePlain",
  description:
    "The most common lease red flags in residential leases — what each means, whether it's enforceable, and what to do if you see it.",
  alternates: { canonical: "https://leaseplain.com/resources/lease-red-flags" },
  openGraph: {
    title: "15 Lease Red Flags Every Tenant Should Know | LeasePlain",
    description: "The most common lease red flags in residential leases — what each means, whether it's enforceable, and what to do.",
    url: "https://leaseplain.com/resources/lease-red-flags",
  },
  keywords: ["lease red flags", "bad lease clauses", "lease warning signs", "tenant lease risks", "lease agreement problems"],
};

const redFlags = [
  {
    flag: "Damage deposit or cleaning deposit",
    severity: "High",
    detail: "In Ontario, landlords can only collect a last month's rent deposit. Any deposit labeled as a 'damage deposit,' 'cleaning deposit,' or 'pet deposit' is illegal under the RTA.",
    action: "Refuse to pay it. If you've already paid, file a T1 application with the LTB.",
    learnMore: { label: "Security Deposit Clause", href: "/lease-clause/security-deposit" },
  },
  {
    flag: "Deposit exceeding one month's rent",
    severity: "High",
    detail: "Even if called 'last month's rent,' a deposit greater than exactly one month's rent is unlawful in Ontario.",
    action: "Pay only one month's rent as the deposit. Document any amount the landlord tries to collect above that.",
    learnMore: null,
  },
  {
    flag: '"Subletting strictly prohibited"',
    severity: "High",
    detail: "A blanket prohibition on subletting is unenforceable in Ontario. Tenants have the right to sublet or assign — landlords cannot unreasonably withhold consent.",
    action: "Understand the clause is void. You still need landlord consent, but it cannot be unreasonably refused.",
    learnMore: { label: "Subletting Clause", href: "/lease-clause/subletting" },
  },
  {
    flag: "Large flat-fee early termination penalty",
    severity: "High",
    detail: "Clauses that impose a fixed fee (e.g., two months' rent) for breaking a lease early are generally unenforceable. Landlords must mitigate losses and can only claim actual damages.",
    action: "Know you likely don't owe the full penalty. Get legal advice before leaving early.",
    learnMore: { label: "Early Termination Clause", href: "/lease-clause/early-termination" },
  },
  {
    flag: "Late fees for overdue rent",
    severity: "High",
    detail: "Ontario law does not permit late fee charges for overdue rent. The landlord's remedy is the N4 process — not additional fees. Only NSF charges up to $20 are permitted.",
    action: "Do not pay late fees. If forced to, file a T1 application with the LTB.",
    learnMore: { label: "Late Fees Clause", href: "/lease-clause/late-fees" },
  },
  {
    flag: "Landlord can enter without notice",
    severity: "High",
    detail: "Ontario law requires at least 24 hours written notice before a landlord enters — except in genuine emergencies. A clause permitting otherwise is void.",
    action: "Know your right to 24-hour notice. If a landlord enters without notice repeatedly, document it and file a T2 with the LTB.",
    learnMore: null,
  },
  {
    flag: "Rent increase without guideline or proper notice",
    severity: "High",
    detail: "Any rent increase must follow the annual guideline (unless exempt), occur no more than once every 12 months, and be preceded by at least 90 days written notice on Form N1.",
    action: "Do not pay any rent increase that doesn't comply with these requirements. File a T1 if an illegal increase has already been charged.",
    learnMore: { label: "Rent Increase Rules", href: "/tenant-rights/rent-increase-rules" },
  },
  {
    flag: '"Tenant is responsible for all repairs"',
    severity: "Medium",
    detail: "This clause attempts to shift your landlord's maintenance obligations onto you. Under the RTA, landlords must maintain the property in good repair regardless of what the lease says.",
    action: "Know the clause is void in so far as it conflicts with the RTA. Document maintenance requests in writing.",
    learnMore: { label: "Maintenance Clause", href: "/lease-clause/maintenance" },
  },
  {
    flag: "Vague or unlimited landlord entry rights",
    severity: "Medium",
    detail: 'Clauses like "landlord may enter at any time for inspection" conflict with the 24-hour written notice requirement. Vague entry rights can facilitate harassment.',
    action: "Know the clause cannot override your statutory rights. Track all entries with dates.",
    learnMore: null,
  },
  {
    flag: "Automatic rent increase on renewal",
    severity: "Medium",
    detail: "Some leases contain clauses specifying that rent will automatically increase by a fixed amount or percentage upon renewal. These must still comply with proper notice and guideline requirements.",
    action: "Verify any automatic increase complies with the guideline and that 90 days notice is still required.",
    learnMore: null,
  },
  {
    flag: '"Tenant waives right to LTB proceedings"',
    severity: "Medium",
    detail: "You cannot waive your right to the LTB process — any clause attempting to do so is void under the RTA. Both parties retain access to the tribunal.",
    action: "Know this clause is unenforceable and your LTB rights remain intact.",
    learnMore: null,
  },
  {
    flag: "Responsibility for appliances the landlord owns",
    severity: "Medium",
    detail: "If the landlord provides appliances as part of the rental, they are generally responsible for maintaining them. Clauses that make you responsible for landlord-owned appliances are suspect.",
    action: "Clarify in writing before signing which appliances are your responsibility and which are the landlord's.",
    learnMore: null,
  },
  {
    flag: "NSF fee exceeding $20",
    severity: "Low",
    detail: "Ontario permits landlords to charge up to $20 for a returned cheque or failed payment. Any higher fee is unlawful.",
    action: "Refuse to pay NSF fees above $20. Request the excess be refunded.",
    learnMore: null,
  },
  {
    flag: "No move-in inspection clause",
    severity: "Low",
    detail: "A lease that doesn't address the condition of the unit at move-in creates risk for you. Without a documented inspection, you could be held responsible for pre-existing damage.",
    action: "Request a written move-in inspection report signed by both parties. Take timestamped photos regardless.",
    learnMore: null,
  },
  {
    flag: '"Landlord not responsible for injuries or loss"',
    severity: "Low",
    detail: "Blanket liability waivers in leases have limited enforceability, especially for injuries caused by the landlord's negligence or failure to maintain the property.",
    action: "Note the clause but understand it doesn't protect a negligent landlord. Maintain tenant insurance for your own protection.",
    learnMore: null,
  },
];

const severityColor: Record<string, string> = {
  High: "bg-red-50 text-red-700 border-red-100",
  Medium: "bg-amber-50 text-amber-700 border-amber-100",
  Low: "bg-slate-50 text-slate-600 border-slate-200",
};

export default function LeaseRedFlagsPage() {
  return (
    <>
      <ArticleSchema
        headline="15 Lease Red Flags Every Tenant Should Know"
        description="The most common lease red flags in residential leases — what each means, whether it's enforceable, and what to do if you see it."
        url="https://leaseplain.com/resources/lease-red-flags"
        datePublished="2025-01-15"
        dateModified="2026-05-15"
        keywords={["lease red flags", "bad lease clauses", "lease warning signs", "tenant lease risks"]}
      />
    <div className="flex flex-col min-h-full">
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Lease Red Flags</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                Red Flags
              </div>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3 h-3" aria-hidden="true" />
                10 min read
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              15 Lease Red Flags Every Tenant Should Know
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              These are the most common problematic clauses found in residential leases — what each
              one means, whether it's actually enforceable, and what you should do if you see it in
              your lease.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              {redFlags.map((item, i) => (
                <div key={item.flag} className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <h2 className="font-semibold text-slate-900">{item.flag}</h2>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${severityColor[item.severity]}`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3 ml-10">{item.detail}</p>
                  <div className="ml-10 bg-blue-50 border border-blue-100 rounded-lg p-3 mb-3">
                    <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">What to do</p>
                    <p className="text-xs text-blue-800 leading-relaxed flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item.action}
                    </p>
                  </div>
                  {item.learnMore && (
                    <Link href={item.learnMore.href} className="ml-10 text-xs text-blue-600 hover:underline flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" aria-hidden="true" />
                      Learn more: {item.learnMore.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What are the biggest red flags in a rental lease?", a: "Major red flags include: deposits exceeding provincial limits, waiving the right to notice for entry or rent increases, flat early-termination penalties beyond the landlord's actual losses, illegal fees, broad damage liability ignoring normal wear and tear, and clauses restricting your right to have guests or occupants." },
                  { q: "What does a 'landlord may terminate at any time' clause mean?", a: "This is a serious red flag. Most Canadian provinces do not allow landlords to terminate tenancies without cause. A clause purporting to give landlords unlimited termination rights conflicts with provincial law and may be unenforceable — but it signals a problematic landlord." },
                  { q: "Should I be worried about a very long lease?", a: "Leases longer than 12 months can be fine, but consider your flexibility needs. Also check whether the rent-increase rules are clear — a 3-year lease with vague rent escalation language could expose you to unexpected increases." },
                  { q: "What does 'tenant responsible for all repairs' mean?", a: "This clause attempts to shift the landlord's statutory repair obligation to you. It is largely unenforceable — provincial law requires landlords to maintain the unit in a good state of repair. You are only responsible for damage you cause beyond normal wear and tear." },
                  { q: "How can I tell if a lease clause is illegal in my province?", a: "Use LeasePlain to flag problem clauses, check your province's Residential Tenancies Act online, or call your provincial tenancy tribunal's information line. Tenant legal clinics also offer free advice on whether specific clauses violate the law." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your lease for red flags</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will automatically scan for these and other red
                  flags — then explain what they mean for you.
                </p>
                <Link
                  href="/upload"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                >
                  <Upload className="w-4 h-4" aria-hidden="true" />
                  Analyze My Lease
                </Link>
                <p className="text-xs text-blue-200 mt-3 text-center">Not legal advice</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">Severity key</h3>
                <div className="flex flex-col gap-1.5 mt-2">
                  {Object.entries(severityColor).map(([key, cls]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${cls}`}>{key}</span>
                      <span className="text-xs text-slate-500">{key === "High" ? "Likely illegal or void" : key === "Medium" ? "Problematic — worth questioning" : "Minor — be aware"}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Guides</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
                    { label: "How to Read a Lease", href: "/resources/how-to-read-a-lease" },
                    { label: "Tenant Rights in Ontario", href: "/tenant-rights/ontario" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
