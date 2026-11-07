import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import fleetHero from "@/assets/fleet-hero.jpg";
import vlccImg from "@/assets/fleet-vlcc-supertanker.jpg";
import lngImg from "@/assets/lng-dualfuel-engineering.jpg";
import chemImg from "@/assets/generator-maintenance.jpg";
import bulkImg from "@/assets/drydock-superintendency.jpg";
import containerImg from "@/assets/hero-ship.jpg";
import roroImg from "@/assets/main-engine-propulsion.jpg";
import offshoreImg from "@/assets/hydraulic-steering-gear.jpg";
import { Btn, CtaBanner, PageHero, SectionHead, WHATSAPP, meta } from "@/components/site";

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
    n: "VLCC Supertankers",
    c: "Crude Oil Tankers",
    f: "Tankers",
    img: vlccImg,
    spec: "300,000+ DWT • 2-Stroke Low-Speed Diesel",
    len: "330M / 1,080 FT",
    speed: "16.5 Knots Cruising",
    range: "22,000 NM Autonomy",
    focus: "Complete main engine cylinder unit renewal, crankshaft deflection, and steam turbine / Framo cargo pump overhauls.",
  },
  {
    n: "Gas / LNG & LPG Carriers",
    c: "Cryogenic Gas Transport",
    f: "Gas Carriers",
    img: lngImg,
    spec: "174,000 m³ • Dual-Fuel ME-GI / X-DF Engines",
    len: "299M / 980 FT",
    speed: "19.5 Knots Cruising",
    range: "18,500 NM Autonomy",
    focus: "Dual-fuel gas injection valve servicing, cryogenic valve maintenance, and reliquefaction plant auxiliary overhauls.",
  },
  {
    n: "Chemical Parcel Tankers",
    c: "Chemical & Product",
    f: "Tankers",
    img: chemImg,
    spec: "50,000 DWT • Stainless Steel 316LN Tanks",
    len: "183M / 600 FT",
    speed: "15 Knots Cruising",
    range: "14,000 NM Autonomy",
    focus: "Framo hydraulic submerged pump rebuilding, cargo line valves, and inert gas generator servicing.",
  },
  {
    n: "Bulk Carriers (Capesize & Panamax)",
    c: "Dry Bulk Fleet",
    f: "Bulk Carriers",
    img: bulkImg,
    spec: "60,000 to 210,000 DWT • Heavy Fuel Auxiliary Packages",
    len: "225M – 300M",
    speed: "14.5 Knots Cruising",
    range: "20,000 NM Autonomy",
    focus: "Hatch cover hydraulic rams, heavy diesel generator overhauls, ballast valve refurbishment, and deck crane wire & winch renewals.",
  },
  {
    n: "Container Vessels",
    c: "Feeder to Ultra-Large Container",
    f: "Container",
    img: containerImg,
    spec: "1,500 to 24,000 TEU • High-Output 2-Stroke Propulsion",
    len: "170M – 400M",
    speed: "22 Knots Cruising",
    range: "25,000 NM Autonomy",
    focus: "High-output turbocharger rotor cartridge overhaul, reefer switchboard maintenance, and fast-turnaround port intervention.",
  },
  {
    n: "Ro-Ro & Car Carriers",
    c: "Roll-on / Roll-off",
    f: "Ro-Ro",
    img: roroImg,
    spec: "6,500 to 8,500 CEU • Multi-Deck Vehicle Carriers",
    len: "200M / 656 FT",
    speed: "20 Knots Cruising",
    range: "16,000 NM Autonomy",
    focus: "Quarter ramp hydraulic power units, internal hoistable deck cylinders, and bow thruster pitch mechanism overhauls.",
  },
  {
    n: "Offshore Support Vessels (AHTS & PSV)",
    c: "Offshore DP-2 / DP-3",
    f: "Offshore",
    img: offshoreImg,
    spec: "200T Bollard Pull • Dynamic Positioning 2/3",
    len: "88M / 288 FT",
    speed: "16 Knots Cruising",
    range: "9,000 NM Autonomy",
    focus: "Azimuth thruster rebuilds, tunnel bow thrusters, diesel-electric power management, and towing winch hydraulics.",
  },
];

const filters = ["All Vessels", "Tankers", "Gas Carriers", "Bulk Carriers", "Container", "Ro-Ro", "Offshore"];

