import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Ship, Anchor, ArrowRight, Zap, Cog, Users } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/animated-section';
import { Button } from '../ui/Button';

const services = [
    {
        icon: Cog,
        title: "Generator & Auxiliary Engine",
        description: "Complete overhauling, troubleshooting and maintenance of all types of marine diesel generators and auxiliary machinery.",
    },
    {
        icon: Wrench,
        title: "Main Engine Overhauls",
        description: "Piston overhauling, cylinder liner honing, crankshaft inspection, and turbocharger servicing on MAN, Wärtsilä, and more.",
    },
    {
        icon: Anchor,
        title: "Dry Dock Assistance",
        description: "End-to-end supervision and technical teams for planned dry docking, including hull, propeller, and rudder work.",
    },
    {
        icon: Zap,
        title: "Mechanical & Electrical",
        description: "Pump overhauls, valve refurbishment, hydraulic systems, main switchboard maintenance, and motor rewinding.",
    },
    {
        icon: Ship,
        title: "Emergency Repairs",
        description: "24/7 rapid-response teams for breakdowns, emergency sailing teams, and temporary repair solutions at port or at sea.",
    },
    {
        icon: Users,
        title: "Sailing Teams & Riding Crew",
        description: "Skilled engineers deployed onboard for voyage-based engine maintenance, compliance support, and crew augmentation.",
    },
];

const ServicesTeaser: React.FC = () => {
    return (
        <section className="py-16 md:py-32 bg-white relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center mb-10 md:mb-16">
                    <p className="text-navy/70 text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
                        What We Do
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-4 md:mb-6">
                        OUR <span className="text-navy">SERVICES</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Comprehensive maritime engineering solutions, from routine maintenance
                        to complex overhauls, delivered with precision worldwide.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <StaggerItem key={index}>
                            <div className="group bg-white border border-border rounded-lg p-8 hover:border-navy/30 hover:shadow-xl transition-all duration-500 h-full">
                                <div className="w-14 h-14 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                                    <service.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-navy mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <AnimatedSection delay={0.3} className="text-center mt-12">
                    <Link to="/services">
                        <Button variant="outline" className="gap-2 font-bold">
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ServicesTeaser;
