import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Compass,
  Cpu,
  FileCheck2,
  PhoneCall,
  ShieldAlert,
  Ship,
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
    desc: "Round-the-clock emergency support with rapid mobilization for urgent on-site interventions. Our flying squads deploy with specialized portable fly-away tooling to resolve voyage breakdowns at berth or anchorage.",
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
    desc: "Skilled marine engineers and technicians deployed onboard for voyage-based engine maintenance, compliance support, and crew augmentation without disrupting commercial sailing schedules.",
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

function Services() {
  const handleScrollTo = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Short, Modern Architectural Header (Theme Aligned) */}
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

      {/* Main Service Catalog: Clean Architectural Sections */}
      <section className="divide-y divide-border/80">
        {serviceCatalog.map((s, idx) => {
          const Icon = s.icon;
          return (
            <article
              id={s.anchor}
              key={s.id}
              className={`scroll-mt-24 py-16 sm:py-20 ${idx % 2 === 1 ? "bg-[#F9FAFB]" : "bg-white"}`}
            >
              <div className="container-x">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: Scope & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-primary">
                        {s.id}
                      </span>
                      <div className="h-6 w-px bg-border" />
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                          CHIEF ENGINEER DIRECTIVE
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
                      {s.title}
                    </h2>

                    <p className="font-serif text-sm italic text-muted-foreground leading-relaxed">
                      {s.tagline}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground font-light pt-1">
                      {s.desc}
                    </p>

                    {/* Spec Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {s.specs.map((sp) => (
                        <span
                          key={sp}
                          className="inline-flex items-center rounded-sm bg-secondary px-2.5 py-1 text-[11px] font-mono font-medium text-foreground border border-border/70"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <Btn to="/contact">
                        Request Scope Consultation
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Btn>
                      <Btn href={WHATSAPP} variant="outline">
                        Consult Duty Engineer
                      </Btn>
                    </div>
                  </div>

                  {/* Right Column: Clean Deliverables Matrix */}
                  <div className="lg:col-span-7 rounded-lg border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center justify-between pb-4 border-b border-border/70">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
                        Key Technical Deliverables &bull; Service {s.id}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">
                        CLASS CERTIFIED
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <div
                          key={it}
                          className="flex items-start gap-2.5 rounded-sm p-2.5 text-xs text-foreground/90 transition hover:bg-secondary/60 border border-transparent hover:border-border/50"
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          <span className="leading-relaxed font-light">{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
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
                <Compass className="h-4 w-4" />
                <span>Pillar 02 &bull; Chief Engineer Supervision</span>
              </div>
              <h3 className="text-lg font-bold text-white">At-Sea Project Management</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-navy-muted">
                Led by former Chief Engineers who manage daily overhaul logs, work scopes, spare parts calibration, and sea-trial indicator cards. We integrate seamlessly with shipboard crew, upholding the highest ISM Code safety standards.
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
    </div>
  );
}
