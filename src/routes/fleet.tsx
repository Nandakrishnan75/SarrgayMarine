import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  Compass,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import fleetHero from "@/assets/fleet-hero.jpg";
import fleetVlcc from "@/assets/fleet-vlcc.jpg";
import fleetGasLng from "@/assets/fleet-gas-lng.jpg";
import fleetChemical from "@/assets/fleet-chemical.jpg";
import fleetBulk from "@/assets/fleet-bulk.jpg";
import fleetContainer from "@/assets/fleet-container.jpg";
import fleetRoro from "@/assets/fleet-roro.jpg";
import fleetOffshore from "@/assets/fleet-offshore.jpg";
import fleetInspection from "@/assets/fleet-inspection.jpg";
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
    n: "VLCC Tankers",
    c: "Crude Oil Tankers",
    f: "Tankers",
    image: fleetVlcc,
    spec: "300,000+ DWT • 2-Stroke Low-Speed Diesel",
    len: "330M / 1,080 FT",
    speed: "16.5 Knots",
    range: "22,000 NM",
    focus: "Main engine cylinder unit renewal, crankshaft deflection, steam turbine governors, and Framo cargo pump overhauls.",
    deliverables: [
      "In-situ crankshaft deflection & web clearance verification",
      "Framo hydraulic submerged cargo pump overhauls",
    ],
  },
  {
    n: "Gas / LNG Carriers",
    c: "Cryogenic Gas",
    f: "Gas Carriers",
    image: fleetGasLng,
    spec: "174,000 m³ • Dual-Fuel ME-GI / X-DF Engines",
    len: "299M / 980 FT",
    speed: "19.5 Knots",
    range: "18,500 NM",
    focus: "Dual-fuel gas injection valve servicing, cryogenic valve maintenance, Gas Valve Unit (GVU-2) overhauls, and reliquefaction plants.",
    deliverables: [
      "Gas Valve Unit (GVU) overhaul & pressure testing",
      "Cryogenic manifold & safety shut-off loop validation",
    ],
  },
  {
    n: "Chemical Tankers",
    c: "Chemical & Product",
    f: "Tankers",
    image: fleetChemical,
    spec: "50,000 DWT • Stainless Steel 316LN Tanks",
    len: "183M / 600 FT",
    speed: "15.0 Knots",
    range: "14,000 NM",
    focus: "Framo hydraulic submerged pump rebuilding, cargo line manifold valves, and nitrogen inert gas generator servicing.",
    deliverables: [
      "Hydraulic power unit (HPU) valve pack overhauls",
      "Deepwell cargo pump shaft alignment & seal renewals",
    ],
  },
  {
    n: "Bulk Carriers",
    c: "Dry Bulk Fleet",
    f: "Bulk Carriers",
    image: fleetBulk,
    spec: "60,000 to 210,000 DWT • Heavy Fuel Auxiliary Packages",
    len: "225M – 300M",
    speed: "14.5 Knots",
    range: "20,000 NM",
    focus: "Hatch cover hydraulic rams, heavy diesel generator overhauls, ballast sea valve refurbishment, and deck crane winches.",
    deliverables: [
      "Hydraulic hatch cover cylinder rebuilds & seal renewals",
      "Heavy diesel auxiliary engine major overhaul routines",
    ],
  },
  {
    n: "Container Vessels",
    c: "Boxship Fleet",
    f: "Container",
    image: fleetContainer,
    spec: "1,500 to 24,000 TEU • High-Output 2-Stroke Propulsion",
    len: "170M – 400M",
    speed: "22.0 Knots",
    range: "25,000 NM",
    focus: "High-output turbocharger rotor cartridge overhaul, 440V reefer switchboard maintenance, and fast-turnaround port casualty repairs.",
    deliverables: [
      "Turbocharger dynamic rotor balancing (ISO 1940-1)",
      "Main propulsion liner wear mapping & hone overhaul",
    ],
  },
  {
    n: "Ro-Ro Vessels",
    c: "Roll-on / Roll-off",
    f: "Ro-Ro",
    image: fleetRoro,
    spec: "6,500 to 8,500 CEU • Multi-Deck Vehicle Carriers",
    len: "200M / 656 FT",
    speed: "20.0 Knots",
    range: "16,000 NM",
    focus: "Quarter ramp hydraulic power units, internal hoistable deck cylinders, and bow thruster pitch mechanism overhauls.",
    deliverables: [
      "Stern & quarter ramp hydraulic cylinder refurbishment",
      "Controllable pitch propeller (CPP) bow thruster service",
    ],
  },
  {
    n: "Offshore Support Vessels",
    c: "Offshore DP-2 / DP-3",
    f: "Offshore",
    image: fleetOffshore,
    spec: "200T Bollard Pull • Dynamic Positioning 2/3",
    len: "88M / 288 FT",
    speed: "16.0 Knots",
    range: "9,000 NM",
    focus: "Azimuth thruster rebuilds, tunnel bow thrusters, diesel-electric power management, and towing winch hydraulics.",
    deliverables: [
      "Azimuth thruster lower gearbox inspection & seals",
      "Power Management System (PMS) generator load testing",
    ],
  },
];

