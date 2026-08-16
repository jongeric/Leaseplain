import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import FAQAccordion from "@/components/FAQAccordion";
import GetListedForm from "@/components/GetListedForm";
import LawyerCard from "@/components/LawyerCard";
import LeadRequestForm from "@/components/LeadRequestForm";
import { ChevronRight, Scale, Phone, Info, Star, Users } from "lucide-react";
import { DIRECTORY_CITIES, HELP_OPTIONS, getCity, getListingsByCity } from "@/lib/legalHelp";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return DIRECTORY_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return { title: "City Not Found | LeasePlain" };
  const title = `Tenant Lawyers & Paralegals in ${c.name} | LeasePlain`;
  const description = `How to get tenant legal help in ${c.name}, Ontario — free community legal clinics, duty counsel, licensed paralegals, and lawyers who can represent you at the Landlord and Tenant Board.`;
  return {
    title,
    description,
    alternates: { canonical: `https://leaseplain.com/tenant-lawyer/${c.slug}` },
    openGraph: {
      title,
      description,
      url: `https://leaseplain.com/tenant-lawyer/${c.slug}`,
      type: "website",
      images: [{ url: "https://leaseplain.com/og/tenant-lawyer.png", width: 1200, height: 630 }],
    },
  };
}

function cityFaqs(name: string) {
  return [
    {
      q: `Do I need a lawyer for a Landlord and Tenant Board hearing in ${name}?`,
      a: `Not necessarily. In Ontario, licensed paralegals can represent tenants at the LTB, often at a lower cost than a lawyer, and community legal clinics can represent eligible lower-income tenants for free. Free Tenant Duty Counsel is also available on your hearing day. Many ${name} tenants resolve their case without hiring a private lawyer.`,
    },
    {
      q: `How much does a tenant paralegal or lawyer cost in ${name}?`,
      a: `Fees vary by the professional and the complexity of your case. Licensed paralegals are generally more affordable than lawyers for LTB matters. Before paying anyone, check whether you qualify for a free community legal clinic, and use the Law Society Referral Service for a free initial consultation.`,
    },
    {
      q: `Where can I get free tenant legal help in ${name}?`,
      a: `Start with your local community legal clinic (funded by Legal Aid Ontario, income-tested) and the Tenant Duty Counsel Program at the LTB. Legal Aid Ontario can direct you to the right clinic at 1-800-668-8258. Steps to Justice and ACTO also offer free self-help information.`,
    },
    {
      q: `Can a paralegal represent me at the LTB in ${name}?`,
      a: `Yes. Ontario is one of the few places where licensed paralegals — regulated by the Law Society of Ontario — can represent tenants at the Landlord and Tenant Board. For most residential tenancy disputes, an experienced landlord-tenant paralegal is a common, cost-effective choice.`,
    },
  ];
}

