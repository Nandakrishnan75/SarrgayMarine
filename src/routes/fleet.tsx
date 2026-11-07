import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  Compass,
  Cpu,
  Gauge,
  Layers,
  PhoneCall,
  ShieldCheck,
  Ship,
  Sparkles,
  Waves,
  Wrench,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.jpg";
import { Btn, WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/fleet")({
  head: () =>
    meta(
      "Fleet Experience & Vessels Served | SARRGAY MARINE",
      "Specialized support across VLCC tankers, LNG/LPG carriers, chemical tankers, bulk carriers, container vessels, Ro-Ro car carriers, and offshore support vessels."
    ),
  component: Fleet,
});

const vessels = [
  {
    id: "01",
    n: "VLCC Supertankers",
    c: "Crude Oil Transport",
    f: "Tankers",
    icon: Ship,
    spec: "300,000+ DWT • 2-Stroke Low-Speed Propulsion",
    len: "330M / 1,080 FT",
    speed: "16.5 Knots",
    range: "22,000 NM",
    focus: "Complete main engine cylinder unit renewal, crankshaft deflection mapping, steam turbine governors, and Framo cargo pump overhauls.",
    keyDeliverables: [
      "In-situ crankshaft deflection & web clearance analysis",
      "Framo hydraulic submerged cargo pump renewals",
      "Inert Gas System (IGS) & boiler overhaul calibration",
      "Exhaust valve spindle & actuator electronic timing",
    ],
  },
  {
    id: "02",
    n: "Gas / LNG & LPG Carriers",
    c: "Cryogenic Gas Transport",
    f: "Gas Carriers",
    icon: Sparkles,
    spec: "174,000 m³ • Dual-Fuel ME-GI / X-DF Engines",
    len: "299M / 980 FT",
    speed: "19.5 Knots",
    range: "18,500 NM",
    focus: "Dual-fuel gas injection valve servicing, cryogenic valve maintenance, Gas Valve Unit (GVU-2) overhaul, and reliquefaction auxiliary plants.",
    keyDeliverables: [
      "Gas Valve Unit (GVU) overhaul & pressure testing",
      "Cryogenic manifold & safety shut-off loop validation",
      "ME-GI / X-DF dual-fuel injector calibration",
      "BOG (Boil-Off Gas) compressor & reliquefaction care",
    ],
  },
  {
    id: "03",
    n: "Chemical Parcel Tankers",
    c: "Chemical & Product",
    f: "Tankers",
    icon: Layers,
    spec: "50,000 DWT • Stainless Steel 316LN Tanks",
    len: "183M / 600 FT",
    speed: "15.0 Knots",
    range: "14,000 NM",
    focus: "Framo hydraulic submerged pump rebuilding, cargo line valves, nitrogen generator servicing, and auxiliary genset synchronizing.",
    keyDeliverables: [
      "Hydraulic power unit (HPU) valve pack overhauls",
      "Deepwell cargo pump shaft alignment & seal renewals",
      "Deck piping high-pressure manifold hydro-testing",
      "Auxiliary diesel generator ±0.01mm realignment",
    ],
  },
  {
    id: "04",
    n: "Bulk Carriers (Capesize & Panamax)",
    c: "Dry Bulk Fleet",
    f: "Bulk Carriers",
    icon: Anchor,
    spec: "60,000 to 210,000 DWT • Heavy Fuel Packages",
    len: "225M – 300M",
    speed: "14.5 Knots",
    range: "20,000 NM",
    focus: "Hatch cover hydraulic rams, heavy diesel generator overhauls, ballast valve refurbishment, and deck crane wire & winch renewals.",
    keyDeliverables: [
      "Hydraulic hatch cover cylinder rebuilds & seal kits",
      "Heavy diesel auxiliary engine complete bottom-end overhaul",
      "Overboard sea valves dismantling, lapping & class survey",
      "Mooring winch, anchor windlass & hydraulic brake tuning",
    ],
  },
  {
    id: "05",
    n: "Container Vessels",
    c: "Feeder to Ultra-Large Container",
    f: "Container",
    icon: Gauge,
    spec: "1,500 to 24,000 TEU • High-Output 2-Stroke",
    len: "170M – 400M",
    speed: "22.0 Knots",
    range: "25,000 NM",
    focus: "High-output turbocharger rotor cartridge overhaul, reefer switchboard maintenance, and fast-turnaround port casualty intervention.",
    keyDeliverables: [
      "Turbocharger dynamic rotor balancing (ISO 1940-1)",
      "Main propulsion cylinder liner honing & wear mapping",
      "440V reefer switchboard busbar infrared thermal surveys",
      "Fast-turnaround flying squad flying to berth within hours",
    ],
  },
  {
    id: "06",
    n: "Ro-Ro & Car Carriers",
    c: "Roll-on / Roll-off",
    f: "Ro-Ro",
    icon: Compass,
    spec: "6,500 to 8,500 CEU • Multi-Deck Vehicle Carriers",
    len: "200M / 656 FT",
    speed: "20.0 Knots",
    range: "16,000 NM",
    focus: "Quarter ramp hydraulic power units, internal hoistable deck cylinders, and bow thruster pitch mechanism overhauls.",
    keyDeliverables: [
      "Stern & quarter ramp hydraulic cylinder refurbishment",
      "Hoistable deck electro-hydraulic winch systems",
      "Bow thruster controllable pitch propeller (CPP) servicing",
      "Auxiliary engine 12,000-hour major overhaul routines",
    ],
  },
  {
    id: "07",
    n: "Offshore Support Vessels (AHTS & PSV)",
    c: "Offshore DP-2 / DP-3",
    f: "Offshore",
    icon: Waves,
    spec: "200T Bollard Pull • Dynamic Positioning 2/3",
    len: "88M / 288 FT",
    speed: "16.0 Knots",
    range: "9,000 NM",
    focus: "Azimuth thruster rebuilds, tunnel bow thrusters, diesel-electric power management, and towing winch hydraulics.",
    keyDeliverables: [
      "Azimuth thruster seal renewals & lower gearbox inspection",
      "Tunnel thruster hydraulic motor & pitch hub maintenance",
      "Power Management System (PMS) generator load testing",
      "Towing & anchor handling winch hydraulic brake overhauls",
    ],
  },
];

