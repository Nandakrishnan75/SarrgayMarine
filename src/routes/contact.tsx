import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import { WHATSAPP, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact Technical Command | SARRGAY MARINE",
      "Direct connection with our Chief Engineers and operations desk for vessel maintenance, riding squads, or emergency response."
    ),
  component: Contact,
});

const serviceOptions = [
  "Generator & Auxiliary Engine Maintenance",
  "Main Engine Overhauls & Propulsion Care",
  "Dry Dock Assistance & Superintendency",
  "Mechanical & Electrical Systems Engineering",
  "Sailing Teams & Riding Crew Deployment",
  "24/7 Emergency Technical Repairs",
  "Technical Scope Assessment",
  "Other Requirements",
];

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
    <div className="bg-white text-[#1A1A1A] pt-20 sm:pt-24 pb-8 sm:pb-10 border-b border-border">
      <div className="container-x max-w-6xl">
        {/* Architectural Header */}
        <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground font-display">
            Contact Technical Command
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
            Direct connection with our Chief Engineers and operations superintendents for vessel maintenance, riding squads, or urgent emergency response.
          </p>
        </div>

        {/* Unified Luxury Dual-Pane Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border border-border/80 bg-white shadow-xl overflow-hidden">
          {/* Left Pane: Navy Command Desk with Visible Website Background Image */}
          <div className="relative lg:col-span-5 bg-[#061220] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden">
            {/* Background Image on BG: Maritime vessel and superstructure with bottom pavement fully eliminated */}
            <img
              src={contactHero}
              alt="Maritime Fleet Operations"
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none opacity-35 filter contrast-125 brightness-90"
              width={1080}
              height={1080}
            />
            {/* Dark Navy Gradient Overlay: smoothly fades into solid #061220 navy with zero gray bleeding */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#061220]/85 via-[#061220]/80 to-[#061220] pointer-events-none" />

            {/* Upper Content Section */}
            <div className="relative z-10 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 font-semibold block">
                  Direct Inquiries
                </span>
                <h2 className="mt-0.5 text-base sm:text-lg font-bold text-white font-display">
                  Operations Duty Desk
                </h2>
                <p className="mt-1 text-xs text-white/70 font-light leading-relaxed">
                  Available 24/7/365 across Indian Ocean, Middle East, and Southeast Asian waters.
                </p>
              </div>

              {/* 24/7 Hotline */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-white/70 text-xs font-mono">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <span>24/7 EMERGENCY HOTLINE</span>
                </div>
                <a
                  href="tel:+918009909888"
                  className="block text-lg sm:text-xl font-bold font-mono text-white hover:text-primary transition-colors"
                >
                  +91 80099 09888
                </a>
                <div className="text-xs text-white/60 font-mono">
                  Secondary:{" "}
                  <a href="tel:+918009980888" className="hover:text-white transition-colors">
                    +91 80099 80888
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 text-xs font-medium text-white hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <div>
                    <div className="font-semibold text-white">Direct WhatsApp Desk</div>
                    <div className="text-[11px] text-white/60">Urgent breakdown diagnosis &bull; &lt; 5m response</div>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email Addresses */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-white/70 font-mono">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <span>OFFICIAL CORRESPONDENCE</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="block text-[10px] text-white/50 uppercase font-mono">Technical &amp; Drydock</span>
                    <a href="mailto:service@sarrgaymarine.com" className="font-mono text-xs sm:text-sm text-white hover:text-primary transition-colors break-all">
                      service@sarrgaymarine.com
                    </a>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/50 uppercase font-mono">Commercial &amp; General</span>
                    <a href="mailto:info@sarrgaymarine.com" className="font-mono text-xs sm:text-sm text-white hover:text-primary transition-colors break-all">
                      info@sarrgaymarine.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Content Section: Anchors Address Elegantly on Desktop & Mobile */}
            <div className="relative z-10 pt-4 mt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-xs text-white/70">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Kochi Operations Headquarters</strong>
                  <span className="leading-relaxed">65/1599A, Mathilicherril, Shenoy Road, Kaloor, Kochi – 682017, Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane: Clean Architectural Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-center bg-white">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground font-display">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
                  Our Chief Engineers have received your technical inquiry. For active underway emergencies, call our duty desk at +91 80099 09888.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-wider text-primary hover:underline cursor-pointer"
                  >
                    &larr; Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-border/70 pb-2.5">
                  <h2 className="text-base font-bold text-foreground">
                    Request Technical Scope
                  </h2>
                  <p className="text-xs text-muted-foreground font-light">
                    Submit vessel requirements for immediate superintendent review.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-md border border-border/80 bg-background px-3 py-2.5 text-base sm:text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-md border border-border/80 bg-background px-3 py-2.5 text-base sm:text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-md border border-border/80 bg-background px-3 py-2.5 text-base sm:text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                      Vessel Name / IMO (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="MV Ocean Trader"
                      value={formState.vessel}
                      onChange={(e) => setFormState({ ...formState, vessel: e.target.value })}
                      className="w-full rounded-md border border-border/80 bg-background px-3 py-2.5 text-base sm:text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    Service Scope *
                  </label>
                  <select
                    required
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full rounded-md border border-border/80 bg-background px-3 py-2.5 text-base sm:text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">
                    Message / Machinery Details *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the machinery maker, scope required, port of attendance, or target dates..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-md border border-border/80 bg-background px-3 py-2.5 text-base sm:text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                  >
                    Submit Technical Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}