import React from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Phone,
    Mail,
    Linkedin,
    Instagram,
    ChevronRight,
    ShieldCheck,
    CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SarrgayLogo from '../shared/SarrgayLogo';

const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet Experience', path: '/fleet' },
    { name: 'Contact Us', path: '/contact' },
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
        <footer className="relative bg-navy text-white overflow-hidden border-t border-white/10">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-diagonal-lines-dark opacity-25 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

            {/* Main Footer Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            <SarrgayLogo variant="light" size="md" />
                        </Link>

                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-normal">
                            Your trusted technical partner in maritime excellence. Delivering precision engineering solutions and expert management for the global shipping industry.
                        </p>

                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/15 transition-all duration-200"
                                >
                                    <social.icon size={16} strokeWidth={1.5} />
                                </motion.a>
                            ))}
                            <div className="ml-2 px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                                ISO 9001:2015
                            </div>
                        </div>
                    </div>

                    {/* Quick Navigation (2 cols) */}
                    <div className="lg:col-span-2 lg:pl-4">
                        <h3 className="font-display text-base font-bold text-white mb-5 flex items-center gap-2">
                            <span className="w-6 h-px bg-white/30" />
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight size={13} className="text-white opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display text-base font-bold text-white mb-5 flex items-center gap-2">
                            <span className="w-6 h-px bg-white/30" />
                            Our Expertise
                        </h3>
                        <ul className="space-y-2.5">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-slate-300 group cursor-default">
                                    <CheckCircle2 size={13} className="mt-0.5 text-slate-400 group-hover:text-white shrink-0 transition-colors" />
                                    <span className="group-hover:text-white transition-colors">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Hub (3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display text-base font-bold text-white mb-5 flex items-center gap-2">
                            <span className="w-6 h-px bg-white/30" />
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <Phone size={13} className="text-white" />
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    <p className="text-[10px] text-slate-300 uppercase tracking-wider font-mono font-semibold">24/7 Hotline</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+918009909888" className="text-white hover:text-slate-200 transition-colors font-mono text-sm tracking-wide font-bold">
                                        +91 80099 09888
                                    </a>
                                    <a href="tel:+918009980888" className="text-white hover:text-slate-200 transition-colors font-mono text-sm tracking-wide font-bold">
                                        +91 80099 80888
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-2 text-xs text-slate-300">
                                <a href="mailto:info@sarrgaymarine.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail size={13} className="text-slate-400 shrink-0" />
                                    <span>info@sarrgaymarine.com</span>
                                </a>
                                <a href="mailto:service@sarrgaymarine.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail size={13} className="text-slate-400 shrink-0" />
                                    <span>service@sarrgaymarine.com</span>
                                </a>
                                <div className="flex items-start gap-2 pt-1">
                                    <MapPin size={13} className="text-slate-400 shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">
                                        65/1599A, Mathilicherril, Shenoy Road, Kaloor, Kochi–682017
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar with Compliance Tags */}
            <div className="relative z-10 border-t border-white/10 bg-navy-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
                        <p>
                            &copy; {new Date().getFullYear()} SARRGAY MARINE. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-[11px]">
                            <span className="flex items-center gap-1.5 text-slate-300">
                                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                                <span>ABS · DNV · LLOYD'S REGISTER · BV COMPLIANT</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
