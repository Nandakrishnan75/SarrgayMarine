import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Compass,
  Cpu,
  FileCheck2,
  Shield,
  ShieldAlert,
  Ship,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import engine from "@/assets/engine-room.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import { Btn, WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () =>
    meta(
      "Marine Engineering Solutions | SARRGAY MARINE",
      "Interactive directory of marine engineering solutions: auxiliary diesel generators, main engine propulsion overhauls, dry dock superintendency, electrical systems, 24/7 flying squads, and riding teams."
    ),
  component: Services,
});

const serviceCatalog = [
  {
    id: "01",
    shortName: "Generators & Aux",
    icon: Zap,
    title: "Generator & Auxiliary Engine Maintenance",
    tagline: "Uninterrupted onboard electrical generation & precision calibration",
    desc: "Comprehensive power solutions ensuring your vessel never goes dark. We specialize in the heart of your ship's electrical system, eliminating blackout risks through micrometer-exact crankshaft alignment, bedplate inspection, and governor tuning under Chief Engineer supervision.",
    tolerances: "Crankshaft deflections to ±0.01mm • Web clearance verification",
    oems: ["Yanmar", "Daihatsu", "Hyundai HiMSEN", "MAN B&W", "Caterpillar / MaK"],
    specs: ["Yanmar & Daihatsu Specialists", "Crankshaft Deflections to ±0.01mm", "OEM Clearance Adherence"],
    items: [
      "Preventive and corrective maintenance programs",
      "Troubleshooting & precision fault diagnosis",
      "Load testing, AVR synchronizing & performance optimization",
      "Spare parts supply, calibration and installation",
      "Complete engine rebuild and major overhauls",
      "Frame and crankshaft renewals & bedplate inspection",
      "Crankshaft deflections & bearing clearances to 0.01mm",
      "OEM tolerance adherence for Yanmar, Daihatsu, HiMSEN, MAN",
    ],
  },
  {
    id: "02",
    shortName: "Propulsion Care",
    icon: Ship,
    title: "Main Engine Overhauls & Propulsion Care",
    tagline: "Propulsion integrity for uninterrupted ocean passages",
    desc: "Expert care for your vessel's primary propulsion. From scheduled routine overhauls to complex casualty repairs, we ensure peak mechanical reliability across 2-stroke and 4-stroke marine diesel propulsion plants under former Chief Engineer oversight.",
    tolerances: "Optical laser line boring • Micrometer cylinder liner wear mapping",
    oems: ["MAN B&W (2 & 4 Stroke)", "Wärtsilä / Sulzer", "WinGD", "Mitsubishi Heavy", "Caterpillar"],
    specs: ["MAN B&W & Wärtsilä Scope", "Laser Optical Line Boring & Honing", "Sea Trial Indicator Analysis"],
    items: [
      "Complete and partial propulsion overhauls",
      "Crankshaft, piston, liner, and bearing works",
      "Cylinder liner honing & calibrated diametrical wear mapping",
      "Fuel injection pump timing & electronic actuator calibration",
      "Laser optical line boring & bedplate realignment",
      "Turbocharger rotor dynamic balancing & cartridge overhaul",
      "Combustion indicator diagram analysis & emission tuning",
      "Post-overhaul full-power sea trials & class sign-off",
    ],
  },
  {
    id: "03",
    shortName: "Dry Dock Support",
    icon: Wrench,
    title: "Dry Dock Assistance & Superintendency",
    tagline: "Naval superintendent leadership & shipyard management",
    desc: "Strategic technical support during critical dry docking periods. We manage technical heavy lifting so your operations department can focus on fleet logistics, eliminating costly off-hire delays and protecting shipowners from unexpected shipyard extras.",
    tolerances: "Zero-variation audit control • Verified surveyor inspection milestones",
    oems: ["Simplex Seals", "Kongsberg / Rolls-Royce Steering", "Alfa Laval Boilers", "All Class Societies"],
    specs: ["Daily Superintendent Logs", "Tailshaft & Rudder Surveys", "Yard Variation Control"],
    items: [
      "Pre-dock inspection, work scope compilation & yard tender review",
      "On-site technical supervision & daily superintendent logs",
      "Machinery overhauls during scheduled dry dock slots",
      "Tailshaft withdrawal, simplex seals & bearing clearances",
      "Rudder drop measurements, pintle bush & blade testing",
      "Overboard sea valves dismantling, lapping & class survey",
      "Hull fittings, sea chests, cathodic protection & sea valves",
      "Post-dock commissioning, sea trials & classification sign-off",
    ],
  },
  {
    id: "04",
    shortName: "Electrical & Auto",
    icon: Cpu,
    title: "Mechanical & Electrical Systems Engineering",
    tagline: "Holistic mechanical robustness & advanced electrical automation",
    desc: "Integrating traditional heavy machinery with modern digital controls. We troubleshoot PLC automation, main switchboard busbars, reverse-power protections, and motor rewinds with full class documentation.",
    tolerances: "Class H thermal insulation • ACB secondary injection precision",
    oems: ["Schneider / ABB Switchboards", "Terasaki Circuit Breakers", "Siemens S7 Marine", "Deif Power Management"],
    specs: ["Class H Motor Rewinding", "Main Switchboard (440V/6.6kV)", "Thermographic Infrared Surveys"],
    items: [
      "Pumps, compressors, and heat exchangers refurbishment",
      "Valves and high-pressure piping systems overhaul",
      "Electrical motors, switchboards, and automation systems",
      "Main switchboard insulation & thermographic infrared surveys",
      "Air circuit breaker (ACB) secondary injection testing",
      "Generator synchronizing, load sharing & PMS diagnostics",
      "Electric motor rewinding (Class H insulation)",
      "Engine alarm monitoring (AMS) sensor loops & calibration",
    ],
  },
  {
    id: "05",
    shortName: "Emergency Flying Squad",
    icon: ShieldAlert,
    title: "24/7 Emergency Technical Repairs",
    tagline: "Rapid mobilization flying squads for critical maritime casualties",
    desc: "Round-the-clock emergency support with rapid mobilization for urgent on-site interventions. Our flying squads deploy with specialized portable fly-away tooling to resolve voyage breakdowns at berth or anchorage.",
    tolerances: "Under 15-minute dispatch latency • Class-approved temporary & permanent repairs",
    oems: ["In-Situ Crankshaft Grinding", "Hydraulic Torque Calibration", "Boiler Refurbishment", "VHF Standby"],
    specs: ["12-Hour Mobilization", "Fly-Away Portable Tooling", "Worldwide Visa Readiness"],
    items: [
      "24/7 rapid-response teams mobilized within hours",
      "Critical machinery fault diagnosis & breakdown rectification",
      "Fly-away tooling kits for in-situ machining & hydraulic testing",
      "Temporary & permanent class-approved repair procedures",
      "Sea chest, overboard valve, and boiler emergency servicing",
      "Coordination with port authorities & classification surveyors",
      "Emergency spare part procurement & expedited customs clearance",
      "Continuous VHF & telephone standby with senior superintendents",
    ],
  },
  {
    id: "06",
    shortName: "Riding Crew At Sea",
    icon: Users,
    title: "Sailing Teams & Riding Crew Deployment",
    tagline: "Zero-downtime maintenance while underway on ocean passages",
    desc: "Skilled marine engineers and technicians deployed onboard for voyage-based engine maintenance, compliance support, and crew augmentation without disrupting commercial sailing schedules.",
    tolerances: "Zero commercial off-hire • Fully certified STCW 2010 seafarers",
    oems: ["Auxiliary Generator Overhaul", "Voyage Piping & Valve Renewals", "Pump Overhauls At Sea", "Daily Logs"],
    specs: ["Valid CDC & STCW 2010", "Zero Off-Hire At Sea", "Turnkey Tooling Kits"],
    items: [
      "Zero off-hire voyage maintenance underway at sea",
      "Fully certified personnel with valid CDC & STCW 2010 seafarer endorsement",
      "In-voyage auxiliary generator & main engine overhaul execution",
      "Sea-going project management & daily superintendent progress logs",
      "Seamless crew augmentation for tight trading schedules",
      "Turnkey fly-away toolkits, precision instruments & safety gear",
      "Voyage mechanical, piping, and valve overhaul programs",
      "Class documentation & signed sea-trial handover logs upon arrival",
    ],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Telemetry & Diagnostics",
    desc: "Remote analysis of combustion diagrams, lube oil reports, and deflection records to establish an exact OEM-compliant repair protocol.",
  },
  {
    step: "02",
    title: "Rapid Squad Mobilization",
    desc: "Certified Chief Engineers and fitters deployed with portable fly-away toolkits, holding active CDC endorsements for immediate boarding.",
  },
  {
    step: "03",
    title: "Precision Execution",
    desc: "In-situ machining, component renewals, and optical laser alignments executed strictly to micrometer manufacturing tolerances.",
  },
  {
    step: "04",
    title: "Class Surveyor Sign-Off",
    desc: "Sea-trial load tests, performance data validation, and comprehensive technical handover dossiers endorsed by classification surveyors.",
  },
];