export default async function TenantLawyerCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const faqs = cityFaqs(c.name);
  const listings = getListingsByCity(c.slug);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <div className="flex flex-col min-h-full">
        <Navbar />
        <main>
          <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <BreadcrumbNav
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Find a Tenant Lawyer", href: "/tenant-lawyer" },
                  { label: c.name },
                ]}
              />
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                <h1 className="text-4xl font-bold text-slate-900">Tenant Lawyers &amp; Paralegals in {c.name}</h1>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed speakable-summary">
                {c.blurb} If you&apos;re dealing with a rent increase, an eviction notice, or a repair
                dispute in {c.name}, here&apos;s how to get help — starting with the free options.
              </p>
            </div>
          </section>

          {/* Featured professionals */}
          <section className="py-12 px-4 bg-surface border-b border-line">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-brand" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-ink">Tenant-rights professionals in {c.name}</h2>
              </div>
              {listings.length > 0 ? (
                <>
                  <p className="text-muted mb-6">Verified paralegals and lawyers who take tenant matters in {c.name}.</p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {listings.map((l) => <LawyerCard key={l.name} listing={l} />)}
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-dashed border-line bg-surface-2 p-8 text-center">
                  <p className="text-ink font-semibold mb-1">This spot is open.</p>
                  <p className="text-muted text-sm mb-5 max-w-md mx-auto">
                    We&apos;re verifying tenant-rights lawyers and paralegals in {c.name} now. In the
                    meantime, use the free options below — or, if you&apos;re a professional, be the first
                    featured here.
                  </p>
                  <Link href="/for-lawyers" className="inline-flex items-center gap-2 bg-brand text-brand-fg font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-hover transition-colors text-sm">
                    Get featured in {c.name} <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Get matched (tenant lead routing) */}
          <section className="py-14 px-4 bg-surface-2 border-b border-line">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-3">
                  <Users className="w-4 h-4" aria-hidden="true" /> Get matched
                </div>
                <h2 className="text-2xl font-bold text-ink mb-3">Need help now? We&apos;ll point you in the right direction.</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Tell us what&apos;s happening in {c.name} and we&apos;ll help connect you with a
                  tenant-rights professional or the right free service. It only takes a minute.
                </p>
                <p className="text-sm text-subtle">
                  LeasePlain is not a law firm and this isn&apos;t legal advice — we help renters find the
                  right help.
                </p>
              </div>
              <LeadRequestForm city={c.name} />
            </div>
          </section>

          <section className="py-14 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Ways to get tenant legal help in {c.name}</h2>
                  <p className="text-slate-600 mb-6">
                    Ontario&apos;s tenant-help system is the same across the province. Work down this
                    list — most {c.name} tenants can get help without hiring a private lawyer.
                  </p>
                  <div className="space-y-4">
                    {HELP_OPTIONS.map((opt, i) => (
                      <div key={opt.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                              <h3 className="text-lg font-bold text-slate-900">{opt.title}</h3>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{opt.cost}</span>
                            </div>
                            <p className="text-sm font-medium text-indigo-700 mb-2">{opt.who}</p>
                            <p className="text-slate-700 text-sm leading-relaxed">{opt.detail}</p>
                            {opt.contact && (
                              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                                <Phone className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                                {opt.contact}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-blue-900">
                      LeasePlain is not a law firm and does not provide legal advice. This page helps
                      {" "}{c.name} tenants find qualified help. If you&apos;ve received a notice with a
                      deadline, act quickly — free services are often time-sensitive.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Know your rights before you call</h2>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    The stronger your understanding of your own case, the more you get out of any
                    consultation — free or paid. These plain-English guides cover the most common
                    {" "}{c.name} tenant issues:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {[
                      { label: "Got an N4 (non-payment)?", href: "/blog/n4-non-payment-rent-ontario" },
                      { label: "Fighting an illegal eviction", href: "/blog/how-to-fight-an-illegal-eviction-ontario" },
                      { label: "Bad-faith N12 & compensation", href: "/blog/bad-faith-n12-t5-compensation-ontario" },
                      { label: "Landlord won't repair", href: "/blog/withholding-rent-repairs-ontario" },
                      { label: "2026 rent increase rules", href: "/blog/ontario-rent-increase-guideline-2026" },
                      { label: "All Ontario tenant rights", href: "/tenant-rights/ontario" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                          <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <FAQAccordion items={faqs} />
                </div>
              </div>

              <aside className="flex flex-col gap-5">
                <div className="bg-indigo-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Check your lease first — free</h3>
                  <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
                    Before you spend on representation, upload your lease. We&apos;ll flag the issues in
                    plain English so you walk into any consultation prepared.
                  </p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm w-full justify-center"
                  >
                    Check My Lease
                  </Link>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">Other cities</h3>
                  <ul className="flex flex-col gap-2">
                    {DIRECTORY_CITIES.filter((o) => o.slug !== c.slug).slice(0, 6).map((o) => (
                      <li key={o.slug}>
                        <Link href={`/tenant-lawyer/${o.slug}`} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                          <ChevronRight className="w-3 h-3" aria-hidden="true" />
                          Tenant help in {o.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </section>

          {/* Get listed */}
          <section className="py-14 px-4 bg-slate-50 border-t border-slate-100">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Serve tenants in {c.name}?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you&apos;re a licensed paralegal or lawyer taking tenant cases in {c.name}, get listed
                  so renters here can find you. We verify LSO licensing before any listing goes live.
                </p>
                <p className="text-sm text-slate-500">Free during launch.</p>
              </div>
              <GetListedForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
