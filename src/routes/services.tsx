import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-ship.jpg";
import { Btn, CtaBanner, PageHero, SectionHead, WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () =>
    meta(
      "Marine Engineering Solutions | SARRGAY MARINE",
      "Delivering precision engineering, technical management, and riding squad services to the global maritime industry. Generator maintenance, main engine overhauls, dry dock assistance, mechanical & electrical, and emergency repairs."
    ),
  component: Services,
});

const catalog = [
  {
    id: "01",
    t: "Generator & Auxiliary Engine",
    tag: "Uninterrupted power generation & precision calibration",
    d: "Comprehensive power solutions ensuring your vessel never goes dark. We specialize in the heart of your ship's electrical system, eliminating power failure risks through micrometer-exact crankshaft alignment, bedplate inspection, and governor tuning.",
    items: [
      "Preventive and corrective maintenance programs",
      "Troubleshooting & precision fault diagnosis",
      "Load testing, AVR synchronizing & performance optimization",
      "Spare parts supply and installation",
      "Complete engine rebuild / major overhauls",
      "Frame and Crankshaft renewals & bedplate inspection",
      "Crankshaft deflections & bearing clearances",
      "OEM tolerance adherence for Yanmar, Daihatsu, Himsen, MAN",
    ],
  },
  {
    id: "02",
    t: "Main Engine Overhauls",
    tag: "Propulsion integrity for uninterrupted ocean passages",
    d: "Expert care for your vessel's propulsion. From routine maintenance to complex overhauls, we ensure peak performance across 2-stroke and 4-stroke marine diesel propulsion plants under Chief Engineer oversight.",
    items: [
      "Complete and partial propulsion overhauls",
      "Crankshaft, piston, liner, and bearing works",
      "Cylinder liner honing & calibration",
      "Fuel injection system servicing & timing adjustments",
      "Alignment and performance sea-trial testing",
      "Laser optical line boring & bedplate realignment",
      "Turbocharger rotor dynamic balancing & cartridge overhaul",
      "Combustion indicator diagram analysis & emission tuning",
    ],
  },
  {
    id: "03",
    t: "Dry Dock Assistance",
    tag: "Naval superintendent leadership & shipyard management",
    d: "Strategic support during critical docking periods. We manage the technical heavy lifting so you can focus on operations, eliminating off-hire delays and protecting shipowners from unexpected yard variations.",
    items: [
      "Pre-dock inspection, work scope compilation & yard tender review",
      "On-site technical supervision & daily superintendent logs",
      "Machinery overhauls during dry dock",
      "Tailshaft withdrawal, simplex seals & bearing clearances",
      "Rudder drop measurements, pintle bush & blade testing",
      "Overboard sea valves dismantling, lapping & class survey",
      "Hull fittings, sea chests, cathodic protection & sea valves",
      "Post-dock commissioning, sea trials & classification sign-off",
    ],
  },
  {
    id: "04",
    t: "Mechanical & Electrical Services",
    tag: "Holistic mechanical robustness & advanced electrical automation",
    d: "Integrating traditional heavy machinery with modern digital controls. We troubleshoot PLC automation, main switchboard busbars, reverse-power protections, and motor rewinds with full class documentation.",
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
    t: "Emergency Technical Repairs",
    tag: "24/7 rapid mobilization for critical maritime breakdowns",
    d: "Round-the-clock emergency support with rapid mobilization for urgent on-site interventions. Our flying squads deploy with specialized portable fly-away tooling to resolve voyage breakdowns at port or anchorage.",
    items: [
      "24/7 rapid-response teams mobilized within hours",
      "Critical machinery fault diagnosis & breakdown rectification",
      "Fly-away tooling kits for in-situ machining & hydraulic testing",
      "Temporary & permanent class-approved repair procedures",
      "Sea chest, overboard valve, and boiler emergency servicing",
      "Coordination with port authorities & classification surveyors",
      "Emergency spare part procurement & expedited customs clearance",
      "Continuous VHF Ch. 16 standby & senior superintendent support",
    ],
  },
  {
    id: "06",
    t: "Sailing Teams & Riding Crew",
    tag: "Zero-downtime maintenance while underway on ocean passages",
    d: "Skilled engineers and technicians deployed onboard for voyage-based engine maintenance, compliance support, and crew augmentation without disrupting commercial sailing schedules.",
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
  return (
    <>
      <PageHero
        image={hero}
        eyebrow="Global Maritime Expertise • Full Service Catalog"
        title="Marine Engineering Solutions"
        sub="Delivering precision engineering, technical management, and riding squad services to the global maritime industry. From voyage overhauls by sailing riding squads to scheduled major dry dock superintendency."
      />

      {/* Service Catalog */}
      <section className="container-x divide-y py-12">
        {catalog.map((s, idx) => (
          <article key={s.t} className="grid gap-8 py-14 lg:grid-cols-[1fr_1.3fr] overflow-hidden">
            <div className="scroll-reveal scroll-reveal-left">
              <span className="font-mono text-sm font-semibold text-primary">Service {s.id}</span>
              <h2 className="mt-2 text-3xl font-bold">{s.t}</h2>
              <p className="mt-2 italic text-muted-foreground">{s.tag}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-sm bg-secondary px-2.5 py-1 text-xs font-mono font-medium text-foreground">Class Approved</span>
                <span className="rounded-sm bg-secondary px-2.5 py-1 text-xs font-mono font-medium text-foreground">OEM Compliant</span>
                <span className="rounded-sm bg-secondary px-2.5 py-1 text-xs font-mono font-medium text-foreground">24/7 Mobilization</span>
              </div>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2 scroll-reveal scroll-reveal-right delay-100">
              {s.items.map((it, itemIdx) => (
                <li
                  key={it}
                  className={`rounded-sm border border-l-2 border-l-primary bg-card p-4 text-sm shadow-sm leading-relaxed transition hover:shadow-md hover:border-primary/40 scroll-reveal delay-${((itemIdx % 4) + 1) * 75}`}
                >
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Feature Spotlight — Riding Teams & On-Voyage Repairs */}
      <section className="bg-navy py-20 text-navy-foreground on-navy overflow-hidden">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center scroll-reveal">
            <p className="eyebrow">ON-VOYAGE REPAIRS • ZERO OFF-HIRE</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Zero Downtime Maintenance</h2>
            <p className="mt-5 leading-relaxed text-navy-muted">
              Our specialized sailing teams perform critical maintenance while your vessel remains operational, ensuring you never miss a charter. Deployed to any port worldwide with complete equipment and documentation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-md border border-navy-foreground/15 bg-navy/60 p-8 backdrop-blur-sm scroll-reveal scroll-reveal-left delay-100">
              <div className="font-mono text-xs uppercase tracking-wider text-accent">Pillar 01</div>
              <h3 className="mt-2 text-xl font-bold">Qualified & Certified Personnel</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                All technicians and riding squad specialists are fully certified with valid <b>CDC (Continuous Discharge Certificates)</b> and <b>STCW 2010</b> seafarer endorsements, holding medical fitness certificates ready for rapid visa processing and worldwide deployment.
              </p>
            </div>
            <div className="rounded-md border border-navy-foreground/15 bg-navy/60 p-8 backdrop-blur-sm scroll-reveal scroll-reveal-right delay-200">
              <div className="font-mono text-xs uppercase tracking-wider text-accent">Pillar 02</div>
              <h3 className="mt-2 text-xl font-bold">Sea-Going Project Management</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                Experienced sea-going supervisors and former Chief Engineers who organize, plan, and execute complex machinery overhauls during transit. Daily logs, milestone tracking, and seamless integration with shipboard crew.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center scroll-reveal delay-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/5 px-4 py-1.5 text-xs font-mono text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Deploying teams to any port worldwide • Middle East • Asia • Europe
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn to="/contact">Request Riding Squad Quote</Btn>
              <Btn href={WHATSAPP} variant="ghostLight">WhatsApp Hotline</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA Banner */}
      <section className="bg-secondary py-16 overflow-hidden">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div className="scroll-reveal scroll-reveal-left">
            <p className="eyebrow">LET'S DISCUSS YOUR FLEET</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Ready to Optimize Your Operations?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a competitive quote for your next dry docking or riding squad requirement within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 scroll-reveal scroll-reveal-right delay-100">
            <Btn href={WHATSAPP}>WhatsApp Now</Btn>
            <Btn to="/contact" variant="outline">Request Quote</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
