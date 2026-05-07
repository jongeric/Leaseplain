import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckSquare, ChevronRight, Upload } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Spot Hidden Fees in Your Lease Agreement | LeasePlain",
  description:
    "Learn which hidden fees landlords add to leases, which are illegal in Ontario, and how to negotiate their removal.",
  alternates: { canonical: "https://leaseplain.com/resources/hidden-lease-fees" },
};

export default function HiddenLeaseFeesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-slate-50 border-b border-slate-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources" className="hover:underline">Resources</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <Link href="/resources/before-you-sign" className="hover:underline">Before You Sign</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span>Hidden Lease Fees</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-blue-100">
              <CheckSquare className="w-3.5 h-3.5" aria-hidden="true" />
              Lease Resource
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
              How to Spot Hidden Fees in Your Lease Agreement
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Some landlords bury extra charges in the fine print. Here's how to find them,
              which ones are illegal in Ontario, and how to push back.
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-14 px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Hidden Fees Landlords Add to Leases
                </h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Beyond monthly rent, some landlords add extra charges to leases — sometimes
                  disclosed upfront, sometimes buried in schedules or addenda. Watch for:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      fee: "Administrative fees",
                      detail: 'Often labeled "lease administration fee" or "move-in processing fee." These are sometimes charged before the tenancy begins and may not be disclosed prominently.',
                    },
                    {
                      fee: "Key replacement fees",
                      detail: "Charges for replacing keys or fobs. A reasonable cost for actual replacement is acceptable; flat fees of $200+ for a fob replacement are a red flag.",
                    },
                    {
                      fee: "Move-in / move-out fees",
                      detail: "Fees charged for the privilege of using an elevator or loading area on move-in or move-out days. Common in condo buildings, sometimes charged even when use isn't required.",
                    },
                    {
                      fee: "Parking fees",
                      detail: "Parking charges that aren't clearly listed upfront, or that are added mid-tenancy without proper notice.",
                    },
                    {
                      fee: "Amenity charges",
                      detail: 'Monthly fees for gym, pool, or concierge access — sometimes added separately from rent even though access was implied as part of the rental.',
                    },
                    {
                      fee: "Appliance rental fees",
                      detail: "Charges for renting appliances (e.g., air conditioner or water heater) that the landlord installs in the unit. These are sometimes disclosed poorly.",
                    },
                  ].map((item) => (
                    <li key={item.fee} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                      <p className="font-semibold text-slate-900 mb-1">{item.fee}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Fees That Are Illegal in Ontario
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ontario's Residential Tenancies Act restricts what landlords can charge. The
                  following are either prohibited or unenforceable:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      fee: "Damage deposits",
                      detail: "Ontario does not permit damage deposits. The only deposit a landlord can collect is a last month's rent deposit, which must equal exactly one month's rent (or less) and earn interest at the annual provincial guideline rate.",
                    },
                    {
                      fee: "Lease-break fees or buyout clauses",
                      detail: 'Flat-fee penalties for ending a lease early (e.g., "two months\' rent if you leave before the term ends") are generally unenforceable. Landlords must mitigate their losses and can only claim actual damages.',
                    },
                    {
                      fee: "Pet deposits",
                      detail: "Deposits specifically for pets are not permitted. No-pets clauses are void under the RTA s.14, and charging a separate deposit for a pet is unlawful.",
                    },
                    {
                      fee: "Late payment fees (beyond NSF)",
                      detail: "Charging late fees for overdue rent is not permitted in Ontario. The only fee related to payment failure that is allowed is an NSF (non-sufficient funds) charge, capped at $20.",
                    },
                  ].map((item) => (
                    <li key={item.fee} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.fee}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Note:</strong> If a landlord has already collected an illegal fee from
                    you, you can apply to the Landlord and Tenant Board (T1 application) to have
                    it returned, plus interest.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Negotiate or Remove Hidden Fees
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you spot fees in a lease that concern you, here's how to address them:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: "Ask for an itemized list of all charges",
                      detail: "Before signing, request a complete breakdown of every fee included in or separate from the lease. This forces transparency and surfaces any hidden charges.",
                    },
                    {
                      step: "Request removal in writing",
                      detail: "If you believe a fee is illegal or unreasonable, ask for it to be removed. Send your request by email so you have a record of the conversation.",
                    },
                    {
                      step: "Compare to market rates",
                      detail: "Look at what similar rentals charge for parking, amenities, or other add-ons. If the landlord's fees are significantly higher, use that as negotiation leverage.",
                    },
                    {
                      step: "Know when to walk away",
                      detail: "A landlord who insists on illegal fees before you've even signed is likely to be difficult during the tenancy. It's sometimes better to keep looking.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.step}</p>
                        <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">AI Lease Review</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Upload your lease and get a plain-English breakdown in seconds.
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
                <h3 className="font-semibold text-slate-900 mb-3 text-sm">Related Articles</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: "Lease Red Flags", href: "/resources/lease-red-flags" },
                    { label: "What to Check Before Signing", href: "/resources/check-before-signing-lease" },
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
