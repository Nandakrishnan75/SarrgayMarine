import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Ship, Anchor, ArrowRight, Zap, Cog, Users, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/animated-section';
import { Button } from '../ui/Button';

const services = [
    {
        num: '01',
        icon: Cog,
        title: "Generator & Auxiliary Engine",
        description: "Complete overhauling, load-testing, and scheduled maintenance of all marine diesel auxiliary systems.",
        tags: ["MAN B&W", "Yanmar", "Daihatsu", "Mitsubishi"],
    },
    {
        num: '02',
        icon: Wrench,
        title: "Main Engine Overhauls",
        description: "Piston pulling, liner honing, crankshaft alignment, and turbocharger servicing on 2-stroke and 4-stroke platforms.",
        tags: ["MAN B&W ME/MC", "Wärtsilä", "Sulzer"],
    },
    {
        num: '03',
        icon: Anchor,
        title: "Dry Dock Assistance",
        description: "End-to-end technical supervision, shipyard coordination, and specialized mechanical teams during dockings.",
        tags: ["Hull & Propeller", "Rudder Alignment", "Sea Chests"],
    },
    {
        num: '04',
        icon: Zap,
        title: "Mechanical & Electrical Systems",
        description: "High-pressure pumps, valve refurbishment, hydraulic cranes, switchboard automation, and motor rewinding.",
        tags: ["Pumps & Valves", "Hydraulics", "Automation"],
    },
    {
        num: '05',
        icon: Ship,
        title: "Emergency Repairs",
        description: "24/7 rapid mobilization teams equipped with fly-away diagnostic tooling for port and anchorage breakdowns.",
        tags: ["24/7 Rapid Response", "Fly-Away Tooling"],
    },
    {
        num: '06',
        icon: Users,
        title: "Sailing Teams & Riding Crew",
        description: "Fully certified STCW and CDC engineers deployed onboard for zero-downtime voyage repairs during transits.",
        tags: ["STCW / CDC Certified", "Zero Downtime"],
    },
];

const ServicesTeaser: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 border border-navy/10 text-navy text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                        <span>// CORE TECHNICAL CAPABILITIES</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy tracking-tight mb-5">
                        OUR{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-slate-800 to-slate-600">
                            SERVICES
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
                        Comprehensive maritime engineering solutions, from routine maintenance to complex engine overhauls, delivered with precision worldwide.
                    </p>
                </AnimatedSection>

                {/* 6 Grid Cards with Distinct Technical Tag Matrix */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <StaggerItem key={index} className="h-full">
                            <div className="group relative bg-white border border-border p-8 hover:border-navy/40 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-navy transition-colors duration-300" />

                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-none bg-navy/5 border border-navy/10 flex items-center justify-center p-2.5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                                            <service.icon className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-navy transition-colors">
                                            {service.num}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-navy transition-colors leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Technical OEM & Scope Badges */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {service.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="inline-flex items-center gap-1 text-[11px] font-mono bg-silver-light border border-silver px-2 py-0.5 text-navy/80"
                                            >
                                                <CheckCircle2 className="w-2.5 h-2.5 text-navy/60" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-xs font-heading font-semibold text-navy group-hover:translate-x-0.5 transition-transform">
                                    <span className="uppercase tracking-wider">Explore Service Scope</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-navy group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <AnimatedSection delay={0.2} className="text-center mt-14">
                    <Link to="/services">
                        <Button variant="outline" size="lg" className="gap-2 font-bold">
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ServicesTeaser;
