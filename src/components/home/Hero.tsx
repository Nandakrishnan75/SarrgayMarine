import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import heroShip from '../../assets/hero-ship.jpg';
import { AnimatedSection } from '../ui/animated-section';

const stats = [
    { code: 'ENG-TEAM', value: '100+', label: 'Chief & Marine Engineers' },
    { code: 'GLOBAL-OPS', value: '50+', label: 'Ports & Countries Served' },
    { code: 'RESPONSE', value: '24/7', label: 'Worldwide Rapid Support' },
    { code: 'STANDARDS', value: '100%', label: 'Classification Compliance' },
];

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-between bg-navy overflow-hidden">
            {/* Background Image with Layered Oceanic Film */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroShip}
                    alt="Maritime vessel at sea"
                    className="w-full h-full object-cover object-center filter brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
            </div>

            {/* Main Hero Storytelling Block */}
            <div className="flex-1 flex flex-col justify-end md:justify-center relative z-10 pt-28 md:pt-36 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    {/* Live Telemetry Pill */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-none bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-white font-mono text-xs font-semibold tracking-wider uppercase">
                            Technical Partners, Not Just Fixers
                        </span>
                        <span className="hidden sm:inline-block text-white/30">|</span>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-white/90 font-mono text-[11px]">
                            <ShieldCheck className="w-3.5 h-3.5 text-white" />
                            ABS · DNV · LLOYD'S REGISTER COMPLIANT
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-display text-[2.25rem] sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.0] text-white tracking-tight drop-shadow-xl">
                        MASTERING{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                            MARITIME
                        </span>
                        <br />
                        PRECISION.
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mb-8 md:mb-10 leading-relaxed font-normal border-l-2 border-white/40 pl-4 md:pl-6 drop-shadow-md">
                        Providing high-precision mechanical and electrical solutions that exceed international maritime standards. From main engine overhauls to zero-impact maintenance at sea.
                    </p>

                    {/* Action Hub */}
                    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                        <Link to="/services" className="w-full sm:w-auto">
                            <Button
                                variant="white"
                                size="lg"
                                className="w-full sm:w-auto h-12 sm:h-14 px-8 text-sm sm:text-base font-bold shadow-2xl group"
                            >
                                Explore Services
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-navy" />
                            </Button>
                        </Link>

                        <a
                            href="https://wa.me/918009909888"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant="outline-white"
                                size="lg"
                                className="w-full sm:w-auto h-12 sm:h-14 px-8 text-sm sm:text-base font-semibold gap-2.5"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp Us</span>
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Telemetry Stats Bar */}
            <div className="relative z-10 border-t border-white/10 bg-navy/80 backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={index} delay={index * 0.08} className="py-4 md:py-8 px-2 md:px-6">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-mono text-[10px] text-slate-300 font-semibold tracking-widest uppercase">
                                        {stat.code}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                </div>
                                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-xs sm:text-sm text-slate-200 font-medium tracking-wide mt-0.5">
                                    {stat.label}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
