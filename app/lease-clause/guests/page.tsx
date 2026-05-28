import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ChevronRight, Upload, AlertTriangle, CheckCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-clause/guests",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

export const metadata: Metadata = {
  title: "Guest Clause in a Lease: How Long Can Guests Stay? | LeasePlain",
  description:
    "What does a guest clause in a lease mean? Learn the difference between guests and occupants in Ontario, whether guest restrictions are enforceable, and what red flags to avoid.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/guests" },
  keywords: ["guest clause lease", "how long can guests stay rental", "guest vs occupant Ontario", "tenant guest rights Canada", "overnight guest lease rules"],
  openGraph: {
    title: "Guest Clause in a Lease: How Long Can Guests Stay? | LeasePlain",
    description: "What does a guest clause in a lease mean? Learn the difference between guests and occupants in Ontario, whether guest restrictions are enforceable, and what red flags to avoid.",
    url: "https://leaseplain.com/lease-clause/guests",
    type: "website",
  },
};

const redFlags = [
  {
    flag: "Any overnight guest defined as unauthorized or requiring landlord approval",
    detail:
      "Requiring your landlord's permission every time someone spends the night is an unreasonable interference with your right to peaceful enjoyment of your home. Such a clause would likely be unenforceable under the RTA.",
  },
  {
    flag: "Extreme limitations such as 'no guests at any time' or 'no visitors after 10 PM'",
    detail:
      "These types of blanket restrictions go far beyond what is reasonable and interfere with a tenant's fundamental right to peaceful enjoyment. They are almost certainly unenforceable.",
  },
  {
    flag: "Clause imposing financial penalties for unapproved guests",
    detail:
      "A landlord cannot charge a fee or fine for having guests. The RTA does not permit landlords to impose additional charges beyond rent, permitted deposits, and NSF fees.",
  },
  {
    flag: "Guest clause that attempts to convert guests into unauthorized occupants immediately",
    detail:
      "Some clauses state that any person staying more than a few consecutive nights is automatically an 'unauthorized occupant' subject to notice. While the occupant distinction has legal relevance, the timeframe must be reasonable.",
  },
];

const faqs = [
  { q: "Can a landlord restrict guests in a lease?", a: "Landlords can include reasonable guest policies, but very restrictive clauses (like banning all overnight guests) may be unenforceable. Tenants in Canada generally have the right to reasonable enjoyment of their unit, which includes hosting visitors." },
  { q: "What is the legal difference between a guest and an occupant?", a: "A guest is a temporary visitor with no right to occupy the unit on their own. An occupant is someone who lives there regularly but is not on the lease. Having unauthorized long-term occupants can be grounds for lease termination in most provinces." },
  { q: "Can a landlord charge extra rent for an additional occupant?", a: "In most provinces, landlords cannot charge more rent simply because of an additional legal occupant (e.g., a partner) unless the increase follows proper notice procedures. However, additional occupants should generally be disclosed to the landlord." },
  { q: "Can my landlord ban my family from visiting?", a: "No. Restricting family members from visiting your home is generally unreasonable. Lease clauses that prohibit visits by immediate family members are likely unenforceable as a violation of the tenant's right to quiet enjoyment." },
  { q: "What constitutes an unauthorized occupant in Canada?", a: "If someone moves in permanently without being added to the lease or notifying the landlord, they may be an unauthorized occupant. This can lead to lease termination, especially if the additional person increases wear and tear or causes disturbances." }
];

export default function GuestsClausePage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Lease Clauses", href: "https://leaseplain.com/lease-clauses" },
        { name: "Guests", href: "https://leaseplain.com/lease-clause/guests" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "<") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a }
            }))
          }).replace(/</g, "<")
        }}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Guests</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Guest Clause in a Lease: How Long Can Guests Stay?
            </h1>
            <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed">
              A guest clause in your lease defines who counts as a &ldquo;guest&rdquo; versus an
              &ldquo;occupant,&rdquo; how long visitors can stay, and whether the landlord has any say
              in your social life. In Ontario, these clauses have real limits.
            </p>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is a Guest Clause?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A guest clause in a lease sets out the rules for visitors to your rental unit.
                  Typical clauses define how long a &ldquo;guest&rdquo; can stay before they are
                  considered an unauthorized occupant. Common standard lease language permits guests
                  for 7 to 14 consecutive days, or up to a certain number of days per calendar month.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The legal distinction between a <strong>guest</strong> and an <strong>occupant</strong> matters
                  because:
                </p>
                <ul className="flex flex-col gap-3 mb-4">
                  {[
                    { label: "A guest", note: "is a temporary visitor with no rights under the RTA. They are not on the lease and have no tenancy." },
                    { label: "An occupant", note: "is a person who lives in the unit without being a named tenant. They have some limited protections and their presence may affect the tenancy." },
                    { label: "A tenant", note: "is named on the lease, has full RTA protections, and is legally liable for rent and obligations." },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>{item.label}:</strong> {item.note}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Landlords include guest clauses partly to prevent &ldquo;de facto subletting&rdquo; — where
                  an additional person effectively moves in without being added to the lease. While
                  that concern is legitimate, many guest clauses go far beyond what is legally
                  permissible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Are Guest Restrictions Enforceable in Ontario?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ontario&apos;s <em>Residential Tenancies Act, 2006</em> does not explicitly cap the
                  length of guest stays. The Act does, however, enshrine a tenant&apos;s right to
                  <strong> peaceful enjoyment</strong> of their unit (s. 22), which includes the right
                  to have visitors and control who enters their home.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Reasonable guest clauses — such as those preventing a person from effectively
                  moving in without the landlord&apos;s knowledge — can be enforceable. The key test is
                  reasonableness. Courts and the LTB look at whether:
                </p>
                <ul className="flex flex-col gap-3 mb-5">
                  {[
                    "The restriction is proportionate to a legitimate landlord interest (preventing unauthorized occupancy, protecting other residents)",
                    "The guest clause does not amount to a blanket prohibition on having visitors",
                    "The clause does not require landlord approval for normal social interactions",
                    "The timeframes set out are not so short as to be unreasonable (e.g., no guests for more than 2 nights is likely too restrictive)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Where a guest effectively becomes a permanent occupant, a landlord may apply to the
                  LTB if the person has not been added to the lease and there is a legitimate concern
                  about unauthorized occupancy — particularly if additional rent is justified. But
                  normal visits of friends and family cannot be restricted or penalized.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Guest Clauses</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Watch for these common overreaches in guest clauses:
                </p>
                <div className="flex flex-col gap-5">
                  {redFlags.map((item) => (
                    <div key={item.flag} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 mb-1">{item.flag}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
              </div>

            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your guest clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and our AI will flag any guest clauses that may be
                  unenforceable or that interfere with your right to peaceful enjoyment.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Pages</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Subletting", href: "/lease-clause/subletting" },
                    { label: "Early Termination", href: "/lease-clause/early-termination" },
                    { label: "All Lease Clauses", href: "/lease-clauses" },
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
  );
}
