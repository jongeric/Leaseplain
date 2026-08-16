import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import GetListedForm from "@/components/GetListedForm";
import FAQAccordion from "@/components/FAQAccordion";
import { DIRECTORY_CITIES } from "@/lib/legalHelp";
import {
  Scale, BadgeCheck, TrendingUp, Users, Star, MapPin, Check, ChevronRight, Handshake, Search,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "For Tenant-Rights Lawyers & Paralegals | Grow Your Practice With LeasePlain",
  description:
    "LeasePlain connects tenant-rights lawyers and licensed paralegals with renters who need help. Get listed in our directory, reach high-intent clients, and build your reputation defending renters' rights.",
  alternates: { canonical: "https://leaseplain.com/for-lawyers" },
  openGraph: {
    title: "For Tenant-Rights Lawyers & Paralegals | LeasePlain",
    description:
      "Reach renters who need representation, get listed in our directory, and grow your tenant-rights practice.",
    url: "https://leaseplain.com/for-lawyers",
    type: "website",
    images: [{ url: "https://leaseplain.com/og/for-lawyers.png", width: 1200, height: 630 }],
  },
};

const benefits = [
  { icon: Users, title: "High-intent clients", desc: "Renters find you at the exact moment they're facing an eviction, a bad-faith N12, or a landlord who won't repair — not cold traffic." },
  { icon: TrendingUp, title: "Authority & backlinks", desc: "A profile on a trusted, jurisdiction-specific tenant-rights platform strengthens your reputation and your search presence." },
  { icon: BadgeCheck, title: "Verified & credible", desc: "We verify LSO licensing before any listing goes live, so renters trust who they find here — and so do you." },
  { icon: Scale, title: "Aligned with your mission", desc: "LeasePlain exists to help renters understand and defend their rights. Listing here signals you're on their side." },
];

const steps = [
  { n: 1, title: "Apply to be listed", desc: "Tell us about your practice and the cities you serve. Takes two minutes." },
  { n: 2, title: "We verify your licence", desc: "We confirm your standing with the Law Society of Ontario before publishing." },
  { n: 3, title: "Renters find you", desc: "Your profile appears in our city directory where tenants are actively looking for representation." },
];

const tiers = [
  {
    name: "Basic Listing",
    price: "Free",
    highlight: false,
    tagline: "For every verified professional",
    features: [
      "Verified profile in the directory",
      "Listed in one city",
      "Direct contact link",
      "“Defends renters' rights” designation",
    ],
    cta: "Get listed free",
  },
  {
    name: "Featured",
    price: "Founding cohort",
    highlight: true,
    tagline: "Priority visibility where it counts",
    features: [
      "Everything in Basic",
      "Priority placement above basic listings",
      "Featured badge & richer profile",
      "Listed in multiple cities you serve",
      "Highlighted on relevant guides",
    ],
    cta: "Request featured placement",
  },
  {
    name: "City Sponsor",
    price: "Let's talk",
    highlight: false,
    tagline: "Own your market",
    features: [
      "Everything in Featured",
      "Exclusive sponsor of a city or practice area",
      "Banner placement on that city's page",
      "First right of referral for local leads",
    ],
    cta: "Enquire about sponsorship",
  },
];

const faqItems = [
  {
    q: "Who can be listed in the LeasePlain directory?",
    a: "Licensed paralegals and lawyers in good standing with the Law Society of Ontario who take residential tenant matters, as well as community legal clinics and tenant advocates. We verify licensing before any listing is published.",
  },
  {
    q: "How much does it cost to be listed?",
    a: "A basic verified listing is free. Featured placement and city sponsorship are available to the founding cohort now and are arranged directly with us — use the form below to start the conversation.",
  },
  {
    q: "How do referrals work?",
    a: "Renters contact you directly through your listing. For sponsors and featured members, we can route qualified local enquiries to you first. We're building lead-routing carefully and transparently — tell us your capacity and preferences when you apply.",
  },
  {
    q: "Is this only for Ontario?",
    a: "We're launching in Ontario, where licensed paralegals can represent tenants at the Landlord and Tenant Board. We're expanding to other provinces — apply now and tell us your region so we can prioritize it.",
  },
];

