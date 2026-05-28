"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ExternalLink } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

interface ProvinceData {
  name: string;
  slug: string;
  legislation: string;
  tribunal: string;
  tribunal_url: string;
  deposit: string;
  rent_control: string;
  notice_rent_increase: string;
  notice_entry: string;
  notice_eviction_nonpayment: string;
  notice_landlord_end: string;
  subletting: string;
  pets: string;
  repairs: string;
  key_protections: string[];
}

const PROVINCES: Record<string, ProvinceData> = {
  ON: {
    name: "Ontario",
    slug: "ontario",
    legislation: "Residential Tenancies Act, 2006 (RTA)",
    tribunal: "Landlord and Tenant Board (LTB)",
    tribunal_url: "ltb.gov.on.ca",
    deposit: "Last month's rent only (= 1 month rent, earns interest). No security deposit.",
    rent_control: "2.1% guideline (2026). Units built after Nov 15, 2018 are exempt.",
    notice_rent_increase: "90 days written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "14 days (N4 form)",
    notice_landlord_end: "60 days (N12 for personal use)",
    subletting: "Landlord cannot unreasonably refuse. Right to sublet is protected.",
    pets: "No-pet clauses are void. Landlords cannot evict for having a pet.",
    repairs: "Landlord must maintain the unit in a good state of repair at all times.",
    key_protections: [
      "Rent increases capped annually",
      "Standard lease form mandatory",
      "Above-guideline increases require LTB application",
      "Eviction requires LTB order — notice alone is insufficient",
    ],
  },
  BC: {
    name: "British Columbia",
    slug: "british-columbia",
    legislation: "Residential Tenancy Act (RTA)",
    tribunal: "Residential Tenancy Branch (RTB)",
    tribunal_url: "gov.bc.ca/landlordtenant",
    deposit: "Security deposit: max 0.5x monthly rent. Pet deposit: max 0.5x monthly rent (separate).",
    rent_control: "3.0% allowable increase (2025), tied to BC CPI.",
    notice_rent_increase: "3 full calendar months written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "10 days",
    notice_landlord_end: "2 months (personal use), 4 months (renovations)",
    subletting: "Landlord must consent but cannot unreasonably withhold.",
    pets: "No-pet clauses generally enforceable in BC.",
    repairs: "Landlord must maintain the unit and comply with health/safety standards.",
    key_protections: [
      "Deposit must be returned within 15 days",
      "Tenant can apply for dispute resolution online",
      "Landlord must give 3 months notice for capital expenditure rent increases",
      "Rent increases tied to CPI",
    ],
  },
  AB: {
    name: "Alberta",
    slug: "alberta",
    legislation: "Residential Tenancies Act (RTA)",
    tribunal: "Residential Tenancy Dispute Resolution Service (RTDRS)",
    tribunal_url: "rtdrs.alberta.ca",
    deposit: "Security deposit: max 1x monthly rent.",
    rent_control: "No provincial rent control. Any increase is legal with 3 months' notice.",
    notice_rent_increase: "3 months written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "14 days",
    notice_landlord_end: "3 months (end of fixed term)",
    subletting: "Governed by lease terms — landlord can restrict subletting.",
    pets: "No-pet clauses are enforceable in Alberta.",
    repairs: "Landlord must ensure the unit is safe and habitable.",
    key_protections: [
      "RTDRS hearings are fast and low-cost",
      "Security deposit must be returned within 10 days",
      "Landlord must provide itemized deduction list",
      "No rent control means increases can be significant",
    ],
  },
  QC: {
    name: "Quebec",
    slug: "quebec",
    legislation: "Civil Code of Quebec / Act Respecting Lessor and Lessee",
    tribunal: "Tribunal administratif du logement (TAL)",
    tribunal_url: "tal.gouv.qc.ca",
    deposit: "No security deposits allowed by law. First month's rent only.",
    rent_control: "TAL-controlled formula. Tenant can refuse any increase; landlord must apply to TAL.",
    notice_rent_increase: "3–6 months before lease end (fixed-term), 3 months (month-to-month)",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "TAL process required",
    notice_landlord_end: "6 months before lease end (repossession)",
    subletting: "Tenant has right to sublet with landlord consent.",
    pets: "Governed by lease terms — restrictions may be enforceable.",
    repairs: "Landlord must ensure the dwelling is in good condition at the start of and throughout the tenancy.",
    key_protections: [
      "Mandatory standard lease form (bail)",
      "Tenant can refuse rent increases — landlord must go to TAL",
      "Strong anti-repossession rights (especially for tenants 70+)",
      "July 1 lease renewal cycle — changes must be given well in advance",
    ],
  },
  MB: {
    name: "Manitoba",
    slug: "manitoba",
    legislation: "Residential Tenancies Act",
    tribunal: "Residential Tenancies Branch (RTB)",
    tribunal_url: "gov.mb.ca/cca/rtb",
    deposit: "Security deposit: max 0.5x monthly rent.",
    rent_control: "Rent increases require RTB approval above a set guideline.",
    notice_rent_increase: "3 months written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "5 days to pay, then 30 days to vacate",
    notice_landlord_end: "3 months",
    subletting: "Landlord consent required.",
    pets: "Governed by lease terms.",
    repairs: "Landlord must maintain the unit in a good state of repair.",
    key_protections: [
      "RTB rent increase approval required above guideline",
      "Deposit must be returned within 14 days",
      "Free dispute resolution through RTB",
    ],
  },
  SK: {
    name: "Saskatchewan",
    slug: "saskatchewan",
    legislation: "Residential Tenancies Act, 2006",
    tribunal: "Office of Residential Tenancies (ORT)",
    tribunal_url: "justice.gov.sk.ca/ort",
    deposit: "Security deposit: max 1x monthly rent.",
    rent_control: "No rent control. Any increase allowed.",
    notice_rent_increase: "As per lease (usually 1 month)",
    notice_entry: "Reasonable notice (usually 24 hours)",
    notice_eviction_nonpayment: "30 days",
    notice_landlord_end: "1 month",
    subletting: "Governed by lease terms.",
    pets: "Governed by lease terms.",
    repairs: "Landlord must maintain the unit in a habitable condition.",
    key_protections: [
      "ORT hearings are accessible and low-cost",
      "Security deposit protected",
      "Tenant can apply for rent reduction if unit not maintained",
    ],
  },
  NS: {
    name: "Nova Scotia",
    slug: "nova-scotia",
    legislation: "Residential Tenancies Act",
    tribunal: "Director of Residential Tenancies",
    tribunal_url: "novascotia.ca/just/residentialtenancies",
    deposit: "Security deposit: max 0.5x monthly rent.",
    rent_control: "Annual cap applies — check current year's cap.",
    notice_rent_increase: "4 months written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "15 days",
    notice_landlord_end: "3 months",
    subletting: "Landlord consent required.",
    pets: "Governed by lease terms.",
    repairs: "Landlord must maintain the unit in a good state of repair.",
    key_protections: [
      "Rent increase cap applies annually",
      "Deposit must be returned within 10 days",
      "Formal dispute process through Director's office",
    ],
  },
  NB: {
    name: "New Brunswick",
    slug: "new-brunswick",
    legislation: "Residential Tenancies Act",
    tribunal: "Rentalsman",
    tribunal_url: "gnb.ca/0062/acts/rentalsman-e.asp",
    deposit: "Security deposit: max 1x monthly rent.",
    rent_control: "No rent control.",
    notice_rent_increase: "3 months written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "15 days",
    notice_landlord_end: "3 months",
    subletting: "Governed by lease terms.",
    pets: "Governed by lease terms.",
    repairs: "Landlord must maintain the unit.",
    key_protections: [
      "Rentalsman resolves disputes",
      "Deposit must be returned within 7 days",
      "No rent control — increases can be significant",
    ],
  },
  PE: {
    name: "Prince Edward Island",
    slug: "prince-edward-island",
    legislation: "Rental of Residential Property Act",
    tribunal: "Island Regulatory and Appeals Commission (IRAC)",
    tribunal_url: "irac.pe.ca",
    deposit: "Security deposit: max 2x monthly rent.",
    rent_control: "Rent increases require IRAC approval.",
    notice_rent_increase: "IRAC process required",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "20 days",
    notice_landlord_end: "2 months",
    subletting: "Landlord consent required.",
    pets: "Governed by lease terms.",
    repairs: "Landlord must maintain the unit.",
    key_protections: [
      "Rent review through IRAC",
      "Strong process for challenging increases",
      "Dispute resolution through IRAC",
    ],
  },
  NL: {
    name: "Newfoundland & Labrador",
    slug: "newfoundland-labrador",
    legislation: "Residential Tenancies Act, 2018",
    tribunal: "Residential Tenancies Division",
    tribunal_url: "assembly.nl.ca/legislation/sr/statutes/r14-2.htm",
    deposit: "Security deposit: max 75% of monthly rent.",
    rent_control: "No rent control.",
    notice_rent_increase: "8 weeks written notice",
    notice_entry: "24 hours written notice",
    notice_eviction_nonpayment: "15 days",
    notice_landlord_end: "3 months",
    subletting: "Governed by lease terms.",
    pets: "Governed by lease terms.",
    repairs: "Landlord must maintain the unit in a good state of repair.",
    key_protections: [
      "Residential Tenancies Division resolves disputes",
      "Deposit protected with return deadline",
      "No rent control — increases can be significant",
    ],
  },
};

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2.5 border-b border-slate-100 last:border-b-0">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-sm text-slate-800">{value}</p>
    </div>
  );
}

