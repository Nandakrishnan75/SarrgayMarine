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
        <>
            <Hero />

            <ServicesTeaser />

            {/* About Preview */}
            <section className="py-16 md:py-32 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                        <AnimatedSection direction="left">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-12 bg-navy" />
                                <span className="text-navy font-bold text-sm tracking-[0.2em] uppercase">
                                    About Us
                                </span>
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 md:mb-8 leading-[1.1]">
                                Your Technical Partner in{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-slate-800 to-slate-600">
                                    Maritime Excellence
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed border-l-4 border-navy/20 pl-6 font-medium">
                                Led by a team of highly experienced Chief Engineers, we are a premier marine engineering company
                                specializing in diesel engine overhauls, generator maintenance,
                                and comprehensive mechanical and electrical services worldwide.
                            </p>
                            <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
                                Our robust technical leadership ensures high-precision
                                solutions that exceed international standards, with 24/7 rapid
                                response capability across global ports.
                            </p>
                            <Link to="/about">
                                <Button className="group h-12 px-8 font-bold text-white bg-navy hover:bg-navy-light transition-colors duration-300 rounded-none flex items-center gap-2">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </AnimatedSection>

                        <AnimatedSection direction="right" className="relative group perspective-1000">
                            {/* Image Composition */}
                            <div className="relative transform bg-white p-2 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.01]">
                                <img
                                    src={engineRoom}
                                    alt="Engine room operations"
                                    className="rounded-xl w-full object-cover shadow-2xl relative z-10 aspect-[4/3]"
                                />
                                {/* Floating Stats Card */}
                                <div className="absolute bottom-2 left-2 md:-bottom-8 md:-left-12 bg-navy text-white p-3 md:p-8 rounded-xl shadow-2xl shadow-navy/30 z-20 border border-white/10 backdrop-blur-md">
                                    <div className="flex items-start gap-4 mb-2">
                                        <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                        <div>
                                            <p className="font-display text-2xl md:text-4xl font-bold leading-none">Global</p>
                                            <p className="text-xs uppercase tracking-wider text-slate-300 font-medium mt-1">
                                                Reach & Support
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative Pattern */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-diagonal-lines opacity-20 z-0" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            {/* PRECISION DEFINED Section */}
            <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden bg-navy selection:bg-white selection:text-navy">
                {/* Background Layer */}
                <div className="absolute inset-0">
                    <img
                        src={engineersTeam}
                        alt="Sarrgay Marine engineering team"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="max-w-5xl mx-auto">
                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-16 lg:p-20 overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                            {/* Glow Effect */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-colors duration-700" />

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-6 border border-white/20">
                                        <Anchor size={12} />
                                        <span>Global Standards</span>
                                    </div>
                                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-[1.1]">
                                        Precision <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Defined.</span>
                                    </h2>
                                    <div className="h-1 w-20 bg-white/40 rounded-full mb-8" />
                                </div>

                                <div className="md:w-1/2 border-t md:border-l md:border-t-0 border-white/10 pt-6 md:pt-0 md:pl-12">
                                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                                        Our global team of marine engineers delivers <span className="text-white font-medium">uncompromising expertise</span> at every port, on every vessel.
                                    </p>
                                    <ul className="mt-8 space-y-3">
                                        {[
                                            "ISO 9001:2015 Certified Processes",
                                            "24/7 Rapid Response Teams",
                                            "Comprehensive Technical Reports"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
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

            {/* CTA Section */}
            <section className="py-16 md:py-32 bg-white relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-slate-100 rounded-full blur-3xl opacity-60" />
                    <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-slate-100 rounded-full blur-[80px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection>
                        <div className="bg-navy rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-navy/20 mx-auto max-w-6xl group">
                            {/* Inner Background Pattern */}
                            <div className="absolute inset-0 bg-diagonal-lines-dark opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

                            {/* Content */}
                            <div className="relative z-10 max-w-4xl mx-auto">
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight">
                                    Need Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Support?</span>
                                </h2>

                                <p className="text-base md:text-xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                    Our global team of marine engineers is available <span className="text-white font-medium">24/7</span> to provide expert support for any vessel type, anywhere in the world.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                    <a
                                        href="https://wa.me/918009909888"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <Button
                                            size="lg"
                                            className="w-full sm:w-auto gap-3 h-14 px-8 text-base md:text-lg font-bold bg-white text-navy hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20 border-0"
                                        >
                                            <MessageCircle className="w-6 h-6" />
                                            WhatsApp Us
                                        </Button>
                                    </a>

                                    <Link to="/contact" className="w-full sm:w-auto">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full sm:w-auto gap-3 h-14 px-8 text-base md:text-lg font-bold text-white border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                                        >
                                            Get a Quote
                                            <ArrowRight className="w-6 h-6" />
                                        </Button>
                                    </Link>
                                </div>
                                <p className="mt-8 text-sm text-white/30 uppercase tracking-widest font-medium">
                                    Response time under 5 minutes
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};

export default Home;
