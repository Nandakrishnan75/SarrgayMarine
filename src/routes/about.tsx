import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Compass,
  FileCheck2,
  Gauge,
  PhoneCall,
  ShieldCheck,
  Ship,
} from "lucide-react";
import engine from "@/assets/engine-room.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import { Btn, WHATSAPP, TEL, PHONE, EMAIL, EMAIL_OPS, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About Us | Technical Authority & Leadership | SARRGAY MARINE",
      "Sarrgay Marine is your trusted technical partner in maritime engineering. Led by veteran Chief Engineers, delivering precision propulsion overhauls, auxiliary maintenance, and shipyard management worldwide."
    ),
  component: About,
});

const metrics = [
  {
    num: "100+",
    label: "Certified Engineers",
    detail: "Licensed Chief Engineers, electrical superintendents & flying squads",
  },
  {
    num: "50+",
    label: "Global Ports Serviced",
    detail: "Rapid deployment across India, Singapore, UAE & Sri Lanka hubs",
  },
  {
    num: "12 hrs",
    label: "Rapid Mobilization",
    detail: "Average response from emergency notification to onboard arrival",
  },
  {
    num: "100%",
    label: "Class Sign-off Rate",
    detail: "Zero-defect survey approvals with ABS, DNV, Lloyd's & IRS",
  },
];

const pillars = [
  {
    index: "01",
    title: "Uncompromising Safety",
    description:
      "Every operation strictly adheres to IMO, SOLAS, and ISM Code mandates. Safety is never compromised for speed; our teams maintain a rigorous zero-lost-time injury standard across dry docks and open-sea voyage repairs.",
  },
  {
    index: "02",
    title: "Micron Precision",
    description:
      "We operate to manufacturer tolerances down to 0.01 mm. Calibrated laser optical alignment, crankshaft deflection curves, and bearing clearances are logged with scientific rigor to protect your engine's design lifespan.",
  },
  {
    index: "03",
    title: "Rapid Global Mobilization",
    description:
      "Our tactical riding crews hold valid international Seafarer Discharge Books (CDC) and STCW certifications, enabling instant air-dispatch to anchorages, bunker stations, or open passages without visa friction.",
  },
  {
    index: "04",
    title: "Audited Traceability",
    description:
      "Transparency on every job. We deliver exhaustive surveyor dossiers with pre- and post-overhaul measurement logs, non-destructive testing (NDT), dye-penetrant reports, and official sea-trial indicator cards.",
  },
];

const competencies = [
  {
    id: "01",
    title: "Main Propulsion Plants",
    subtitle: "2-Stroke & 4-Stroke Marine Diesel Engines",
    systems: [
      "MAN B&W 2-Stroke (MC, MC-C, ME-C, ME-B Series)",
      "MAN B&W 4-Stroke Medium Speed Engines",
      "Wärtsilä / Sulzer (RTA, RT-flex, X-Series)",
      "WinGD Propulsion & Caterpillar Marine Systems",
    ],
  },
  {
    id: "02",
    title: "Auxiliary Power Generation",
    subtitle: "Heavy Fuel & Marine Gas Oil Diesel Gensets",
    systems: [
      "Yanmar Marine Diesel (EY, NY, HAL, M200 Series)",
      "Daihatsu Diesel (DK, DC, DE Series)",
      "Mitsubishi Heavy Industries (MHI) Auxiliaries",
      "Hyundai HiMSEN & Cummins Marine Gensets",
    ],
  },
  {
    id: "03",
    title: "Fluid Separation & Pumping",
    subtitle: "Centrifugal Purifiers & Auxiliary Dynamics",
    systems: [
      "Alfa Laval High-Speed Disc Centrifuges & PHEs",
      "GEA Westfalia Fuel & Lube Oil Purifier Systems",
      "IMO Screw Pumps & Taiko Kikai Gear Pumps",
      "Ballast Water Systems & Fresh Water Generators",
    ],
  },
  {
    id: "04",
    title: "Turbocharging & Electrical",
    subtitle: "High-Voltage Distribution & Rotor Dynamics",
    systems: [
      "ABB Turbochargers (VTR, TPL, A100 Series)",
      "Mitsubishi MET & Napier Turbochargers",
      "Main Switchboards (440V / 6.6kV) & Automation",
      "Class H Stator & Rotor Electric Motor Rewinding",
    ],
  },
];

