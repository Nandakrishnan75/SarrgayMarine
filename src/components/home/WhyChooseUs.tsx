import React from 'react';
import { Shield, Globe, Clock, Award, Users, Headphones } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/animated-section';

const reasons = [
    {
        icon: Shield,
        title: "Class Approved",
        description: "All work meets international classification society standards — ABS, DNV, Lloyd's Register, and more.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Engineering teams deployed worldwide — ports across the Middle East, Asia, Europe, and beyond.",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock emergency support with rapid mobilization for urgent on-site interventions.",
    },
    {
        icon: Award,
        title: "Certified Engineers",
        description: "Experienced, certified marine engineers specialized in all major engine types and vessel classes.",
    },
    {
        icon: Users,
        title: "Dedicated Teams",
        description: "Custom-assembled teams for your specific project scope, vessel type, and timeline.",
    },
    {
        icon: Headphones,
        title: "Technical Hotline",
        description: "Instant access to senior engineers for remote consultation, troubleshooting, and guidance.",
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-16 md:py-32 bg-secondary relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center mb-10 md:mb-16">
                    <p className="text-navy/70 text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
                        Why Sarrgay Marine
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-4 md:mb-6">
                        THE SARRGAY <span className="text-navy">ADVANTAGE</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Industry-leading expertise, global reach, and unwavering commitment
                        to maritime safety and quality.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <StaggerItem key={index}>
                            <div className="group text-center p-8 bg-white border border-border rounded-lg hover:shadow-xl hover:border-navy/30 transition-all duration-500">
                                <div className="w-16 h-16 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-navy group-hover:scale-105 transition-all duration-300">
                                    <reason.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-navy mb-3">{reason.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default WhyChooseUs;
