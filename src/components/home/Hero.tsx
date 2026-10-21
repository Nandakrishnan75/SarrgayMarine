import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import heroShip from '../../assets/hero-ship.jpg';
import { AnimatedSection } from '../ui/animated-section';

const stats = [
    { value: '100+', label: 'Expert Engineers' },
    { value: '50+', label: 'Countries Served' },
    { value: '24/7', label: 'Global Support' },
    { value: '100%', label: 'Quality Assured' },
];

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-between bg-navy overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroShip}
                    alt="Maritime vessel at sea"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
            </div>

            {/* Main Content - vertically centered */}
            <div className="flex-1 flex flex-col justify-end md:justify-center relative z-10 pt-24 md:pt-28 pb-6 md:pb-12 px-4 sm:px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="h-[2px] w-8 md:w-12 bg-white/70" />
                        <span className="text-white/90 font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase drop-shadow-sm">
                            Technical Partners, Not Just Fixers
                        </span>
                    </div>

                    <h1 className="font-display text-[2rem] sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 leading-[1.05] text-white drop-shadow-lg">
                        MASTERING{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                            MARITIME
                        </span>
                        <br />
                        PRECISION
                    </h1>

                    <p className="text-sm sm:text-base md:text-xl text-slate-200 max-w-2xl mb-6 md:mb-10 leading-relaxed font-light border-l-2 border-white/30 pl-3 md:pl-6 drop-shadow-md">
                        Providing high-precision mechanical and electrical solutions that
                        exceed international maritime standards. From main engine overhauls
                        to zero-impact maintenance at sea.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <Link to="/services">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-11 sm:h-14 px-5 sm:px-8 text-sm sm:text-lg group bg-white text-navy hover:bg-slate-100 font-bold border-none shadow-xl shadow-black/30"
                            >
                                Explore Services
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-500 text-navy" />
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/918009909888"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto h-11 sm:h-14 px-5 sm:px-8 text-sm sm:text-lg border-white/40 text-white hover:bg-white hover:text-navy gap-2 backdrop-blur-sm"
                            >
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                WhatsApp Us
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Stats Bar - pinned to bottom */}
            <div className="relative z-10 border-t border-white/10 bg-navy/60 backdrop-blur-md">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-b border-white/10 md:border-b-0">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={index} delay={index * 0.1} className="py-3 md:py-10 text-center">
                                <p className="font-display text-lg sm:text-2xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</p>
                                <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold">{stat.label}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
