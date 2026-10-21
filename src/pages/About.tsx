import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    MessageCircle,
    Shield,
    Globe,
    Target,
    CheckCircle,
    Award,
    Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from '../components/ui/animated-section';
import { Button } from '../components/ui/Button';
import engineRoom from '../assets/engine-room.jpg';
import engineersTeam from '../assets/engineers-team.jpg';

const values = [
    {
        icon: Shield,
        title: "Safety First",
        description: "All work complies with IMO regulations, classification society rules, and the highest safety standards.",
    },
    {
        icon: Target,
        title: "Precision Engineering",
        description: "Every repair is executed with meticulous attention to detail, following manufacturer OEM specifications.",
    },
    {
        icon: Globe,
        title: "Global Presence",
        description: "Operating across major ports worldwide with rapid mobilization and deployment capability.",
    },
    {
        icon: Award,
        title: "Quality Assured",
        description: "Certified processes, documented results, and post-service verification on every project.",
    },
];

const expertiseAreas = [
    "MAN B&W 2-Stroke & 4-Stroke Engines",
    "Wärtsilä / Sulzer Main Engines",
    "Yanmar & Mitsubishi Generators",
    "Alfa Laval Purifier Systems",
    "ABB & MHI Turbochargers",
    "Hydraulic Crane Systems",
    "Main Switchboard & Motor Rewinding",
    "Boiler Repairs & Maintenance",
];

const About: React.FC = () => {
    return (
        <div className="bg-background overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={engineersTeam}
                        alt="Engineering Team"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-90" />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm mx-auto backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span className="text-white font-bold text-xs tracking-widest uppercase shadow-black drop-shadow-md">
                                Who We Are
                            </span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-xl">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Authority</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            Sarrgay Marine is more than a repair company; we are a technical partner dedicated to the precision of your vessel's maintenance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                        <div className="lg:w-1/2">
                            <AnimatedSection direction="left">
                                <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full text-navy text-sm font-bold mb-6 border border-navy/10">
                                    <Target size={16} /> OUR MISSION
                                </div>
                                <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                    More Than a <span className="text-navy">Repair Company</span>
                                </h2>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    Sarrgay Marine is your trusted technical partner in maritime engineering.
                                    We specialize in diesel engine overhauls, generator maintenance, dry dock
                                    assistance, and comprehensive mechanical and electrical services for vessels
                                    of all types and classes.
                                </p>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    Led by experienced Chief Engineers, our certified team provides
                                    high-precision solutions that exceed international standards, backed
                                    by 24/7 global support and rapid mobilization capability.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/services" className="w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto gap-2 font-bold h-12 px-6">
                                            Our Services
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    <Link to="/contact" className="w-full sm:w-auto">
                                        <Button variant="outline" className="w-full sm:w-auto gap-2 font-bold h-12 px-6">
                                            Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <AnimatedSection direction="right">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 border border-border/50 group">
                                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={engineRoom}
                                        alt="Main Engine Piston"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 right-0 p-6 z-20">
                                        <div className="bg-navy/90 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl border border-white/10">
                                            <p className="font-display text-4xl font-bold text-primary mb-1">24/7</p>
                                            <p className="text-xs uppercase tracking-wide text-white/70 font-bold">
                                                Global Support
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engine Room Banner - Contained */}
            <section className="py-10">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatedSection className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={engineRoom}
                            alt="Industrial Maritime Setting"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy/60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="font-display text-3xl md:text-6xl font-bold text-white/30 tracking-widest uppercase text-center px-4">
                                Precision Defined
                            </h2>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
                        <AnimatedSection direction="left">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-navy text-sm font-bold mb-6 border border-border shadow-sm">
                                <CheckCircle size={16} /> TECHNICAL EXPERTISE
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                Specialized <span className="text-navy">Knowledge</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Our engineers hold comprehensive experience across all major
                                marine engine manufacturers and auxiliary systems, ensuring expert
                                service regardless of your fleet composition.
                            </p>
                            <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-navy/5 text-navy rounded-lg">
                                        <Users size={24} />
                                    </div>
                                    <h4 className="font-bold text-navy text-lg">OEM Compliant</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    We strictly adhere to manufacturer guidelines for all repairs and overhauls, ensuring warranty compliance and optimal performance.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {expertiseAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 bg-white rounded-xl p-5 border border-border hover:border-navy/30 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                                            <CheckCircle className="w-4 h-4 text-navy group-hover:text-white" />
                                        </div>
                                        <span className="text-navy font-bold text-sm leading-tight">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full text-navy text-sm font-bold mb-6 border border-navy/10">
                            <Shield size={16} /> CORE VALUES
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-navy tracking-tight mb-4 md:mb-6">
                            What <span className="text-navy">Drives Us</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Foundation of trust built on safety, precision, and global reliability.
                        </p>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <StaggerItem key={index}>
                                <div className="group h-full bg-secondary hover:bg-white rounded-2xl p-8 border border-transparent hover:border-navy/20 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6 group-hover:bg-navy group-hover:border-navy transition-all duration-300 shadow-sm">
                                        <value.icon className="w-8 h-8 text-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-navy mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatedSection className="bg-navy rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-navy/20">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 border border-white/20">
                                <MessageCircle size={16} />
                                <span>PARTNER WITH US</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready for World-Class Engineering?
                            </h2>
                            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed">
                                Experience maritime support defined by precision, speed, and safety.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/918009909888"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto bg-white text-navy hover:bg-slate-100 border-0 h-14 px-8 font-bold min-w-[200px]"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2" />
                                        WhatsApp Now
                                    </Button>
                                </a>
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 h-14 px-8 font-bold min-w-[200px]"
                                    >
                                        Contact Us
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default About;
