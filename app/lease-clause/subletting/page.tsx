import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, AlertTriangle, CheckCircle, ChevronRight, Upload } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = "force-static";

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://leaseplain.com/lease-clause/subletting",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable-summary"],
  },
};

export const metadata: Metadata = {
  title: "Subletting Clause Explained – Your Rights to Sublet in Ontario | LeasePlain",
  description:
    "Understand subletting and assignment clauses in your lease. Learn when your landlord can and cannot refuse a sublet request in Ontario.",
  alternates: { canonical: "https://leaseplain.com/lease-clause/subletting" },
  keywords: ["subletting clause Ontario", "tenant right to sublet Canada", "lease assignment Ontario", "landlord refuse sublet RTA", "sublease agreement Ontario"],
  openGraph: {
    title: "Subletting Clause Explained – Your Rights to Sublet in Ontario | LeasePlain",
    description: "Understand subletting and assignment clauses in your lease. Learn when your landlord can and cannot refuse a sublet request in Ontario.",
    url: "https://leaseplain.com/lease-clause/subletting",
    type: "website",
  },
};

const subletRights = [
  "You have the right to sublet or assign your lease — a blanket prohibition is not enforceable in Ontario.",
  "Your landlord's consent is required, but it cannot be withheld unreasonably.",
  "If the landlord refuses consent without reasonable grounds, you can apply to the LTB.",
  "If the landlord refuses a valid assignment, you have the right to terminate with 30 days notice.",
  "You remain responsible to the landlord for rent and obligations even after subletting.",
  "An assignee steps fully into your shoes — they take on all rights and obligations under the lease.",
];

const landlordRefusalGrounds = [
  "The proposed subtenant has a poor rental history or references",
  "The proposed subtenant cannot demonstrate ability to pay rent",
  "The number of occupants would violate health or safety standards",
  "The proposed use differs materially from what the lease permits",
];

const redFlags = [
  '"Subletting is strictly prohibited" — this clause is unenforceable under the RTA',
  "Clause requires landlord approval with no timeline for response (allowing indefinite delay)",
  "Clause allows landlord to charge a fee for processing a sublet request",
  "Assignment rights waived entirely in the lease",
  "Clause imposes liability on original tenant even after assignment (when proper assignment was completed)",
];

const questions = [
  "What is your process for approving a sublet or assignment request?",
  "How long does your approval process typically take?",
  "What documentation do you require from a proposed subtenant?",
  "If I assign the lease, am I fully released from obligations once the assignment is accepted?",
];

export default function SublettingPage() {
  return (
    <div className="flex flex-col min-h-full">
      <BreadcrumbSchema items={[
        { name: "Home", href: "https://leaseplain.com" },
        { name: "Lease Clauses", href: "https://leaseplain.com/lease-clauses" },
        { name: "Subletting", href: "https://leaseplain.com/lease-clause/subletting" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema).replace(/</g, "\u003c") }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { q: "What is subletting and how does it differ from assigning a lease?", a: "Subletting means you (the original tenant) temporarily move out, a subtenant takes over, but you remain liable under the original lease. Assignment means you transfer the entire lease to someone else and leave permanently. Assignment requires the landlord's consent in most provinces." },
              { q: "Can my landlord refuse to let me sublet?", a: "Canadian landlords generally cannot unreasonably withhold consent to sublet. They may reject a specific subtenant if they have good reason (e.g., the subtenant cannot afford rent), but they cannot simply say 'no subletting allowed.'" },
              { q: "Am I still responsible if my subtenant doesn't pay rent?", a: "Yes. As the head tenant, you remain liable to the landlord for rent and damages caused by your subtenant. If your subtenant defaults, the landlord can pursue you — so choose your subtenant carefully and ideally sign a written sublease." },
              { q: "Can a landlord charge a fee to approve a sublease?", a: "No. In most Canadian provinces, charging a fee to consent to a sublet or assignment is prohibited. Only reasonable out-of-pocket expenses (like credit check costs) may be charged in some jurisdictions." },
              { q: "What does 'no subletting' in a lease mean legally?", a: "A blanket no-subletting clause may be unenforceable if provincial law gives tenants the right to sublet with landlord consent. For example, Ontario's RTA allows tenants to sublet and a lease clause cannot override this statutory right." }
            ].map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a }
            }))
          }).replace(/</g, "<")
        }}
      />
      <Navbar />

      <main>
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/lease-clauses" className="hover:underline">Lease Clauses</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Subletting</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Clause Explained
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Subletting Clause: What You Can and Can't Do
            </h1>
            <p className="speakable-summary text-lg text-slate-600 max-w-2xl leading-relaxed">
              A subletting clause governs your right to have someone else take over your unit
              temporarily (sublet) or permanently (assign). In Ontario, landlords cannot simply
              prohibit subletting — your rights are protected under the RTA.
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Sublet vs. Assignment: What's the Difference?</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-2">Subletting</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      You temporarily transfer possession of the unit to another person (the subtenant)
                      for a fixed period, then return. You remain responsible to the landlord throughout.
                      The subtenant pays you, and you pay the landlord.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-2">Assignment</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      You permanently transfer all your rights and obligations under the lease to a new
                      tenant (the assignee). Once accepted by the landlord, you are generally released
                      from future obligations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights in Ontario</h2>
                <ul className="flex flex-col gap-3">
                  {subletRights.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">When Can a Landlord Refuse?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A landlord can refuse a sublet or assignment for legitimate reasons. Reasonable
                  grounds for refusal include:
                </p>
                <ul className="flex flex-col gap-3">
                  {landlordRefusalGrounds.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                  A landlord cannot refuse simply because they want a higher-paying tenant, or because
                  they want to renovate the unit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Subletting Clauses</h2>
                <ul className="flex flex-col gap-3">
                  {redFlags.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions to Ask Your Landlord</h2>
                <ul className="flex flex-col gap-3">
                  {questions.map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <FAQAccordion items={[
                  { q: "What is subletting and how does it differ from assigning a lease?", a: "Subletting means you (the original tenant) temporarily move out, a subtenant takes over, but you remain liable under the original lease. Assignment means you transfer the entire lease to someone else and leave permanently. Assignment requires the landlord's consent in most provinces." },
                  { q: "Can my landlord refuse to let me sublet?", a: "Canadian landlords generally cannot unreasonably withhold consent to sublet. They may reject a specific subtenant if they have good reason (e.g., the subtenant cannot afford rent), but they cannot simply say 'no subletting allowed.'" },
                  { q: "Am I still responsible if my subtenant doesn't pay rent?", a: "Yes. As the head tenant, you remain liable to the landlord for rent and damages caused by your subtenant. If your subtenant defaults, the landlord can pursue you — so choose your subtenant carefully and ideally sign a written sublease." },
                  { q: "Can a landlord charge a fee to approve a sublease?", a: "No. In most Canadian provinces, charging a fee to consent to a sublet or assignment is prohibited. Only reasonable out-of-pocket expenses (like credit check costs) may be charged in some jurisdictions." },
                  { q: "What does 'no subletting' in a lease mean legally?", a: "A blanket no-subletting clause may be unenforceable if provincial law gives tenants the right to sublet with landlord consent. For example, Ontario's RTA allows tenants to sublet and a lease clause cannot override this statutory right." }
                ]} />
              </div>


            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Check your subletting clause</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Our AI flags subletting clauses that unlawfully restrict your rights or impose
                  unreasonable conditions under Ontario law.
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
                    { label: "Early Termination Clause", href: "/lease-clause/early-termination" },
                    { label: "Breaking a Lease", href: "/tenant-rights/breaking-a-lease" },
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
  );
}
