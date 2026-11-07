import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Compass,
  Cpu,
  FileCheck2,
  ShieldCheck,
  ShieldAlert,
  Ship,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import engine from "@/assets/engine-room.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import generatorImg from "@/assets/generator-maintenance.jpg";
import propulsionImg from "@/assets/main-engine-propulsion.jpg";
import drydockImg from "@/assets/drydock-superintendency.jpg";
import electricalImg from "@/assets/marine-electrical-automation.jpg";
import emergencyImg from "@/assets/emergency-repairs-flying-squad.jpg";
import ridingImg from "@/assets/sailing-riding-crew.jpg";
import turbochargerImg from "@/assets/turbocharger-overhaul.jpg";
import lngImg from "@/assets/lng-dualfuel-engineering.jpg";
import steeringImg from "@/assets/hydraulic-steering-gear.jpg";
import { Btn, WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () =>
    meta(
      "Marine Engineering Solutions | SARRGAY MARINE",
      "Delivering precision engineering, technical management, and riding squad services to the global maritime industry. Generator maintenance, main engine overhauls, dry dock assistance, mechanical & electrical, and emergency repairs."
    ),
  component: Services,
});

const serviceCatalog = [
  {
    id: "01",
    anchor: "generators",
    icon: Zap,
    title: "Generator & Auxiliary Engine Maintenance",
    tagline: "Uninterrupted onboard electrical generation & precision calibration",
    desc: "Comprehensive power solutions ensuring your vessel never goes dark. We specialize in the heart of your ship's electrical system, eliminating blackout risks through micrometer-exact crankshaft alignment, bedplate inspection, and governor tuning under Chief Engineer supervision.",
    image: generatorImg,
    imageAlt: "Chief marine engineer inspecting auxiliary diesel generator crankshaft deflection with micrometer gauge",
    imageBadge: "DIESEL GENSET CALIBRATION • ±0.01mm",
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
    anchor: "propulsion",
    icon: Ship,
    title: "Main Engine Overhauls & Propulsion Care",
    tagline: "Propulsion integrity for uninterrupted ocean passages",
    desc: "Expert care for your vessel's primary propulsion. From scheduled routine overhauls to complex casualty repairs, we ensure peak mechanical reliability across 2-stroke and 4-stroke marine diesel propulsion plants under former Chief Engineer oversight.",
    image: propulsionImg,
    imageAlt: "Marine propulsion engineers executing precision laser optical line boring and crankshaft alignment on 2-stroke engine",
    imageBadge: "PROPULSION DIESEL OVERHAUL • 2 & 4 STROKE",
    oems: ["MAN B&W", "Wärtsilä / Sulzer", "WinGD", "Mitsubishi Heavy", "Caterpillar"],
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
    anchor: "drydock",
    icon: Wrench,
    title: "Dry Dock Assistance & Superintendency",
    tagline: "Naval superintendent leadership & shipyard management",
    desc: "Strategic technical support during critical dry docking periods. We manage technical heavy lifting so your operations department can focus on fleet logistics, eliminating costly off-hire delays and protecting shipowners from unexpected shipyard extras.",
    image: drydockImg,
    imageAlt: "Marine superintendents inspecting bronze propeller, rudder clearances and underwater hull in shipyard drydock",
    imageBadge: "SUPERINTENDENCY • HULL & RUNNING GEAR",
    oems: ["Simplex Seals", "Kongsberg Steering", "Alfa Laval", "All Major Yards"],
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
    anchor: "electrical",
    icon: Cpu,
    title: "Mechanical & Electrical Systems Engineering",
    tagline: "Holistic mechanical robustness & advanced electrical automation",
    desc: "Integrating traditional heavy machinery with modern digital controls. We troubleshoot PLC automation, main switchboard busbars, reverse-power protections, and motor rewinds with full class documentation.",
    image: electricalImg,
    imageAlt: "Marine electrical engineer conducting infrared thermal survey and diagnostic testing on 440V main switchboard",
    imageBadge: "440V / 6.6kV AUTOMATION & THERMOGRAPHY",
    oems: ["Schneider / ABB", "Terasaki ACB", "Siemens S7 Marine", "Deif PMS"],
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
    anchor: "emergency",
    icon: ShieldAlert,
    title: "24/7 Emergency Technical Repairs",
    tagline: "Rapid mobilization flying squads for critical maritime casualties",
    desc: "Round-the-clock emergency support with rapid mobilization for urgent on-site interventions. Our flying squads deploy with specialized portable fly-away tooling to resolve voyage breakdowns at berth, anchorage, or offshore terminals.",
    image: emergencyImg,
    imageAlt: "Emergency flying squad engineers mobilizing rapid repair toolkit for critical engine casualty",
    imageBadge: "12-HOUR FLYING SQUAD MOBILIZATION",
    oems: ["Worldwide Visa Ready", "Fly-Away Portable Tooling", "Hydraulic & In-Situ Tools"],
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
    anchor: "riding-crew",
    icon: Users,
    title: "Sailing Teams & Riding Crew Deployment",
    tagline: "Zero-downtime maintenance while underway on ocean passages",
    desc: "Skilled marine engineers and certified fitters deployed onboard for voyage-based engine maintenance, major overhauls, and compliance support without taking your vessel off-hire or disrupting commercial voyages.",
    image: ridingImg,
    imageAlt: "Sailing riding crew technicians conducting machinery maintenance underway on ocean passage",
    imageBadge: "ZERO OFF-HIRE • VOYAGE MAINTENANCE",
    oems: ["STCW 2010 Endorsed", "CDC Certified Seafarers", "Offshore Medical Clearances"],
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

const specializedCapabilities = [
  {
    title: "Turbocharger Dynamic Balancing",
    image: turbochargerImg,
    badge: "ISO 1940-1 G2.5 TOLERANCE",
    desc: "In-situ and workshop rotor dynamic balancing, cartridge renewal, and nozzle ring refurbishment across ABB, MAN, and Mitsubishi MET units.",
    oems: "ABB • MAN • Mitsubishi MET",
  },
  {
    title: "LNG & Dual-Fuel Propulsion",
    image: lngImg,
    badge: "CRYOGENIC -162°C COMPLIANCE",
    desc: "Gas Valve Unit (GVU-2) overhaul, boil-off gas handling, double-walled piping pressure certification, and dual-fuel ESD safety loop tests.",
    oems: "WinGD X-DF • MAN ME-GI • Wärtsilä DF",
  },
  {
    title: "Electro-Hydraulic Steering Gear",
    image: steeringImg,
    badge: "CLASS SURV. & RAM ACTUATION",
    desc: "4-cylinder ram overhauls, high-pressure hydraulic pump renewals, proportional servo valves calibration, and emergency helm changeover checks.",
    oems: "Rolls-Royce • Kongsberg • Hatlapa",
  },
];

const executionSteps = [
  {
    num: "01",
    phase: "DIAGNOSTIC & AUDIT",
    title: "Scope Compilation",
    desc: "Machinery log analysis, defect evaluation, and OEM tolerance matching before deployment.",
  },
  {
    num: "02",
    phase: "MOBILIZATION",
    title: "Squad Deployment",
    desc: "Licensed Chief Engineers and certified fitters dispatched with fly-away calibration kits within 12-24 hours.",
  },
  {
    num: "03",
    phase: "EXECUTION",
    title: "Precision Overhaul",
    desc: "Machinery works executed to strict micrometer tolerances under continuous daily superintendent logs.",
  },
  {
    num: "04",
    phase: "VALIDATION",
    title: "Sea Trials & Class Handover",
    desc: "Full load indicator diagrams, deflection logs, and classification society certificate clearance.",
  },
];

const classes = [
  "ABS",
  "DNV",
  "Lloyd's Register",
  "Bureau Veritas",
  "ClassNK",
  "KR",
  "IRS",
  "ISO 9001:2015",
];

function Services() {
  const handleScrollTo = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

        <div className="container-x relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/15">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Compass className="h-3.5 w-3.5 text-accent" />
                <span>SERVICES DIRECTORY &bull; TECHNICAL SOLUTIONS</span>
              </p>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12]">
                Marine Engineering Solutions
              </h1>

              <p className="mt-3 text-sm sm:text-base text-navy-muted leading-relaxed max-w-xl">
                From voyage overhauls by sailing riding squads to scheduled major dry dock superintendency, we deliver zero-defect technical execution under licensed Chief Engineer oversight.
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

          {/* Quick Anchor Navigation Strip */}
          <div className="pt-5 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max text-xs font-mono">
              <span className="text-navy-muted mr-1 uppercase tracking-wider text-[11px]">Jump to:</span>
              {serviceCatalog.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleScrollTo(s.anchor)}
                  className="rounded-sm border border-white/15 bg-white/5 px-3 py-1 text-white/90 hover:bg-white/15 hover:text-white transition cursor-pointer"
                >
                  <span className="text-accent font-semibold mr-1.5">{s.id}</span>
                  <span>{s.title.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Catalog: Clean Visual Engineering Disciplines */}
      <section className="divide-y divide-border/70">
        {serviceCatalog.map((s, idx) => {
          const Icon = s.icon;
          const isReversed = idx % 2 === 1;

          return (
            <article
              id={s.anchor}
              key={s.id}
              className={`scroll-mt-24 py-16 sm:py-24 ${idx % 2 === 1 ? "bg-[#FAFAFC]" : "bg-white"}`}
            >
              <div className="container-x">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                  {/* Pristine Unobstructed Image */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="group overflow-hidden rounded-xl border border-border/80 bg-card shadow-lg">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        className="aspect-[16/10] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                        width={960}
                        height={600}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Narrative & Technical Scope */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-primary">
                        {s.id}
                      </span>
                      <div className="h-6 w-px bg-border" />
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        CHIEF ENGINEER DIRECTIVE
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-1 font-serif text-sm italic text-muted-foreground leading-relaxed">
                        {s.tagline}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground font-light">
                      {s.desc}
                    </p>

                    {/* Deliverables Matrix */}
                    <div className="rounded-lg border border-border/70 bg-card p-5 sm:p-6 shadow-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-border/70">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                          Key Technical Deliverables
                        </h3>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                          CLASS VERIFIED
                        </span>
                      </div>

                      <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                        {s.items.map((it) => (
                          <div
                            key={it}
                            className="flex items-start gap-2 rounded-sm p-1.5 text-xs text-foreground/90 transition hover:bg-secondary/60"
                          >
                            <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                            <span className="leading-snug font-light">{it}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Btn to="/contact">
                        Request Scope Consultation
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Btn>
                      <Btn href={WHATSAPP} variant="outline">
                        Consult Duty Engineer
                      </Btn>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Specialized Technical Machinery Capabilities */}
      <section className="border-t border-border/80 bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border/70">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>HIGH-TECH MACHINERY SPECIALIZATION</span>
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Advanced Machinery Capabilities
              </h2>
              <p className="mt-2 text-sm text-muted-foreground font-light">
                Specialized in-situ precision tooling and certified diagnostic engineers for critical high-performance shipboard systems.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold shrink-0">
              OEM &bull; CLASS RECOGNIZED
            </span>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {specializedCapabilities.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm transition hover:shadow-md hover:border-primary/40 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold text-primary uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>Makers:</span>
                    <span className="font-semibold text-foreground/80">{item.oems}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sarrgay Execution Standard (4-Step Precision Workflow) */}
      <section className="border-t border-border/80 bg-secondary/40 py-16 sm:py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>MOBILIZATION &amp; QUALITY ASSURANCE</span>
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
              The Sarrgay Execution Standard
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-light">
              Every overhaul follows a four-phase technical protocol to eliminate off-hire risk and ensure swift classification surveyor sign-off.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executionSteps.map((step) => (
              <div
                key={step.num}
                className="relative rounded-lg border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Phase {step.num}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {step.phase}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Spotlight — Riding Teams & On-Voyage Repairs */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-24 text-navy-foreground on-navy border-t border-white/10">
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
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-navy-muted max-w-2xl mx-auto">
              Our specialized sailing teams perform critical machinery maintenance while your vessel remains underway on ocean passages, ensuring you never miss a commercial charter or docking window.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                <ShieldAlert className="h-4 w-4" />
                <span>Pillar 02 &bull; Precision Tooling</span>
              </div>
              <h3 className="text-lg font-bold text-white">Turnkey Fly-Away Toolkits</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-navy-muted">
                Each team mobilizes with comprehensive calibrated instrumentation — including laser shaft alignment systems, digital deflection indicators, pneumatic hydraulic torque wrenches, and in-situ honing equipment packed in rugged Pelican cases ready for air freight.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-mono text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Rapid fly-in teams available across Asia, Middle East, and Mediterranean corridors
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Btn to="/contact">Request Riding Squad Quote</Btn>
              <Btn href={WHATSAPP} variant="ghostLight">WhatsApp Rapid Desk</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Society Strip */}
      <section className="border-y border-border/50 bg-secondary/35 py-4.5 sm:py-5.5">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-2 text-center">
          {classes.map((c, i) => (
            <span
              key={c}
              className={`font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold text-foreground/70 transition-colors hover:text-primary ${i === classes.length - 1 ? "text-primary font-bold" : ""}`}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Unified Climax Call to Action */}
      <section className="bg-secondary py-16 overflow-hidden border-b border-border">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div>
            <p className="eyebrow">LET&apos;S DISCUSS YOUR FLEET</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl text-foreground">Ready to Optimize Your Fleet Operations?</h2>
            <p className="mt-2 text-sm text-muted-foreground font-light">
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