const classRegistries = [
  { code: "ABS", name: "American Bureau of Shipping" },
  { code: "DNV", name: "Det Norske Veritas" },
  { code: "LR", name: "Lloyd's Register" },
  { code: "IRS", name: "Indian Register of Shipping" },
  { code: "BV", name: "Bureau Veritas" },
  { code: "ClassNK", name: "Nippon Kaiji Kyokai" },
];

function About() {
  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Short, Modern Architectural Header with Clear Atmospheric Background Image */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy pt-24 sm:pt-28 pb-10 sm:pb-12 border-b border-white/10">
        <img
          src={aboutHero}
          alt="Chief Engineer and navigation command deck at sea"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
          width={1920}
          height={1088}
        />
        <div className="hero-overlay absolute inset-0 pointer-events-none" />
        <div aria-hidden className="dot-grid absolute right-8 top-12 h-20 w-28 opacity-40 pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/15">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Compass className="h-3.5 w-3.5 text-accent" />
                <span>ABOUT SARRGAY MARINE &bull; TECHNICAL MONOGRAPH</span>
              </p>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12]">
                Technical Authority in Maritime Engineering
              </h1>

              <p className="mt-3 text-sm sm:text-base text-navy-muted leading-relaxed max-w-xl">
                Founded and commanded by veteran seagoing Chief Engineers. Delivering certified propulsion overhauls, auxiliary restoration, and shipyard superintendency worldwide.
              </p>
            </div>

            {/* Compact Technical Specs Tags */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                CHIEF ENGINEER LED
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-navy-foreground/90">
                STCW 2010 &bull; CDC CERTIFIED
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-navy-foreground/90">
                IACS CLASS COMPLIANT
              </span>
            </div>
          </div>

          {/* Compact Telemetry Strip */}
          <div className="pt-5 sm:pt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display drop-shadow-sm">
                  {m.num}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                  {m.label}
                </div>
                <p className="text-xs text-navy-muted font-light leading-snug">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Narrative Section: The Heritage */}
      <section className="container-x py-12 sm:py-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#777777]">
              OUR FOUNDATION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#1A1A1A] leading-tight">
              Authority Born in the Engine Room, <br className="hidden sm:inline" />
              Proven Across Global Sea Lanes.
            </h2>

            <blockquote className="border-l-2 border-[#1A1A1A] pl-5 italic font-serif text-lg text-[#333333] leading-relaxed my-6">
              "At sea, mechanical reliability is not a negotiable metric — it is the absolute foundation of voyage safety, crew security, and charter-party integrity."
            </blockquote>

            <p className="text-base text-[#444444] leading-relaxed font-light">
              Sarrgay Marine was established by seagoing Chief Engineers who spent decades operating high-pressure marine propulsion machinery through relentless ocean conditions. We intimately understand what it takes to protect shipowners from catastrophic off-hire downtime, strict Port State Control detentions, and unexpected shipyard budget variations.
            </p>

            <p className="text-base text-[#444444] leading-relaxed font-light">
              From our technical operations hub in Kochi to active flying squad operations across Singapore, Fujairah, and Colombo, we deploy multidisciplinary riding crews and shipyard superintendents trained to execute with micrometer precision.
            </p>

            {/* Micro Specs List */}
            <div className="mt-8 pt-6 border-t border-black/[0.08] grid gap-4 sm:grid-cols-2 text-xs">
              <div className="space-y-1">
                <div className="font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  <span>Licensed Chief Engineers</span>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  Every overhaul and dock attendance is supervised by former sea-going Chief Engineers.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  <span>0.01 mm Tolerance Logging</span>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  Optical laser bore alignment, crankshaft deflections, and journal clearance verification.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  <span>Riding Squad Deployment</span>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  STCW-certified engineers ready for voyage maintenance without commercial delays.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  <span>IACS Class Surveyor Dossiers</span>
                </div>
                <p className="text-[#666666] leading-relaxed">
                  Complete documentation packages accepted by ABS, DNV, Lloyd’s Register, and IRS.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Framing Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="overflow-hidden rounded-sm border border-black/[0.08] bg-[#F7F7F7]">
              <img
                src={engine}
                alt="Chief Marine Engineer inspecting cylinder head and fuel injection assembly"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full object-cover aspect-[4/3] grayscale-[15%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#777777] px-1">
              <span>FIG. 01 — ENGINE ROOM OVERHAUL &amp; CALIBRATION</span>
              <span>KOCHI / SINGAPORE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles: Architectural 4-Column Layout */}
      <section className="bg-[#F8F9FA] py-12 sm:py-20 border-y border-black/[0.06]">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#777777]">
              OPERATIONAL PRINCIPLES
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#1A1A1A]">
              The Tenets That Govern Every Sarrgay Dispatch
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.index}
                className="pt-6 border-t border-black/15 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="font-serif text-2xl text-[#888888] font-light">
                    {p.index}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-medium text-[#1A1A1A]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#888888] pt-4 border-t border-black/[0.06]">
                  STANDARD SPECIFICATION
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Competency Matrix: Clean Editorial Catalogue */}
      <section className="container-x py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#777777]">
              TECHNICAL SCOPE
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#1A1A1A]">
              Comprehensive OEM Competency
            </h2>
            <p className="mt-3 text-sm text-[#666666] font-light leading-relaxed">
              Our engineers possess specialized tooling, original clearance manuals, and hands-on overhaul experience across the world's most demanding marine propulsion and auxiliary systems.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-primary transition font-medium group"
          >
            <span>Full Service Portfolio</span>
            <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {competencies.map((c) => (
            <div
              key={c.id}
              className="p-7 rounded-sm bg-[#FAFAFA] border border-black/[0.06] space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                  DISCIPLINE {c.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded border border-black/[0.08] text-[#555555]">
                  OEM CERTIFIED
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium text-[#1A1A1A]">
                  {c.title}
                </h3>
                <p className="text-xs font-mono text-[#777777] mt-0.5">
                  {c.subtitle}
                </p>
              </div>

              <ul className="space-y-2 pt-2 border-t border-black/[0.06]">
                {c.systems.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-2.5 text-xs text-[#444444] font-light"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#1A1A1A] shrink-0 translate-y-[-2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Classification Registry Conformance */}
      <section className="bg-[#F8F9FA] py-14 border-y border-black/[0.06]">
        <div className="container-x text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#777777]">
            CLASSIFICATION &amp; STATUTORY COMPLIANCE
          </span>
          <h3 className="mt-2 font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A]">
            Recognized by Leading International Registers
          </h3>
          <p className="mx-auto mt-1.5 max-w-xl text-xs text-[#666666] font-light">
            All major overhauls, laser alignments, and structural renewals are documented in direct coordination with IACS member classification societies.
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-mono tracking-widest text-[#333333]">
            {classRegistries.map((cr) => (
              <span key={cr.code} className="hover:text-primary transition cursor-default">
                {cr.code} &bull; <span className="text-[#888888] font-normal">{cr.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Technical Liaison & Engagement (CTA with Clear Atmospheric Background Image) */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy py-14 sm:py-18 border-t border-white/10">
        <img
          src={engine}
          alt="Engine room technical assembly"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
          width={1920}
          height={960}
        />
        <div className="hero-overlay absolute inset-0 pointer-events-none" />
        <div aria-hidden className="dot-grid absolute left-8 bottom-6 h-16 w-24 opacity-30 pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-3">
              <p className="eyebrow flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                DIRECT TECHNICAL LIAISON &bull; 24/7 WORLDWIDE
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Consult With Our Chief Engineers
              </h2>
              <p className="text-sm sm:text-base text-navy-muted leading-relaxed max-w-2xl">
                Whether facing an urgent voyage breakdown, planning scheduled dry-dock superintendency, or requesting flying squad mobilization across Indian or international ports, our technical command desk is available 24/7.
              </p>

              <div className="pt-2 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono">
                <div>
                  <span className="block text-[10px] text-navy-muted uppercase tracking-wider">Direct Emergency Line</span>
                  <a href={TEL} className="text-white hover:text-accent transition font-serif text-base">
                    {PHONE}
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-navy-muted uppercase tracking-wider">Operations Dispatch</span>
                  <a href={"mailto:" + EMAIL_OPS} className="text-white hover:text-accent transition">
                    {EMAIL_OPS}
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] text-navy-muted uppercase tracking-wider">General Inquiries</span>
                  <a href={"mailto:" + EMAIL} className="text-white hover:text-accent transition">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <Btn href={WHATSAPP}>
                <PhoneCall className="mr-2 h-4 w-4" />
                WhatsApp 24/7 Desk
              </Btn>
              <Btn to="/contact" variant="ghostLight">
                Submit Technical Tender
              </Btn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
