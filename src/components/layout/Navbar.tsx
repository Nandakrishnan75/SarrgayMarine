import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import SarrgayLogo from '../shared/SarrgayLogo';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Only the home page has a dark hero image initially
    const isHomePage = location.pathname === '/';
    const showDarkText = scrolled || !isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
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
                    "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                    showDarkText
                        ? "bg-white/95 backdrop-blur-xl border-border shadow-sm py-3"
                        : "bg-navy/70 backdrop-blur-md border-white/10 py-3.5"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Brand using the new Vector Logo */}
                    <Link to="/" className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy">
                        <SarrgayLogo
                            variant={showDarkText ? 'dark' : 'light'}
                            size="md"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-heading tracking-wide transition-colors",
                                    isActive(link.path)
                                        ? showDarkText
                                            ? "text-navy font-bold"
                                            : "text-white font-bold"
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
                                            "absolute bottom-0 left-3 right-3 h-0.5",
                                            showDarkText ? "bg-navy" : "bg-white"
                                        )}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA & Status */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className={cn(
                            "hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-none border text-[11px] font-mono",
                            showDarkText
                                ? "bg-silver-light border-silver text-navy"
                                : "bg-white/10 border-white/15 text-white"
                        )}>
                            <span className={cn(
                                "w-2 h-2 rounded-full",
                                showDarkText ? "bg-navy animate-pulse" : "bg-white animate-pulse"
                            )} />
                            <span>24/7 RAPID SUPPORT</span>
                        </div>

                        <a
                            href="https://wa.me/918009909888"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="sm"
                                variant={showDarkText ? "primary" : "white"}
                                className="gap-2 text-xs font-bold tracking-wider"
                            >
                                <Phone className="w-3.5 h-3.5" />
                                24/7 Hotline
                                <ArrowRight className="w-3 h-3" />
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors relative z-50",
                            isOpen ? "text-navy" : showDarkText ? "text-navy" : "text-white"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-navy/60 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer Panel */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-border p-8 pt-24 shadow-2xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6 pb-4 border-b border-border">
                                    <SarrgayLogo variant="dark" size="sm" />
                                </div>

                                <div className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "block py-3.5 text-lg font-display tracking-tight transition-colors border-b border-border/40",
                                                isActive(link.path)
                                                    ? "text-navy font-bold pl-2 border-l-2 border-l-navy"
                                                    : "text-navy/70 hover:text-navy"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border space-y-3">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                                    <ShieldCheck className="w-4 h-4 text-navy" />
                                    <span>ABS · DNV · LR Class Approved</span>
                                </div>
                                <a
                                    href="https://wa.me/918009909888"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button variant="primary" className="w-full gap-2 h-12 text-sm font-bold">
                                        <Phone className="w-4 h-4" />
                                        24/7 Hotline
                                    </Button>
                                </a>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
