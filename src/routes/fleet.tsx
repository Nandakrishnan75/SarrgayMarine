import { createFileRoute } from "@tanstack/react-router";
import { Anchor, CheckCircle2, ShieldCheck } from "lucide-react";
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
  { name: "VLCC Tankers", image: fleetVlcc },
  { name: "Gas / LNG Carriers", image: fleetGasLng },
  { name: "Chemical Tankers", image: fleetChemical },
  { name: "Bulk Carriers", image: fleetBulk },
  { name: "Container Vessels", image: fleetContainer },
  { name: "Ro-Ro Vessels", image: fleetRoro },
  { name: "Offshore Support Vessels", image: fleetOffshore },
];

const complianceSocieties = ["ABS", "DNV", "LR", "BV", "NK", "KR"];

const qualityProtocols = [
  "Rigorous testing protocols for all overhauled auxiliary machinery",
  "Documentation and certification for all completed work",
  "Adherence to manufacturer specifications and guidelines",
  "Post-service performance verification and testing",
  "Detailed service reports and maintenance records",
];

function Fleet() {
  return (
    <div className="bg-background overflow-x-hidden">
      {/* Fleet Hero Header */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-navy text-navy-foreground on-navy">
        <div className="absolute inset-0 z-0">
          <img
            src={fleetHero}
            alt="Fleet Support Hero"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-90" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm mx-auto backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white font-bold text-xs tracking-widest uppercase shadow-black drop-shadow-md">
                Global Reach
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-xl">
              Global{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Fleet Support
              </span>
            </h1>

            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Specialized support for complex fleets. We handle logistics, visa requirements, and tool clearance for rapid global deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Vessels Served (Exact Match to https://sarrgaymarine.pages.dev/fleet) */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full text-navy text-sm font-bold mb-6 border border-navy/10">
              <Anchor className="h-4 w-4" />
              <span>VESSELS SERVED</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Comprehensive <span className="text-navy">Coverage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vessels.map((v) => (
              <div key={v.name} className="flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy" />
                  <h4 className="text-navy font-bold text-xl md:text-2xl font-display">
                    {v.name}
                  </h4>
                </div>

                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg shadow-navy/5 bg-navy/5">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Approved Compliance Section */}
      <section className="py-16 md:py-24 bg-secondary overflow-hidden">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary text-sm font-bold mb-6 border border-primary/10 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>COMPLIANCE</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Class <span className="text-primary">Approved</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                All repairs and overhauls meet the rigorous standards of major classification societies. We ensure quality control through strict testing protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {complianceSocieties.map((n) => (
                  <div
                    key={n}
                    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-navy font-bold group-hover:text-primary transition-colors">
                      {n}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square shadow-xl cursor-pointer">
              <img
                src={fleetInspection}
                alt="Quality Control Inspection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 text-center rounded-2xl shadow-xl">
                  <h4 className="text-white font-bold text-6xl font-display mb-2 drop-shadow-lg">
                    100%
                  </h4>
                  <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">
                    Compliance Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Protocols & Mobilization Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Box: Technical Mobilization Dark Card */}
            <div className="lg:order-1 bg-navy text-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-2xl shadow-navy/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 relative z-10">
                Technical Mobilization <br />
                <span className="text-accent">&amp; Global Response</span>
              </h3>
              <div className="space-y-6 relative z-10 text-navy-muted leading-relaxed text-sm md:text-base">
                <p>
                  Our flying squads and riding crews mobilize with certified equipment, pre-cleared for international air freight and port access worldwide.
                </p>
                <p>
                  From Singapore to Rotterdam, Houston to Dubai, we ensure engineers arrive with the exact calibrated tooling required for zero-delay intervention.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 relative z-10">
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
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold mb-2 border border-primary/20">
                <ShieldCheck className="h-4 w-4" />
                <span>QUALITY ASSURANCE</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
                Rigorous <span className="text-primary">Protocols</span>
              </h2>

              <div className="space-y-4">
                {qualityProtocols.map((proto) => (
                  <div
                    key={proto}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-navy text-base md:text-lg font-medium leading-relaxed">
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