const oemMakers = [
  "MAN Energy Solutions",
  "Wärtsilä Marine",
  "Yanmar Marine",
  "Daihatsu Diesel",
  "Hyundai HiMSEN",
  "Caterpillar / MaK",
  "Alfa Laval",
  "ABB Turbocharging",
];

function Services() {
  const [activeId, setActiveId] = useState("01");
  const currentService = serviceCatalog.find((s) => s.id === activeId) || serviceCatalog[0];
  const CurrentIcon = currentService.icon;

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Short, Modern Architectural Header */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy pt-24 sm:pt-28 pb-10 sm:pb-12 border-b border-white/10">
        <img
          src={servicesHero}
          alt="Shipyard dry dock and marine engineering operations"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
          width={1920}
          height={1088}
        />
        <div className="hero-overlay absolute inset-0 pointer-events-none" />
        <div aria-hidden className="dot-grid absolute right-8 top-12 h-20 w-28 opacity-40 pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Compass className="h-3.5 w-3.5 text-accent" />
                <span>TECHNICAL DIRECTORY &bull; CHIEF ENGINEER OVERSIGHT</span>
              </p>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12]">
                Marine Engineering Solutions
              </h1>

              <p className="mt-3 text-sm sm:text-base text-navy-muted leading-relaxed max-w-xl">
                Explore our full technical scope across 6 specialized marine engineering disciplines. From in-voyage overhauls to critical dry dock superintendency.
              </p>
            </div>

            {/* Compact Technical Specs Tags */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                6 CORE DISCIPLINES
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-navy-foreground/90">
                STCW &bull; CDC CERTIFIED
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-navy-foreground/90">
                100% CLASS SIGN-OFF
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Interactive Discipline Hub */}
      <section className="py-12 sm:py-16 bg-[#FAFAFC] border-b border-border/80">
        <div className="container-x">
          {/* Section Eyebrow */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/70">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>INTERACTIVE DISCIPLINE SELECTOR</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mt-1">
                Select Discipline to Inspect Technical Scope
              </h2>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Direct liaison available 24/7 via WhatsApp
            </div>
          </div>

          {/* Clean 6-Button Discipline Switcher Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-6">
            {serviceCatalog.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  className={`group relative flex flex-col items-start p-3.5 sm:p-4 rounded-md border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-navy text-white border-navy shadow-md ring-1 ring-navy"
                      : "bg-white text-foreground border-border hover:border-primary/50 hover:bg-white shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-accent" : "text-primary"
                      }`}
                    >
                      {s.id}
                    </span>
                    <Icon
                      className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  <span
                    className={`mt-2 font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider leading-snug ${
                      isActive ? "text-white" : "text-foreground"
                    }`}
                  >
                    {s.shortName}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-2 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Discipline Detailed Presentation Card */}
          <div className="mt-8 rounded-xl border border-border/80 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Scope, Directive, Tolerances & Action */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-primary">
                    {currentService.id}
                  </span>
                  <div className="h-6 w-px bg-border" />
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 text-primary">
                      <CurrentIcon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      CHIEF ENGINEER DIRECTIVE
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
                  {currentService.title}
                </h3>

                <p className="font-serif text-xs sm:text-sm italic text-muted-foreground leading-relaxed">
                  {currentService.tagline}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light pt-1">
                  {currentService.desc}
                </p>

                {/* Precision Tolerances Box */}
                <div className="rounded-md border border-primary/20 bg-primary/[0.03] p-3.5 space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                    <Shield className="h-3 w-3" />
                    <span>PRECISION TOLERANCE &amp; BENCHMARK</span>
                  </div>
                  <p className="font-mono text-xs text-foreground/90 font-medium">
                    {currentService.tolerances}
                  </p>
                </div>

                {/* OEM Coverage Tags */}
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                    OEM Engine Makers &amp; Systems Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentService.oems.map((oem) => (
                      <span
                        key={oem}
                        className="inline-block rounded-sm bg-secondary px-2.5 py-0.5 text-[11px] font-mono text-foreground border border-border/60"
                      >
                        {oem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Purposeful Contextual Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Btn to="/contact">
                    Inquire Scope Dossier
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Btn>
                  <Btn href={WHATSAPP} variant="outline">
                    WhatsApp Duty Desk
                  </Btn>
                </div>
              </div>

              {/* Right Column: Clean Technical Deliverables Matrix */}
              <div className="lg:col-span-7 rounded-lg border border-border/80 bg-[#FAFAFC] p-5 sm:p-7 space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-border/80">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <h4 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                      Key Technical Deliverables &bull; Discipline {currentService.id}
                    </h4>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                    IACS COMPLIANT
                  </span>
                </div>

                {/* 2-Column Checklist */}
                <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
                  {currentService.items.map((it) => (
                    <div
                      key={it}
                      className="flex items-start gap-2.5 rounded-sm p-2 text-xs text-foreground/90 transition hover:bg-white border border-transparent hover:border-border/60 shadow-2xs"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                      <span className="leading-relaxed font-light">{it}</span>
                    </div>
                  ))}
                </div>

                {/* Verification Notice */}
                <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>Signed Class Surveyor Handover</span>
                  <span>Zero Off-Hire Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Technical Mobilization Protocol */}
      <section className="py-16 sm:py-20 border-b border-border/80 bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>EXECUTION RIGOR &bull; STANDARD OPERATING PROCEDURE</span>
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
              4-Step Technical Mobilization Protocol
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Every project follows strict technical milestones from initial telemetry scoping to final sea-trial classification sign-off.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((wf) => (
              <div
                key={wf.step}
                className="relative flex flex-col justify-between rounded-lg border border-border/80 bg-[#FAFAFC] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-primary">
                    {wf.step}
                  </span>
                  <h3 className="mt-3 text-base font-bold uppercase tracking-tight text-foreground">
                    {wf.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-light">
                    {wf.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                  Milestone Verified &bull; Chief Engineer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight — Riding Teams & On-Voyage Repairs */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20 text-navy-foreground on-navy border-b border-white/10">
        <img
          src={engine}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none opacity-20"
          width={1920}
          height={960}
        />
        <div className="hero-overlay absolute inset-0 pointer-events-none" />
        <div aria-hidden className="dot-grid absolute right-8 top-12 h-20 w-28 opacity-40 pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              ON-VOYAGE REPAIRS &bull; ZERO OFF-HIRE
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Zero Downtime Maintenance at Sea
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-navy-muted max-w-2xl mx-auto">
              Our specialized sailing teams perform critical machinery maintenance while your vessel remains underway on ocean passages, ensuring you never miss a commercial charter or docking window.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-white/15 bg-white/5 p-7 backdrop-blur-md space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                <FileCheck2 className="h-4 w-4" />
                <span>Pillar 01 &bull; Certified Seafarers</span>
              </div>
              <h3 className="text-lg font-bold text-white">Qualified &amp; Endorsed Personnel</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-navy-muted">
                All riding squad engineers and fitters hold valid <b>CDC (Continuous Discharge Certificates)</b>, <b>STCW 2010</b> seafarer endorsements, and offshore medical fitness clearances, enabling immediate visa processing and unhindered boarding across any global port or anchorage.
              </p>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/5 p-7 backdrop-blur-md space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                <Compass className="h-4 w-4" />
                <span>Pillar 02 &bull; Chief Engineer Supervision</span>
              </div>
              <h3 className="text-lg font-bold text-white">At-Sea Project Management</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-navy-muted">
                Led by former Chief Engineers who manage daily overhaul logs, work scopes, spare parts calibration, and sea-trial indicator cards. We integrate seamlessly with shipboard crew, upholding the highest ISM Code safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Machinery Compatibility Ticker Ribbon */}
      <section className="border-b border-border/80 bg-[#FAFAFC] py-5">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/80 shrink-0">
            Recognized OEM Machinery Coverage:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-foreground/80 font-medium">
            {oemMakers.map((maker) => (
              <span key={maker} className="transition-colors hover:text-primary">
                {maker}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Climax CTA (Consistent with other pages) */}
      <section className="bg-secondary py-16 overflow-hidden border-b border-border">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div>
            <p className="eyebrow">LET&apos;S DISCUSS YOUR FLEET</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Ready to Optimize Your Operations?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Get an exact scope consultation or dispatch quote for your vessel within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Btn href={WHATSAPP}>WhatsApp Duty Desk</Btn>
            <Btn to="/contact" variant="outline">Request Technical Scope</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

