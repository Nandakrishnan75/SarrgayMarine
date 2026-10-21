import React from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    Linkedin,
    Instagram,
    Anchor,
    ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet Experience', path: '/fleet' },
    { name: 'Contact', path: '/contact' },
];

const services = [
    'Generator Maintenance',
    'Main Engine Overhauls',
    'Dry Dock Assistance',
    'Mechanical Repairs',
    'Electrical Services',
    'Riding Squads',
];

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/sarrgaymarine/' },
    { icon: Instagram, href: 'https://www.instagram.com/sarrgaymarine/' },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-navy text-white overflow-hidden border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-diagonal-lines-dark opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src="/sarrgay-marine-logo.png"
                                        alt="SARRGAY MARINE"
                                        className="h-20 md:h-24 w-auto object-contain relative z-10"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white leading-none">
                                        SARRGAY
                                    </span>
                                    <span className="text-[10px] tracking-[0.25em] text-white/60 font-semibold uppercase mt-1">
                                        MARINE
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <p className="text-white/60 leading-relaxed max-w-sm font-light">
                            Your trusted technical partner in maritime excellence. Delivering precision engineering solutions and expert management for the global shipping industry.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    <social.icon size={18} strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links (2 cols) */}
                    <div className="lg:col-span-2 lg:pl-8">
                        <h3 className="font-display text-lg font-medium text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-white/20"></span>
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300"
                                    >
                                        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-white" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display text-lg font-medium text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-white/20"></span>
                            Our Expertise
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-start gap-2 text-white/50 group hover:text-white transition-colors duration-300 cursor-default">
                                    <Anchor size={14} className="mt-1 text-white/40 group-hover:text-white transition-colors" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display text-lg font-medium text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-white/20"></span>
                            Contact Us
                        </h3>
                        <div className="space-y-6">
                            <div
                                className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-navy transition-all duration-300 text-white border border-white/10">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-white/40 uppercase tracking-wider font-medium mb-0.5">24/7 Hotline</p>
                                    <a href="tel:+918009909888" className="text-white hover:text-white/80 transition-colors font-display text-base sm:text-lg tracking-wide">
                                        +91 80099 09888
                                    </a>
                                    <a href="tel:+918009980888" className="text-white hover:text-white/80 transition-colors font-display text-base sm:text-lg tracking-wide">
                                        +91 80099 80888
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4 pl-2">
                                <a href="mailto:info@sarrgaymarine.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                                    <Mail size={16} className="text-white/50 group-hover:text-white transition-colors" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">info@sarrgaymarine.com</span>
                                </a>
                                <a href="mailto:service@sarrgaymarine.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                                    <Mail size={16} className="text-white/50 group-hover:text-white transition-colors" />
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">service@sarrgaymarine.com</span>
                                </a>
                                <div className="flex items-start gap-3 text-white/60 group">
                                    <MapPin size={16} className="text-white/50 mt-1 shrink-0 group-hover:text-white transition-colors" />
                                    <span className="text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                                        65/1599A, Mathilicherril, Shenoy Road, Kaloor, Kochi–682017
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/5 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
                        <p>
                            &copy; {new Date().getFullYear()} SARRGAY MARINE. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/10" />
                            <p className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                                <span className="text-white/50">Safety & Quality First Compliant</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
