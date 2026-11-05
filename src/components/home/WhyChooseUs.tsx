import React from 'react';
import { ShieldCheck, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/animated-section';

const classSocieties = [
    { code: 'ABS', name: 'American Bureau of Shipping' },
    { code: 'DNV', name: 'Det Norske Veritas' },
    { code: 'LR', name: "Lloyd's Register" },
    { code: 'BV', name: 'Bureau Veritas' },
    { code: 'NK', name: 'ClassNK' },
];

const pillars = [
    {
        metric: '100%',
        title: 'Class Approved Compliance',
        desc: 'All repairs, overhauls, and inspections strictly comply with major classification society protocols and manufacturer OEM tolerances.',
    },
    {
        metric: '24/7',
        title: 'Rapid Worldwide Mobilization',
        desc: 'Emergency riding squads and fly-away diagnostic toolkits dispatched to any port, anchorage, or dry dock internationally.',
    },
    {
        metric: '50+',
        title: 'Ports & Corridors Covered',
        desc: 'Experienced teams deployed across the Middle East, Indian Subcontinent, Southeast Asia, Europe, and major global shipping lanes.',
    },
    {
        metric: '< 15m',
        title: 'Technical Response Latency',
        desc: 'Immediate round-the-clock telephone and WhatsApp access directly to senior Chief Engineers for operational troubleshooting.',
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-silver-light relative overflow-hidden border-y border-border">
            <div className="absolute inset-0 bg-diagonal-lines opacity-35 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column (5 cols) — Brand Authority & Classification Matrix */}
                    <div className="lg:col-span-5 space-y-8">
                        <AnimatedSection direction="left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border text-navy text-xs font-mono font-semibold tracking-wider uppercase mb-5">
                                <span>// OPERATIONAL STANDARDS</span>
                            </div>

                            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight leading-[1.08] mb-6">
                                THE SARRGAY <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-slate-800 to-slate-600">
                                    ADVANTAGE.
                                </span>
                            </h2>

                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                Sarrgay Marine is built on deep technical leadership. Directed by Chief Engineers with decades of sea-going experience, we provide high-precision solutions that protect your vessel's charter schedule.
                            </p>

                            {/* Classification Society Matrix */}
                            <div className="pt-6 border-t border-border">
                                <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-navy" />
                                    <span>Audited Classification Standards</span>
                                </p>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                    {classSocieties.map((soc, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white border border-border p-3 text-center rounded-none shadow-sm hover:border-navy hover:shadow-md transition-all"
                                        >
                                            <p className="font-display font-extrabold text-navy text-base leading-none">
                                                {soc.code}
                                            </p>
                                            <p className="text-[9px] font-mono text-slate-400 mt-1 uppercase truncate">
                                                {soc.code}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Direct Line Badge */}
                            <div className="p-5 bg-white border border-border flex items-center justify-between">
                                <div className="flex items-center gap-3.5">
                                    <div className="w-10 h-10 bg-navy text-white flex items-center justify-center shrink-0">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                                            Direct Superintendent Line
                                        </p>
                                        <a href="tel:+918009909888" className="font-display text-base font-bold text-navy hover:underline">
                                            +91 80099 09888
                                        </a>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-navy hidden sm:block" />
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Column (7 cols) — 4 Metric Technical Panels */}
                    <div className="lg:col-span-7">
                        <AnimatedSection direction="right">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {pillars.map((pillar, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border border-border p-8 rounded-none shadow-sm hover:shadow-xl hover:border-navy/30 transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="font-display text-3xl sm:text-4xl font-black text-navy leading-none">
                                                    {pillar.metric}
                                                </span>
                                                <CheckCircle2 className="w-5 h-5 text-navy/40" />
                                            </div>
                                            <h3 className="font-display text-lg font-bold text-navy mb-2">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
