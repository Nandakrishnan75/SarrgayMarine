import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
// using logo from public/sarrgay-marine-logo.png

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Only the home page has a dark hero image, so only there do we use white text initially
    const isHomePage = location.pathname === '/';

    // When NOT on the home page, the navbar should always look "scrolled" (dark text, white bg)
    // because the page backgrounds are light
    const showDarkText = scrolled || !isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Fleet Experience', path: '/fleet' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-500 border-b",
                    showDarkText
                        ? "bg-white/95 backdrop-blur-xl border-border shadow-sm py-2 md:py-3"
                        : "bg-transparent border-transparent py-3 md:py-5"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                        <div className="relative overflow-hidden rounded">
                            <img
                                src={showDarkText ? "/sarrgay-marine-logo-scroll.png" : "/sarrgay-marine-logo.png"}
                                alt="SARRGAY MARINE"
                                className="h-10 sm:h-14 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="block">
                            <p className={cn(
                                "font-display text-sm sm:text-xl md:text-2xl font-bold leading-none tracking-wide transition-colors",
                                showDarkText ? "text-navy" : "text-white"
                            )}>
                                SARRGAY
                            </p>
                            <p className={cn(
                                "text-[10px] tracking-[0.25em] uppercase mt-0.5 transition-colors font-semibold",
                                showDarkText ? "text-navy/60" : "text-white/70"
                            )}>
                                MARINE
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 + 0.1, duration: 0.2 }}
                            >
                                <Link
                                    to={link.path}
                                    className={cn(
                                        "relative px-4 py-2 text-sm tracking-wide transition-colors",
                                        isActive(link.path)
                                            ? showDarkText ? "text-navy font-bold" : "text-white font-bold"
                                            : showDarkText
                                                ? "text-navy/70 hover:text-navy font-medium"
                                                : "text-white/80 hover:text-white font-medium"
                                    )}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className={cn(
                                                "absolute bottom-0 left-4 right-4 h-0.5",
                                                showDarkText ? "bg-navy" : "bg-white"
                                            )}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        className="hidden md:flex items-center gap-4"
                    >
                        <a
                            href="https://wa.me/918009909888"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="sm" className="gap-2 font-medium tracking-wide">
                                <Phone className="w-4 h-4" />
                                24/7 Hotline
                                <ArrowRight className="w-3 h-3" />
                            </Button>
                        </a>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors relative z-50",
                            isOpen ? "text-navy" : showDarkText ? "text-navy" : "text-white"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-border p-8 pt-24 shadow-2xl"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "block py-4 text-2xl font-display tracking-wide border-b border-border transition-colors",
                                                isActive(link.path)
                                                    ? "text-navy font-bold pl-2 border-l-2 border-l-navy border-b-0"
                                                    : "text-navy/80 hover:text-navy"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <a
                                    href="https://wa.me/918009909888"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="w-full gap-2 h-14 text-lg font-medium">
                                        <Phone className="w-5 h-5" />
                                        24/7 Hotline
                                    </Button>
                                </a>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