const filters = ["All Vessels", "Tankers", "Gas Carriers", "Bulk Carriers", "Container", "Ro-Ro", "Offshore"];

const complianceSocieties = ["ABS", "DNV", "LR", "BV", "NK", "KR"];

const qualityProtocols = [
  "Rigorous testing protocols for all overhauled auxiliary machinery",
  "Documentation and certification for all completed work",
  "Strict adherence to manufacturer specifications and guidelines",
  "Post-service performance verification and sea-trial testing",
  "Detailed technical service reports and maintenance records",
];

function Fleet() {
  const [activeFilter, setActiveFilter] = useState("All Vessels");
  const filteredList =
    activeFilter === "All Vessels" ? vessels : vessels.filter((v) => v.f === activeFilter);

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Modern Fleet Hero Header (Preserving Exact Reference Image) */}
      <section className="relative pt-28 pb-16 md:pt-44 md:pb-28 overflow-hidden bg-navy text-navy-foreground on-navy border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={fleetHero}
            alt="Fleet Support Hero"
            className="w-full h-full object-cover pointer-events-none"
            width={1920}
            height={1080}
          />
          <div className="hero-overlay absolute inset-0 pointer-events-none" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm mx-auto backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-white font-mono font-semibold text-xs tracking-widest uppercase">
                Global Reach &bull; Fleet Experience
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.1] drop-shadow-xl">
              Global{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Fleet Support
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Specialized technical support for commercial fleets. We handle global logistics, visa requirements, and fly-away tooling for rapid deployment across all vessel categories.
            </p>

            {/* Quick Metrics Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-3 py-1 text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                7 VESSEL CATEGORIES
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-3 py-1 text-white/90">
                WORLDWIDE PORT ACCESS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-navy/60 backdrop-blur-sm px-3 py-1 text-white/90">
                100% SURVEYOR SIGN-OFF
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vessels Served Section (Elevated Architecture matching Screenshot) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold shadow-sm">
              <Anchor className="h-3.5 w-3.5" />
              <span>VESSELS SERVED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground font-display">
              Comprehensive <span className="text-primary">Coverage</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              Proven Chief Engineer expertise, precision machinery overhauls, and riding squad support across wet, dry, gas, container, and offshore marine sectors.
            </p>

            {/* Modern Pill Filters */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
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

          {/* 3-Column Modern Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.map((v) => (
              <article
                key={v.n}
                className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40"
              >
                <div>
                  {/* Card Header: Title with Bullet + Category Tag Above Image */}
                  <div className="mb-3.5 flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-foreground flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span>{v.n}</span>
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded border border-border/60 shrink-0">
                      {v.c}
                    </span>
                  </div>

                  {/* Clean Rounded Image Container: STRICTLY ZERO OVERLAYS */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-navy/5 shadow-inner">
                    <img
                      src={v.image}
                      alt={v.n}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                  </div>

                  {/* Specification Subtitle */}
                  <p className="mt-4 font-mono text-xs font-medium text-primary">
                    {v.spec}
                  </p>

                  {/* 3-Metric Telemetry Grid */}
                  <dl className="mt-3 grid grid-cols-3 gap-2 rounded-xl border border-border/60 bg-secondary/40 p-2.5 text-center text-xs">
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
                  <p className="mt-3.5 text-xs text-muted-foreground font-light leading-relaxed">
                    {v.focus}
                  </p>

                  {/* Verified Deliverables Checkpoints */}
                  <div className="mt-3 pt-3 border-t border-border/60 space-y-1.5">
                    {v.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                        <span className="font-light leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between gap-3">
                  <Btn to="/contact" className="text-xs">
                    Request Scope
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Btn>
                  <Btn href={WHATSAPP} variant="outline" className="text-xs">
                    Duty Desk
                  </Btn>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Class Approved Compliance Section */}
      <section className="py-16 md:py-24 bg-secondary/40 border-t border-border/70 overflow-hidden">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-primary text-xs font-mono font-bold mb-4 border border-border shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>COMPLIANCE &bull; IACS SOCIETIES</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4 leading-tight">
                Class <span className="text-primary">Approved</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed font-light">
                All repairs and overhauls meet the rigorous standards of major classification societies. We ensure quality control through strict testing protocols and daily superintendent sign-off.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {complianceSocieties.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-3 p-3.5 bg-card rounded-xl border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-mono text-sm font-bold text-foreground">
                      {n}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Control Inspection Card */}
            <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square shadow-xl border border-border/80">
              <img
                src={fleetInspection}
                alt="Quality Control Inspection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/30 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-navy/80 backdrop-blur-md p-8 border border-white/20 text-center rounded-2xl shadow-2xl">
                  <h4 className="text-white font-bold text-5xl sm:text-6xl font-display mb-2 drop-shadow-lg">
                    100%
                  </h4>
                  <p className="text-accent font-mono font-bold text-xs uppercase tracking-[0.2em]">
                    Surveyor Acceptance Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Protocols & Mobilization Section */}
      <section className="py-16 md:py-24 bg-white border-t border-border/70">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Box: Technical Mobilization Dark Card */}
            <div className="lg:order-1 bg-navy text-white rounded-2xl md:rounded-3xl p-7 md:p-12 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-4">
                <Wrench className="h-4 w-4" />
                <span>RAPID DEPLOYMENT &bull; FLY-AWAY TOOLING</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-5 relative z-10">
                Technical Mobilization <br />
                <span className="text-accent">&amp; Global Response</span>
              </h3>
              <div className="space-y-4 relative z-10 text-navy-muted leading-relaxed text-xs sm:text-sm font-light">
                <p>
                  Our flying squads and riding crews mobilize with certified equipment, pre-cleared for international air freight and port access worldwide.
                </p>
                <p>
                  From Singapore to Rotterdam, Houston to Dubai, we ensure engineers arrive with the exact calibrated tooling required for zero-delay intervention.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 relative z-10">
                <Btn href={WHATSAPP} variant="ghostLight">
                  WhatsApp Duty Hotline
                </Btn>
                <Btn to="/contact">
                  Request Mobilization
                </Btn>
              </div>
            </div>

            {/* Right List: Rigorous Protocols */}
            <div className="lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary text-xs font-mono font-bold border border-primary/20">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>QUALITY ASSURANCE</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight">
                Rigorous <span className="text-primary">Protocols</span>
              </h2>

              <div className="space-y-3 pt-1">
                {qualityProtocols.map((proto) => (
                  <div
                    key={proto}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/70 bg-card hover:bg-secondary/40 transition-colors shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-foreground text-xs sm:text-sm font-medium leading-relaxed">
                      {proto}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Bottom Call To Action */}
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
              Request Technical Scope
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
