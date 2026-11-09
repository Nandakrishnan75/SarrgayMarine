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
    c: "Crude Oil",
    f: "Tankers",
    image: fleetVlcc,
    desc: "Crankshaft alignment, main engine cylinder unit renewal, and submerged cargo pump servicing under Chief Engineer supervision.",
  },
  {
    n: "Gas / LNG Carriers",
    c: "Cryogenic Gas",
    f: "Gas Carriers",
    image: fleetGasLng,
    desc: "Dual-fuel gas valve train (GVU) overhauls, cryogenic manifold maintenance, and reliquefaction auxiliary plant care.",
  },
  {
    n: "Chemical Tankers",
    c: "Chemical & Product",
    f: "Tankers",
    image: fleetChemical,
    desc: "Submerged hydraulic cargo pump rebuilding, stainless-steel cargo valves, and auxiliary generator ±0.01mm realignment.",
  },
  {
    n: "Bulk Carriers",
    c: "Dry Bulk",
    f: "Bulk Carriers",
    image: fleetBulk,
    desc: "Hatch cover hydraulic rams, heavy diesel auxiliary generator rebuilds, and overboard sea chest valve refurbishment.",
  },
  {
    n: "Container Vessels",
    c: "Boxship Fleet",
    f: "Container",
    image: fleetContainer,
    desc: "High-output turbocharger dynamic balancing, 440V reefer switchboard maintenance, and fast-turnaround port casualty repairs.",
  },
  {
    n: "Ro-Ro Vessels",
    c: "Vehicle Carrier",
    f: "Ro-Ro",
    image: fleetRoro,
    desc: "Stern ramp hydraulic power units, internal hoistable deck cylinders, and controllable pitch propeller (CPP) thruster servicing.",
  },
  {
    n: "Offshore Support Vessels",
    c: "DP-2 / DP-3",
    f: "Offshore",
    image: fleetOffshore,
    desc: "Azimuth and tunnel thruster overhauls, dynamic positioning hydraulics, and Power Management System (PMS) generator load testing.",
  },
];

const filters = ["All Vessels", "Tankers", "Gas Carriers", "Bulk Carriers", "Container", "Ro-Ro", "Offshore"];

const complianceSocieties = ["ABS", "DNV", "LR", "BV", "NK", "KR", "IRS"];

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
      {/* Modern Fleet Hero Header - Compact Architectural */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 overflow-hidden bg-navy text-navy-foreground on-navy border-b border-white/10">
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
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 shadow-sm mx-auto backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-white font-mono font-semibold text-[11px] tracking-widest uppercase">
                Global Reach &bull; Fleet Experience
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.12] drop-shadow-md">
              Global{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Fleet Support
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-navy-muted max-w-xl mx-auto leading-relaxed font-light">
              Specialized technical support for commercial fleets. We handle global logistics, visa requirements, and tool clearance for rapid deployment across all vessel categories.
            </p>

            {/* Quick Metrics Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider">
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

      {/* Vessels Served Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-x">
          <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold shadow-sm">
              <Anchor className="h-3.5 w-3.5" />
              <span>VESSELS SERVED</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground font-display">
              Comprehensive <span className="text-primary">Coverage</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
              Specialized engineering, propulsion overhauls, and technical superintendency across global commercial vessel categories.
            </p>

            {/* Modern Pill Filters */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {filters.map((flt) => (
                <button
                  key={flt}
                  type="button"
                  onClick={() => setActiveFilter(flt)}
                  className={`rounded-full border px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-mono transition cursor-pointer active:scale-95 ${
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

          {/* 3-Column Modern Clean Vessel Cards Matching Live Reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {filteredList.map((v) => (
              <div key={v.n} className="flex flex-col group">
                {/* Title with Clean Bullet Point Above Image */}
                <div className="mb-3.5 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-navy shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-navy font-display">
                    {v.n}
                  </h3>
                </div>

                {/* Pure Clean Rounded Image Container with ZERO Overlays */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg shadow-navy/5 bg-navy/5">
                  <img
                    src={v.image}
                    alt={v.n}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Concise Engineering Scope Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
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