export default function TenantRightsLookupClient() {
  const [province, setProvince] = useState("");
  const data = province ? PROVINCES[province] : null;

  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 py-12 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Tenant Rights Lookup by Province
            </h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Select your province to instantly see deposit limits, rent control rules, notice periods, and more.
            </p>
          </div>

          {/* Province selector */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Select your province
            </label>
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Choose province…</option>
              {Object.entries(PROVINCES).map(([code, p]) => (
                <option key={code} value={code}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Results card */}
          {data && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-6">
              {/* Card header */}
              <div className="bg-blue-600 px-6 py-5">
                <h2 className="text-xl font-bold text-white mb-1">{data.name}</h2>
                <p className="text-blue-100 text-sm mb-2">{data.legislation}</p>
                <a
                  href={`https://${data.tribunal_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-100 hover:text-white bg-blue-700 hover:bg-blue-800 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {data.tribunal}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-6">
                {/* 2-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Deposit Rules */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Deposit Rules
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed">{data.deposit}</p>
                  </div>

                  {/* Rent Control */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Rent Control
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed">{data.rent_control}</p>
                  </div>
                </div>

                {/* Notice Periods */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Notice Periods
                  </h3>
                  <div className="bg-slate-50 rounded-xl px-4 divide-y divide-slate-100">
                    <InfoRow label="Rent Increase" value={data.notice_rent_increase} />
                    <InfoRow label="Entry" value={data.notice_entry} />
                    <InfoRow label="Eviction (Non-Payment)" value={data.notice_eviction_nonpayment} />
                    <InfoRow label="Landlord Ending Tenancy" value={data.notice_landlord_end} />
                  </div>
                </div>

                {/* Subletting & Pets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Subletting
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed">{data.subletting}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Pets
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed">{data.pets}</p>
                  </div>
                </div>

                {/* Repairs */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Landlord Repair Obligations
                  </h3>
                  <p className="text-sm text-slate-800 leading-relaxed">{data.repairs}</p>
                </div>

                {/* Key Protections */}
                <div className="mb-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Key Protections
                  </h3>
                  <ul className="space-y-2">
                    {data.key_protections.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer link */}
                <div className="border-t border-slate-100 pt-4">
                  <Link
                    href={`/tenant-rights/${data.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Full {data.name} Tenant Rights Guide →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer + CTA */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Not legal advice.</strong> Laws change and details vary by situation. Always verify with your provincial tenancy authority or a legal professional.
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8 text-center">
            <p className="text-slate-700 text-sm mb-3">
              Have a lease you want reviewed? LeasePlain analyzes the full text and flags concerning clauses.
            </p>
            <Link
              href="/upload"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
            >
              Analyze My Lease Free
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <FAQAccordion
            items={[
              {
                q: "Which province has the strongest tenant protections?",
                a: "Ontario and Quebec are generally considered to have the strongest tenant protections in Canada. Ontario's LTB provides robust dispute resolution, and Quebec's TAL controls rent increases and has strong anti-eviction rules. British Columbia also has strong protections with rent control and deposit limits.",
              },
              {
                q: "What is a tenancy tribunal?",
                a: "A tenancy tribunal (like Ontario's LTB or BC's RTB) is a specialized administrative body that handles disputes between landlords and tenants. Filing is generally free or low-cost for tenants, and hearings can often be conducted online.",
              },
              {
                q: "Do I need a lawyer to use the tenancy tribunal?",
                a: "No. Tenancy tribunals are designed to be accessible without legal representation. Many tenants self-represent successfully. Free tenant advocacy and legal aid services are also available in most provinces.",
              },
              {
                q: "What's the difference between a fixed-term and month-to-month lease?",
                a: "A fixed-term lease runs for a set period (usually 1 year) and the rent cannot be changed during that time. A month-to-month tenancy continues indefinitely until either party gives proper notice. In most provinces, a fixed-term lease automatically converts to month-to-month when it expires.",
              },
              {
                q: "Can provincial tenant rights be changed by my lease?",
                a: "No. Lease clauses that attempt to reduce your statutory rights are void. Your provincial Residential Tenancies Act sets minimum protections that cannot be contracted away. The lease can give you more rights, but not fewer.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
