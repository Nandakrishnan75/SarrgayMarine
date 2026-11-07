import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  PhoneCall,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Send,
  Anchor,
  CheckCircle2,
} from "lucide-react";
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
      "Whether you need emergency repairs, routine maintenance, or technical consultation, our team is ready to assist you 24/7. Emergency response under 15 minutes."
    ),
  component: Contact,
});

const serviceOptions = [
  "Generator & Auxiliary Engine Maintenance",
  "Main Engine Overhauls",
  "Dry Dock Assistance & Superintendency",
  "Mechanical & Electrical Services",
  "Sailing Teams & Riding Crew (CDC/STCW)",
  "Emergency Repairs & Flying Squads",
  "Technical Consultation & Scope Assessment",
  "Other",
];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-border";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
      {/* Compact Modern Architecture Header */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground on-navy pt-28 pb-10 sm:pt-32 sm:pb-12 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-[#0b1b33] pointer-events-none" />
        <div className="hero-overlay absolute inset-0 opacity-40 pointer-events-none" />

        <div className="container-x relative z-10 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>24/7 TECHNICAL LIAISON • GLOBAL DISPATCH</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight font-display">
                Connect With Our Engineers
              </h1>
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Direct 24/7 technical assistance, riding squad mobilization, and shipyard superintendency inquiries across all international maritime hubs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-accent backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" />
                <span>&lt; 15m Emergency SLA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-white/85 backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Global CDC / STCW Squads</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Channels & Technical Inquiry */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/30 via-background to-background">
        <div className="container-x max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
            {/* Left Column: Direct Contact Channels */}
            <aside className="space-y-5">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground font-display">
                  Direct Response Channels
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-light">
                  Immediate connection to our duty engineers and technical superintendent desk.
                </p>
              </div>

              {/* 24/7 Emergency Telephone Hotline */}
              <div className="rounded-2xl border border-navy/20 bg-navy text-white p-6 sm:p-7 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    24/7 EMERGENCY DISPATCH
                  </span>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-accent">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="block text-xs text-white/70 font-light">Primary Duty Hotline</span>
                  <a
                    href={TEL}
                    className="block font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-accent transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between text-xs text-white/75 font-mono">
                  <span>Secondary Operations Line:</span>
                  <a
                    href={`tel:${PHONE_ALT.replace(/\s+/g, "")}`}
                    className="font-semibold text-white hover:text-accent transition-colors"
                  >
                    {PHONE_ALT}
                  </a>
                </div>

                <a
                  href={TEL}
                  className="mt-5 flex items-center justify-center gap-2 w-full rounded-xl bg-accent hover:bg-accent/90 text-navy font-bold py-2.5 text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Duty Superintendent Now
                </a>
              </div>

              {/* WhatsApp Quick Desk */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Clock className="h-3.5 w-3.5" /> &lt; 5 MIN RESPONSE
                  </span>
                  <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  Chief Engineer WhatsApp Desk
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  Direct breakdown consultation, spare part cross-matching, and urgent riding squad mobilization via encrypted WhatsApp channel.
                </p>
                <span className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:gap-2.5 transition-all">
                  Open WhatsApp Chat <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              {/* Email Communications */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                    Technical Correspondence
                  </span>
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-3.5 text-sm">
                  <div>
                    <span className="block text-xs text-muted-foreground font-light">
                      Technical Operations & Dry Docking
                    </span>
                    <a
                      href={`mailto:${EMAIL_OPS}`}
                      className="font-mono font-medium text-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {EMAIL_OPS}
                    </a>
                  </div>
                  <div className="border-t border-border/60 pt-3">
                    <span className="block text-xs text-muted-foreground font-light">
                      Commercial & Voyage Scopes
                    </span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-mono font-medium text-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Corporate Headquarters & Global Hub */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                    Operations Headquarters
                  </span>
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">Kochi, Kerala, India</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {ADDRESS}
                </p>
                <div className="mt-3.5 border-t border-border/60 pt-3 space-y-1.5 text-[11px] text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Coverage: Middle East, Asia, Europe & Africa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Surveyor & Riding Squads: CDC / STCW Ready</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Modern Technical Inquiry Form */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground font-display">
                      Technical Inquiry Dispatched
                    </h2>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Our marine superintendents have received your specifications and will respond within 24 hours. For critical machinery failures, please dial our emergency line directly at{" "}
                      <strong className="text-foreground font-mono">{PHONE}</strong>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-xl border border-border px-5 py-2.5 text-xs font-mono font-semibold transition hover:bg-secondary cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground font-display">
                          Request Technical Proposal
                        </h2>
                        <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-light">
                          Provide vessel particulars and required engineering assistance for an expedited scope proposal.
                        </p>
                      </div>
                      <span className="hidden sm:inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-mono font-medium text-primary shrink-0">
                        &lt; 24h Response
                      </span>
                    </div>
                  </div>

                  {/* Full Name */}
                  <label className="text-xs font-medium text-foreground">
                    Full Name *
                    <input
                      required
                      type="text"
                      placeholder="e.g. Capt. Alexander Wright"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  {/* Email Address */}
                  <label className="text-xs font-medium text-foreground">
                    Work Email *
                    <input
                      required
                      type="email"
                      placeholder="e.g. superintendent@fleetline.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  {/* Phone Number */}
                  <label className="text-xs font-medium text-foreground">
                    Direct Phone / Mobile
                    <input
                      type="tel"
                      placeholder="e.g. +971 50 123 4567"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  {/* Company / Fleet Operator */}
                  <label className="text-xs font-medium text-foreground">
                    Company / Fleet Operator
                    <input
                      type="text"
                      placeholder="e.g. Ocean Maritime Management"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  {/* Vessel Name & IMO */}
                  <label className="text-xs font-medium text-foreground">
                    Vessel Name & IMO No.
                    <input
                      type="text"
                      placeholder="e.g. MV Pacific Trader • IMO 9482104"
                      value={formState.vessel}
                      onChange={(e) => setFormState({ ...formState, vessel: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  {/* Service Required */}
                  <label className="text-xs font-medium text-foreground">
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

                  {/* Message */}
                  <label className="text-xs font-medium text-foreground sm:col-span-2">
                    Scope Particulars & Port Details *
                    <textarea
                      required
                      rows={5}
                      placeholder="Specify machinery maker/model, nature of breakdown, current port or ETA, and target mobilization schedule..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={inputClass}
                    />
                  </label>

                  <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 text-sm shadow-md transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Dispatch Technical Inquiry</span>
                    </button>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      🔒 Strict Maritime Confidentiality & NDA
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
