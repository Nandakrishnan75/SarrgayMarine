import React from 'react';
import { Link } from 'react-router-dom';
import {
    CheckCircle,
    Wrench,
    Phone,
    MessageCircle,
    ArrowRight,
    Anchor,
    ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
    AnimatedSection,
    StaggerContainer,
    StaggerItem,
} from '../components/ui/animated-section';
import { Button } from '../components/ui/Button';
import heroShip from '../assets/hero-ship.jpg';

import engineRoom from '../assets/engine-room.jpg';

const vesselTypes = [
    { name: "VLCC Tankers", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/bc/59/bf/27/37/v1_E10/E101BW7I.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=71676c7f22bbaa3e58efe1f9751d8ccdcae7faa17cf53738666461ffa6c97b87" },
    { name: "Gas / LNG Carriers", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/aa/c1/39/a1/3b/v1_E10/E1030JIK.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=d757814b5959617c4ebf9f983a857074f043700237b56c901f3d6d9cc1b9aa48" },
    { name: "Chemical Tankers", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/b3/5d/1b/df/ce/v1_E11/E11MPDV.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=cb0c183f100970f6e3f2ed160112451e24a6207143111b1e9b1c20967ee2f3c4" },
    { name: "Bulk Carriers", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/1da902e5-8bb7-4bc2-883f-e253ca487511/c3bab343-b20c-4dcc-a194-b515a9321310.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=8d5f0a9ac4dbce0c9e56255cde33f041b2dd5f415311f067ac07f9949e2074dd" },
    { name: "Container Vessels", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/3c/02/bf/39/6e/v1_E10/E101BWE7.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=f52623b2ee44e45d10c482fc5ea82465f5b92250685999cfffccbbafb6a94387" },
    { name: "Ro-Ro Vessels", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/1da902e5-8bb7-4bc2-883f-e253ca487511/8eef44f7-9972-4f3f-b65b-2d7f5e255f46.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=5ed506e2e0ae42995935c74cf42bdf5ba14a74f9616639362d6413d5e47122f2" },
    { name: "Offshore Support Vessels", image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/81/d5/41/e3/4d/v1_E10/E103N6KP.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=b8b49298e8c29e295de0ac2cc4a1d7381a07eef8b7d6908cece5a441c85f4961" },
];

const standards = ["ABS", "DNV", "LR", "BV", "NK", "KR"];

const qualityPoints = [
    "Rigorous testing protocols for all overhauled auxiliary machinery",
    "Documentation and certification for all completed work",
    "Adherence to manufacturer specifications and guidelines",
    "Post-service performance verification and testing",
    "Detailed service reports and maintenance records",
];

const Fleet: React.FC = () => {
    return (
        <div className="bg-background overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroShip}
                        alt="Fleet Support Hero"
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
                                Global Reach
                            </span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-xl">
                            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Fleet Support</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            Specialized support for complex fleets. We handle logistics, visa requirements, and tool clearance for rapid global deployment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vessel Types Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatedSection className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-navy/5 px-4 py-2 rounded-full text-navy text-sm font-bold mb-6 border border-navy/10">
                            <Anchor size={16} /> VESSELS SERVED
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
                            Comprehensive <span className="text-navy">Coverage</span>
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vesselTypes.map((type, idx) => (
                            <StaggerItem key={idx} className="flex flex-col">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-navy" />
                                    <h4 className="text-navy font-bold text-xl md:text-2xl font-display">
                                        {type.name}
                                    </h4>
                                </div>
                                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg shadow-navy/5">
                                    <img
                                        src={type.image}
                                        alt={type.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Class Compliance + Quality */}
            <section className="py-16 md:py-24 bg-secondary overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <AnimatedSection direction="left">
                            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary text-sm font-bold mb-6 border border-primary/10 shadow-sm">
                                <ShieldCheck size={16} /> COMPLIANCE
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                Class <span className="text-primary">Approved</span>
                            </h2>
                            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                                All repairs and overhauls meet the rigorous standards of major
                                classification societies. We ensure quality control through strict
                                testing protocols.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {standards.map((std, index) => (
                                    <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                                        <CheckCircle size={18} className="text-primary group-hover:scale-110 transition-transform" />
                                        <span className="text-navy font-bold group-hover:text-primary transition-colors">{std}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right">
                            <motion.div key="compliance-image" whileHover={{ y: -10 }} className="relative group rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square shadow-xl cursor-pointer">
                                <img
                                    src={engineRoom}
                                    alt="Quality Control Inspection"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-navy/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 text-center rounded-2xl shadow-xl">
                                        <h4 className="text-white font-bold text-6xl font-display mb-2 drop-shadow-lg">100%</h4>
                                        <p className="text-white font-bold text-sm uppercase tracking-[0.2em]">Compliance Rate</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Quality Control List */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <AnimatedSection direction="right" className="lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold mb-6 border border-primary/20">
                                <CheckCircle size={16} /> QUALITY ASSURANCE
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                                Rigorous <span className="text-primary">Protocols</span>
                            </h2>
                            <div className="space-y-6">
                                {qualityPoints.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-300">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <span className="text-navy text-lg font-medium leading-relaxed">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" className="lg:order-1">
                            <div className="bg-navy text-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 shadow-2xl shadow-navy/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 relative z-10">
                                    Technical Mobilization <br />
                                    <span className="text-primary">& Global Response</span>
                                </h3>

                                <div className="space-y-8 relative z-10">
                                    {[
                                        {
                                            icon: Wrench,
                                            title: "Fly-Away Tooling",
                                            desc: "Specialized portable kits for in-situ machining, hydraulic testing, and diagnostics.",
                                        },
                                        {
                                            icon: Phone,
                                            title: "24/7 Technical Hotline",
                                            desc: "Instant access to senior engineers for emergency consultation.",
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                                <item.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-display text-xl font-bold text-white mb-2">{item.title}</h4>
                                                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatedSection className="bg-navy rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden shadow-2xl shadow-navy/20">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 border border-white/20">
                                <MessageCircle size={16} />
                                <span>SUPPORT FOR YOUR FLEET</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Optimize Your Operations?
                            </h2>
                            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed">
                                Our global team of marine engineers is ready to provide expert support for any vessel type.
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
                                        Get a Quote
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

export default Fleet;
