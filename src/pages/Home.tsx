import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Anchor, Globe, CheckCircle2 } from 'lucide-react';
import Hero from '../components/home/Hero';
import ServicesTeaser from '../components/home/ServicesTeaser';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { AnimatedSection } from '../components/ui/animated-section';
import { Button } from '../components/ui/Button';
import engineRoom from '../assets/engine-room.jpg';
import engineersTeam from '../assets/engineers-team.jpg';

const Home: React.FC = () => {
    return (
        <div className="bg-white">
            <Hero />

            <ServicesTeaser />

            {/* About Technical Authority Preview */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-silver-light to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedSection direction="left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 border border-navy/10 text-navy text-xs font-mono font-semibold tracking-wider uppercase mb-5">
                                <span>// TECHNICAL PARTNER</span>
                            </div>

                            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-6 leading-[1.08] tracking-tight">
                                Your Technical Partner in{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-slate-800 to-slate-600">
                                    Maritime Excellence.
                                </span>
                            </h2>

                            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed border-l-2 border-navy/30 pl-5 font-normal">
                                Led by a team of highly experienced Chief Engineers, we are a premier marine engineering company specializing in diesel engine overhauls, generator maintenance, and comprehensive mechanical and electrical services worldwide.
                            </p>

                            <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base max-w-xl">
                                Our robust technical leadership ensures high-precision solutions that exceed international standards, backed by 24/7 rapid response capability across global ports and dry docks.
                            </p>

                            <Link to="/about">
                                <Button variant="primary" className="group h-12 px-7 gap-2 shadow-lg">
                                    <span>Learn More About Us</span>
                                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection direction="right" className="relative group">
                            {/* Image Composition */}
                            <div className="relative bg-white p-2.5 rounded-none border border-border shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                                <img
                                    src={engineRoom}
                                    alt="Engine room technical operations"
                                    className="w-full object-cover aspect-[4/3] filter contrast-[1.03]"
                                />
                                {/* Floating Telemetry Card */}
                                <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-navy text-white p-5 md:p-7 rounded-none shadow-2xl border border-white/10 backdrop-blur-md max-w-[280px]">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                                            <Globe className="w-5 h-5" strokeWidth={1.75} />
                                        </div>
                                        <div>
                                            <p className="font-display text-xl md:text-2xl font-bold leading-none tracking-tight">Worldwide</p>
                                            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold mt-1.5">
                                                Rapid Deployment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Pattern Decor */}
                                <div className="absolute -top-4 -right-4 w-28 h-28 bg-grid-pattern opacity-40 z-0 pointer-events-none" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            {/* PRECISION DEFINED Section */}
            <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-navy text-white">
                {/* Background Layer with Engineers Photo */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={engineersTeam}
                        alt="Sarrgay Marine engineering team"
                        className="w-full h-full object-cover opacity-30 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/85" />
                    <div className="absolute inset-0 bg-grid-pattern-dark opacity-15" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection className="max-w-5xl mx-auto">
                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-none p-8 md:p-14 lg:p-16 overflow-hidden shadow-2xl">
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-14">
                                <div className="md:w-1/2 text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/10 text-white font-mono text-xs font-semibold tracking-wider uppercase mb-5 border border-white/20">
                                        <Anchor size={12} className="text-white" />
                                        <span>GLOBAL CLASS BENCHMARKS</span>
                                    </div>
                                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-[1.05]">
                                        Precision <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                                            Defined.
                                        </span>
                                    </h2>
                                    <div className="h-1 w-16 bg-white/40 mb-6" />
                                </div>

                                <div className="md:w-1/2 border-t md:border-l md:border-t-0 border-white/10 pt-6 md:pt-0 md:pl-10">
                                    <p className="text-lg md:text-xl text-slate-100 font-light leading-relaxed">
                                        Our global team of marine engineers delivers <span className="text-white font-semibold">uncompromising expertise</span> at every port, on every vessel.
                                    </p>
                                    <ul className="mt-8 space-y-3.5">
                                        {[
                                            "ISO 9001:2015 Audited Quality Control Protocols",
                                            "STCW & CDC Certified Sea-Going Technicians",
                                            "Comprehensive Alignment & Dynamometer Technical Reports"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* High-Impact Conversion CTA */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="bg-navy rounded-none p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl mx-auto max-w-5xl border border-white/10">
                            <div className="absolute inset-0 bg-diagonal-lines-dark opacity-15 pointer-events-none" />

                            <div className="relative z-10 max-w-3xl mx-auto">
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                                    Need Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Support?</span>
                                </h2>

                                <p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
                                    Our global team of marine engineers is available <span className="text-white font-semibold">24/7</span> to provide expert support for any vessel type, anywhere in the world.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href="https://wa.me/918009909888"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <Button
                                            variant="white"
                                            size="lg"
                                            className="w-full sm:w-auto gap-2.5 h-13 px-8 text-sm sm:text-base font-bold shadow-xl"
                                        >
                                            <MessageCircle className="w-4 h-4 text-navy" />
                                            <span>WhatsApp Us</span>
                                        </Button>
                                    </a>

                                    <Link to="/contact" className="w-full sm:w-auto">
                                        <Button
                                            variant="outline-white"
                                            size="lg"
                                            className="w-full sm:w-auto gap-2 h-13 px-8 text-sm sm:text-base font-semibold"
                                        >
                                            <span>Get a Quote</span>
                                            <ArrowRight className="w-4 h-4 text-white" />
                                        </Button>
                                    </Link>
                                </div>

                                <p className="mt-8 text-xs font-mono text-slate-300 uppercase tracking-widest">
                                    Response time under 5 minutes
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