export default function ForLawyersPage() {
  const proServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LeasePlain Directory for Tenant-Rights Lawyers & Paralegals",
    description:
      "A directory connecting Ontario tenant-rights lawyers and licensed paralegals with renters who need representation.",
    url: "https://leaseplain.com/for-lawyers",
    provider: { "@type": "Organization", name: "LeasePlain", url: "https://leaseplain.com" },
    areaServed: "Ontario, Canada",
    audience: { "@type": "Audience", audienceType: "Tenant-rights lawyers and licensed paralegals" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(proServiceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-800 to-violet-900 text-white">
            <div className="max-w-5xl mx-auto px-4 py-20">
              <BreadcrumbNav
                className="mb-6 [&_a]:text-indigo-200 [&_span]:text-indigo-300"
                items={[{ label: "Home", href: "/" }, { label: "For Lawyers" }]}
              />
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Scale className="w-4 h-4" aria-hidden="true" />
                For tenant-rights lawyers &amp; paralegals
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-3xl">
                Grow your tenant-rights practice where renters are already looking
              </h1>
              <p className="text-lg text-indigo-100 leading-relaxed max-w-2xl mb-8">
                Every day, Ontario renters come to LeasePlain to understand an eviction notice, a rent
                increase, or a landlord who won&apos;t make repairs. Get listed where they&apos;re
                looking for someone to fight for them — and build your authority defending renters&apos; rights.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#get-listed" className="inline-flex items-center gap-2 bg-white text-indigo-800 font-semibold px-6 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors">
                  Get listed <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link href="/tenant-lawyer" className="inline-flex items-center gap-2 bg-indigo-600/40 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-indigo-600/60 transition-colors">
                  <Search className="w-4 h-4" aria-hidden="true" /> See the directory
                </Link>
              </div>
            </div>
          </section>

          {/* Why list */}
          <section className="py-16 px-4 bg-surface">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-ink mb-3">Why list with LeasePlain</h2>
              <p className="text-muted max-w-2xl mb-10">
                We&apos;re not a generic lawyer directory. We&apos;re a tenant-rights platform, so the
                people who find you already understand their problem and are ready to act.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-line bg-card p-6 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-brand-soft flex items-center justify-center mb-4">
                      <b.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-ink mb-1.5">{b.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="py-16 px-4 bg-surface-2 border-y border-line">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-ink mb-10">How it works</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {steps.map((s) => (
                  <div key={s.n} className="relative rounded-2xl bg-card border border-line p-6">
                    <div className="w-9 h-9 rounded-full bg-brand text-brand-fg font-bold flex items-center justify-center mb-4">{s.n}</div>
                    <h3 className="font-bold text-ink mb-1.5">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tiers */}
          <section className="py-16 px-4 bg-surface">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl font-bold text-ink mb-3">Listing options</h2>
                <p className="text-muted">
                  Basic listings are free for every verified professional. Featured and sponsor
                  placements are open to our founding cohort now — arranged directly with our team.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 items-stretch">
                {tiers.map((t) => (
                  <div
                    key={t.name}
                    className={`relative rounded-2xl p-7 flex flex-col ${
                      t.highlight
                        ? "bg-card border-2 border-brand shadow-lg"
                        : "bg-card border border-line shadow-sm"
                    }`}
                  >
                    {t.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-brand text-brand-fg text-xs font-bold px-3 py-1 rounded-full">
                        <Star className="w-3 h-3" aria-hidden="true" /> Most visible
                      </span>
                    )}
                    <h3 className="font-bold text-lg text-ink">{t.name}</h3>
                    <p className="text-sm text-muted mb-3">{t.tagline}</p>
                    <p className="text-2xl font-extrabold text-ink mb-5">{t.price}</p>
                    <ul className="space-y-2.5 mb-7 flex-1">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                          <span className="w-4 h-4 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-brand" aria-hidden="true" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#get-listed"
                      className={`text-center font-semibold px-5 py-3 rounded-xl transition-colors text-sm ${
                        t.highlight
                          ? "bg-brand text-brand-fg hover:bg-brand-hover"
                          : "bg-surface-3 text-ink hover:bg-brand-soft"
                      }`}
                    >
                      {t.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cities strip */}
          <section className="py-14 px-4 bg-surface-2 border-y border-line">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-5 h-5 text-brand" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-ink">Claim your city</h2>
              </div>
              <p className="text-muted mb-6 max-w-2xl">
                The directory covers Ontario&apos;s major rental markets. Get listed in the cities you serve.
              </p>
              <div className="flex flex-wrap gap-2">
                {DIRECTORY_CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/tenant-lawyer/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink hover:border-brand hover:text-brand transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Get listed + form */}
          <section id="get-listed" className="py-16 px-4 bg-surface scroll-mt-20">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-3">
                  <Handshake className="w-4 h-4" aria-hidden="true" /> Join the founding cohort
                </div>
                <h2 className="text-3xl font-bold text-ink mb-3">Get listed</h2>
                <p className="text-muted leading-relaxed mb-5">
                  Tell us about your practice. We verify LSO licensing before any listing goes live, and
                  we&apos;ll follow up about featured placement or sponsorship if you&apos;re interested.
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" aria-hidden="true" /> Free basic listing during launch.</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" aria-hidden="true" /> Verified, credible, and tenant-focused.</li>
                  <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" aria-hidden="true" /> No long-term commitment.</li>
                </ul>
              </div>
              <GetListedForm />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-surface-2 border-t border-line">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-ink mb-6">Questions from legal professionals</h2>
              <FAQAccordion items={faqItems} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