const protocols = [
  "Rigorous testing protocols for all overhauled auxiliary machinery",
  "Documentation and certification for all completed work",
  "Strict adherence to manufacturer specifications and guidelines",
  "Post-service performance verification and sea-trial testing",
  "Detailed technical service reports and maintenance records",
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
    <>
      <PageHero
        image={fleetHero}
        eyebrow="Global Reach • Fleet Experience"
        title="Global Fleet Support & Technical Coverage"
        sub="Specialized support for complex fleets. We handle logistics, visa requirements, and tool clearance for rapid global deployment across all vessel categories."
      />

      {/* Metrics Strip */}
      <section className="border-b bg-card scroll-reveal">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            ["Classification Societies", "ABS • DNV • LR • BV • IRS • ClassNK"],
            ["Propulsion Capacity", "Up to 80,000 BHP"],
            ["Compliance Success", "100% Surveyor Sign-Off"],
            ["Quality Assurance", "ISO 9001:2015 Certified"],
          ].map(([l, v], idx) => (
            <div key={l} className={`scroll-reveal delay-${(idx + 1) * 75}`}>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              <div className="mt-1 font-mono font-medium text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Vessels Served */}
      <section className="container-x py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between scroll-reveal">
          <SectionHead
            eyebrow="VESSELS SERVED"
            title="Comprehensive Fleet Typology Coverage"
            sub="Proven engineering expertise across wet, dry, gas, and offshore sectors."
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((flt) => (
              <button
                key={flt}
                onClick={() => setActiveFilter(flt)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                  activeFilter === flt
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary"
                }`}
              >
                {flt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredList.map((v, idx) => (
            <article
              key={v.n}
              className={`group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 scroll-reveal delay-${((idx % 3) + 1) * 100}`}
            >
              {/* Pristine Unobstructed Image: No overlays top or bottom */}
              <div className="aspect-[16/10] overflow-hidden bg-navy">
                <img
                  src={v.img}
                  alt={v.n}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Clean structured technical details below image */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="eyebrow">{v.c}</span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{v.n}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{v.spec}</p>

                <dl className="mt-6 grid grid-cols-3 gap-2 border-y border-border/70 py-4 text-xs">
                  <div>
                    <dt className="text-muted-foreground font-mono text-[11px] uppercase">Length</dt>
                    <dd className="mt-1 font-mono font-semibold text-foreground">{v.len}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground font-mono text-[11px] uppercase">Speed</dt>
                    <dd className="mt-1 font-mono font-semibold text-foreground">{v.speed}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground font-mono text-[11px] uppercase">Range</dt>
                    <dd className="mt-1 font-mono font-semibold text-foreground">{v.range}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Technical Focus:</span>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">{v.focus}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quality Assurance & Mobilization Section */}
      <section className="bg-secondary py-20 overflow-hidden">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="scroll-reveal scroll-reveal-left">
            <SectionHead
              eyebrow="QUALITY ASSURANCE"
              title="Rigorous Protocols & Documentation"
              sub="Every intervention adheres to verified quality checklists to guarantee maximum seaworthiness and zero off-hire risk."
            />
            <ul className="mt-8 space-y-3">
              {protocols.map((p, i) => (
                <li key={p} className="flex items-start gap-3 rounded-sm border bg-card p-4 text-sm shadow-sm transition hover:shadow-md">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="font-medium text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 scroll-reveal scroll-reveal-right delay-150">
            <div className="rounded-md border bg-card p-8 shadow-sm">
              <span className="eyebrow">FLY-AWAY TOOLING</span>
              <h3 className="mt-2 text-xl font-bold">Technical Mobilization & Global Response</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our technicians travel with specialized portable fly-away kits for in-situ crankshaft polishing, optical laser deflection analysis, hydraulic torque calibration, and vibration telemetry diagnostics.
              </p>
              <div className="mt-4 border-t pt-4 text-xs text-muted-foreground">
                Cleared for international air freight and expedited port customs clearance worldwide.
              </div>
            </div>

            <div className="rounded-md bg-navy p-8 text-navy-foreground on-navy">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">24/7 TECHNICAL HOTLINE</span>
              <h3 className="mt-2 text-xl font-bold">Instant Senior Engineer Access</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                Direct remote technical consultation and troubleshooting with certified Chief Engineers before, during, and after vessel deployment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Btn href={WHATSAPP} variant="ghostLight">WhatsApp Hotline</Btn>
                <Btn to="/contact">Request Consultation</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classification Society Compliance */}
      <section className="container-x py-20">
        <SectionHead
          center
          eyebrow="COMPLIANCE"
          title="Class Approved Engineering"
          sub="All repairs and overhauls meet the rigorous standards of major classification societies. We ensure quality control through strict testing protocols."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {societies.map((s, idx) => (
            <div
              key={s.name}
              className={`flex flex-col items-center justify-center rounded-md border bg-card p-5 text-center shadow-sm transition hover:shadow-md hover:border-primary/40 scroll-reveal delay-${((idx % 4) + 1) * 75}`}
            >
              <span className="font-display text-xl font-bold text-primary">{s.name}</span>
              <span className="mt-1 text-[11px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-xs font-mono text-muted-foreground scroll-reveal delay-200">
          100% Classification Society Surveyor Acceptance Rate Across All Overhauls
        </div>
      </section>

      {/* Fleet CTA Banner */}
      <section className="bg-secondary py-16 overflow-hidden border-b border-border">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div className="scroll-reveal scroll-reveal-left">
            <p className="eyebrow">SUPPORT FOR YOUR FLEET</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Ready to Optimize Your Operations?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our global team of marine engineers is ready to provide expert support for any vessel type, anywhere in the world.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 scroll-reveal scroll-reveal-right delay-100">
            <Btn href={WHATSAPP}>WhatsApp Now</Btn>
            <Btn to="/contact" variant="outline">Get a Quote</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
