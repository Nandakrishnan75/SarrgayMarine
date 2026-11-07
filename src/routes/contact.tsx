import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroShip from "@/assets/hero-ship.jpg";
import {
  ADDRESS,
  EMAIL,
  EMAIL_OPS,
  PHONE,
  PHONE_ALT,
  TEL,
  WHATSAPP,
  meta,
} from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact Us | 24/7 Global Maritime Support | SARRGAY MARINE",
      "Connect with our Chief Engineers and operations desk for routine maintenance, dry dock assistance, or 24/7 emergency riding squads."
    ),
  component: Contact,
});

const serviceOptions = [
  "Generator & Auxiliary Engine Maintenance",
  "Main Engine Overhauls",
  "Dry Dock Assistance & Superintendency",
  "Mechanical & Electrical Systems",
  "Sailing Riding Squads (CDC/STCW)",
  "Emergency Repairs & Flying Squad",
  "Technical Consultation & Scope Assessment",
  "Other Requirements",
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border/80 bg-white px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary hover:border-foreground/30";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    vessel: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Luxury Cinematic Maritime Hero (Visible BG + Premium Finishes) */}
      <section className="relative overflow-hidden bg-[#061220] text-navy-foreground on-navy pt-28 pb-14 sm:pt-36 sm:pb-16 border-b border-accent/25 shadow-2xl">
        {/* Clearly Visible Cinematic Ocean Vessel Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroShip}
            alt="Maritime Engineering Command"
            className="w-full h-full object-cover object-[center_40%] pointer-events-none opacity-80 filter brightness-[0.88] contrast-[1.15]"
            width={1920}
            height={1080}
          />
          {/* Directional Luxury Vignette: readable text on left, visible cinematic vessel on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061220]/95 via-[#061220]/70 to-[#061220]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061220] via-transparent to-transparent pointer-events-none" />
          <div aria-hidden className="dot-grid absolute right-8 top-12 h-24 w-32 opacity-25 pointer-events-none" />
        </div>

        <div className="container-x relative z-10 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-navy/70 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-accent shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>COMMAND LIAISON &bull; 24/7 GLOBAL OPERATIONS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] font-display drop-shadow-lg">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">Touch</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed max-w-xl drop-shadow">
                Direct connection with our Chief Engineers and operations superintendents for propulsion overhauls, drydocking, or emergency response.
              </p>
            </div>

            {/* Premium Glassmorphic Status Tags */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-navy/80 px-4 py-1.5 text-emerald-400 backdrop-blur-md shadow-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Duty Desk Active 24/7
              </span>
              <span className="rounded-full border border-white/20 bg-navy/70 px-3.5 py-1.5 text-white/90 backdrop-blur-md shadow-md">
                SLA &lt; 15 Mins
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <div className="container-x max-w-5xl py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Minimal, Elegant Info (Unboxed & Typographic) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Telephone */}
            <div className="space-y-1.5">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                24/7 Operations Hotline
              </span>
              <a
                href={TEL}
                className="block text-2xl font-bold font-mono tracking-tight text-foreground hover:text-primary transition-colors"
              >
                {PHONE}
              </a>
              <span className="block text-xs text-muted-foreground font-mono">
                Secondary Line:{" "}
                <a
                  href={`tel:${PHONE_ALT.replace(/\s+/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {PHONE_ALT}
                </a>
              </span>
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5 pt-2 border-t border-border/40">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Instant Messaging
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Direct WhatsApp Liaison
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-muted-foreground font-light">
                Direct channel with our Chief Engineers for urgent breakdown diagnosis.
              </p>
            </div>

            {/* Email */}
            <div className="space-y-2 pt-2 border-t border-border/40">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Electronic Mail
              </span>
              <div>
                <span className="block text-xs text-muted-foreground font-light">
                  Technical Operations & Scopes
                </span>
                <a
                  href={`mailto:${EMAIL_OPS}`}
                  className="block font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  {EMAIL_OPS}
                </a>
              </div>
              <div className="pt-1">
                <span className="block text-xs text-muted-foreground font-light">
                  General Inquiries
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block font-mono text-sm text-foreground hover:text-primary transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1.5 pt-2 border-t border-border/40">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                Operational Base
              </span>
              <p className="text-sm font-semibold text-foreground">
                Kochi, Kerala, India
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {ADDRESS}
              </p>
            </div>

            {/* Reassurance */}
            <div className="pt-4 border-t border-border/40 text-xs text-muted-foreground font-light leading-relaxed">
              Average emergency confirmation within 15 minutes. All technical consultations and vessel data are protected under standard maritime confidentiality.
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground font-display">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
                    Our technical superintendent will review your vessel requirements and respond shortly. For urgent emergencies, please dial {PHONE}.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono uppercase tracking-wider text-primary hover:underline cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="text-xs font-medium text-foreground">
                      Full Name *
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputClass}
                      />
                    </label>

                    <label className="text-xs font-medium text-foreground">
                      Email Address *
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="text-xs font-medium text-foreground">
                      Phone Number (Optional)
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className={inputClass}
                      />
                    </label>

                    <label className="text-xs font-medium text-foreground">
                      Vessel Name / IMO (Optional)
                      <input
                        type="text"
                        placeholder="MV Ocean Trader"
                        value={formState.vessel}
                        onChange={(e) => setFormState({ ...formState, vessel: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <label className="block text-xs font-medium text-foreground">
                    Service Scope *
                    <select
                      required
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className={inputClass}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-xs font-medium text-foreground">
                    Message / Machinery Details *
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the machinery maker, scope required, port of attendance, or target dates..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="rounded-lg bg-navy hover:bg-navy/90 text-white font-medium px-7 py-3 text-sm transition-all shadow-sm cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Response within 24h • SLA &lt; 15m for emergencies
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