const filters = ["All Vessels", "Tankers", "Gas Carriers", "Bulk Carriers", "Container", "Ro-Ro", "Offshore"];

const protocols = [
  "Pre-mobilization diagnostic analysis and OEM clearance tolerance matching",
  "Chief Engineer supervisory sign-off on all micrometer & laser alignment logs",
  "Class surveyor witness coordination across ABS, DNV, LR, BV, ClassNK, and IRS",
  "Full-power sea trial indicator diagram analysis & vibration verification",
  "Turnkey documentation pack, calibration certificates & guarantee handover",
];

const societies = [
  { name: "ABS", label: "American Bureau of Shipping" },
  { name: "DNV", label: "Det Norske Veritas" },
  { name: "LR", label: "Lloyd's Register" },
  { name: "BV", label: "Bureau Veritas" },
  { name: "ClassNK", label: "Nippon Kaiji Kyokai" },
  { name: "KR", label: "Korean Register" },
  { name: "IRS", label: "Indian Register of Shipping" },
];

function Fleet() {
  const [activeFilter, setActiveFilter] = useState("All Vessels");
  const filteredList =
    activeFilter === "All Vessels" ? vessels : vessels.filter((v) => v.f === activeFilter);

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Modern Architectural Hero Header */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy pt-24 sm:pt-28 pb-12 sm:pb-16 border-b border-white/10">
        <img
          src={fleetHero}
          alt="Commercial fleet operations underway at sea"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none opacity-40"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0 pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-white/15">
            <div className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2">
                <Compass className="h-3.5 w-3.5 text-accent" />
                <span>GLOBAL REACH &bull; FLEET TYPOLOGIES</span>
              </p>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12]">
                Global Fleet Support &amp; Technical Coverage
              </h1>

              <p className="mt-3 text-sm sm:text-base text-navy-muted leading-relaxed max-w-xl">
                Specialized technical support for commercial fleets. We handle global logistics, visa clearances, and fly-away tooling for rapid deployment across all commercial vessel categories.
              </p>
            </div>

            {/* Quick Specs Tags */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                7 VESSEL CATEGORIES
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-navy-foreground/90">
                WORLDWIDE PORT ACCESS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-2.5 py-1 text-navy-foreground/90">
                100% SURVEYOR SIGN-OFF
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Telemetry Strip */}
      <section className="border-b border-border/80 bg-secondary/35">
        <div className="container-x grid grid-cols-2 gap-6 py-7 md:grid-cols-4">
          {[
            ["Classification Coverage", "ABS • DNV • LR • BV • IRS • ClassNK"],
            ["Max Propulsion Scope", "Up to 80,000 BHP (2 & 4 Stroke)"],
            ["Survey Acceptance", "100% Class Surveyor Sign-Off"],
            ["Quality Certification", "ISO 9001:2015 Registered"],
          ].map(([label, val]) => (
            <div key={label} className="space-y-1">
              <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">
                {label}
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-foreground">
                {val}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vessel Typology Directory */}
      <section className="container-x py-16 sm:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8 border-b border-border/70">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Ship className="h-3.5 w-3.5 text-primary" />
              <span>VESSELS SERVED</span>
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
              Comprehensive Fleet Typology Coverage
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-light max-w-xl">
              Proven Chief Engineer expertise across wet, dry, cryogenic gas, container, and offshore marine sectors.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((flt) => (
              <button
                key={flt}
                type="button"
                onClick={() => setActiveFilter(flt)}
                className={`rounded-full border px-4 py-1.5 text-xs font-mono transition cursor-pointer ${
                  activeFilter === flt
                    ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                    : "border-border/80 bg-card text-foreground/80 hover:border-primary/50 hover:bg-secondary/60"
                }`}
              >
                {flt}
              </button>
            ))}
          </div>
        </div>

        {/* Vessel Cards Grid: Clean, Unobstructed, Elevated Architecture */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredList.map((v) => {
            const Icon = v.icon;
            return (
              <article
                key={v.n}
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon + Category + ID */}
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        {v.c}
                      </span>
                    </div>
                    <span className="font-serif text-lg text-primary/60 font-semibold">
                      {v.id}
                    </span>
                  </div>

                  {/* Title & Engine Spec */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {v.n}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-primary font-medium">
                      {v.spec}
                    </p>
                  </div>

                  {/* Dimensions & Performance Telemetry Grid */}
                  <dl className="grid grid-cols-3 gap-2 rounded-lg border border-border/60 bg-secondary/40 p-3 text-xs">
                    <div>
                      <dt className="text-muted-foreground font-mono text-[10px] uppercase">Length</dt>
                      <dd className="mt-0.5 font-mono font-semibold text-foreground text-[11px] sm:text-xs">{v.len}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground font-mono text-[10px] uppercase">Speed</dt>
                      <dd className="mt-0.5 font-mono font-semibold text-foreground text-[11px] sm:text-xs">{v.speed}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground font-mono text-[10px] uppercase">Range</dt>
                      <dd className="mt-0.5 font-mono font-semibold text-foreground text-[11px] sm:text-xs">{v.range}</dd>
                    </div>
                  </dl>

                  {/* Machinery Engineering Focus */}
                  <div className="space-y-1.5 pt-1">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                      Technical Scope:
                    </span>
                    <p className="text-xs leading-relaxed text-muted-foreground font-light">
                      {v.focus}
                    </p>
                  </div>

                  {/* Key Deliverables Checkpoints */}
                  <div className="pt-2 border-t border-border/60 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Verified Disciplines:
                    </span>
                    <div className="space-y-1.5">
                      {v.keyDeliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-foreground/90">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                          <span className="font-light leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-5 mt-6 border-t border-border/70 flex items-center justify-between">
                  <Btn to="/contact">
                    Request Scope
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Btn>
                  <Btn href={WHATSAPP} variant="outline">
                    Duty Desk
                  </Btn>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quality Assurance & Global Mobilization Section */}
      <section className="border-t border-border/80 bg-secondary/40 py-16 sm:py-24 overflow-hidden">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: 5 Rigorous Verification Protocols */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>QUALITY ASSURANCE</span>
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
                Rigorous Execution Protocols &amp; Documentation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground font-light">
                Every intervention adheres to verified quality checklists to eliminate off-hire risk and ensure seamless surveyor sign-off upon completion.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {protocols.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-border/80 bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/40"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground font-mono">
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Mobilization & 24/7 Response Standby */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-xl border border-border/80 bg-card p-7 sm:p-8 shadow-sm space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                <Wrench className="h-4 w-4" />
                <span>FLY-AWAY PORTABLE TOOLING</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Turnkey Technical Mobilization &amp; Air Freight
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">
                Our technicians travel with specialized portable fly-away kits for in-situ crankshaft polishing, optical laser deflection analysis, hydraulic torque calibration, and vibration telemetry diagnostics.
              </p>
              <div className="border-t border-border/60 pt-3 text-xs font-mono text-muted-foreground">
                Cleared for international air freight and expedited port customs clearance worldwide.
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-navy p-7 sm:p-8 text-navy-foreground on-navy shadow-lg space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                <PhoneCall className="h-4 w-4" />
                <span>24/7 TECHNICAL FLYING SQUAD STANDBY</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Instant Senior Engineer Technical Access
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-navy-muted font-light">
                Direct remote technical consultation and troubleshooting with licensed Chief Engineers before, during, and after vessel deployment.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Btn href={WHATSAPP} variant="ghostLight">
                  WhatsApp Duty Hotline
                </Btn>
                <Btn to="/contact">
                  Request Technical Scope
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Society Compliance */}
      <section className="container-x py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="eyebrow flex items-center justify-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            <span>CLASSIFICATION STANDARDS</span>
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground">
            Class Approved Marine Engineering
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            All repairs, overhauls, and riding squad works meet the rigorous survey requirements of major IACS classification societies.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {societies.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center justify-center rounded-lg border border-border/80 bg-card p-5 text-center shadow-sm transition hover:shadow-md hover:border-primary/50"
            >
              <span className="font-mono text-lg font-bold text-primary">
                {s.name}
              </span>
              <span className="mt-1 font-mono text-[10px] text-muted-foreground leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-muted-foreground">
          100% Classification Society Surveyor Acceptance Rate Across All Overhauls
        </div>
      </section>

      {/* Fleet Unified Climax Call to Action */}
      <section className="bg-secondary py-16 overflow-hidden border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div>
            <p className="eyebrow">SUPPORT FOR YOUR FLEET</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl text-foreground">
              Ready to Optimize Your Fleet Operations?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground font-light">
              Our global team of marine engineers is ready to provide expert technical support for any vessel category, anywhere in the world.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Btn href={WHATSAPP}>WhatsApp Duty Desk</Btn>
            <Btn to="/contact" variant="outline">
              Request Scope Consultation
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
