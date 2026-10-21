import React from 'react';
import { Link } from 'react-router-dom';
import {
    Cog,
    Wrench,
    Anchor,
    Zap,
    ArrowRight,
    MessageCircle,
    CheckCircle,
    LifeBuoy,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
    AnimatedSection,
} from '../components/ui/animated-section';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import engineersTeam from '../assets/engineers-team.jpg';
import engineRoom from '../assets/engine-room.jpg';

const serviceList = [
    {
        icon: Cog,
        title: "Generator & Auxiliary Engine",
        description: "Comprehensive power solutions ensuring your vessel never goes dark. We specialize in the heart of your ship's electrical system.",
        image: engineRoom,
        items: [
            "Preventive and corrective maintenance",
            "Troubleshooting & fault diagnosis",
            "Load testing and performance optimization",
            "Spare parts supply and installation",
            "Engine re build / overhauls",
            "Frame and Crankshaft renewals",
        ],
    },
    {
        icon: Anchor,
        title: "Main Engine Overhauls",
        description: "Expert care for your vessel's propulsion. From routine maintenance to complex overhauls, we ensure peak performance.",
        image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/7d/ee/35/fe/68/v1_E10/E105M92L.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=ff1e651f051c86fca93b59130e2ca410ed21b770a4b13161b577cd3bf4b7dcf1",
        items: [
            "Complete and partial overhauls",
            "Crankshaft, piston, liner, and bearing works",
            "Fuel injection system servicing",
            "Alignment and performance testing",
        ],
    },
    {
        icon: Wrench,
        title: "Dry Dock Assistance",
        description: "Strategic support during critical docking periods. We manage the technical heavy lifting so you can focus on operations.",
        image: "https://res.cloudinary.com/dlxpaurzd/image/upload/v1772167056/unwatermarked_dry_dock_y4teru.png",
        items: [
            "Pre-dock inspection and planning",
            "On-site technical supervision",
            "Machinery overhauls during dry dock",
            "Post-dock commissioning and trials",
        ],
    },
    {
        icon: Zap,
        title: "Mechanical & Electrical",
        description: "Holistic systems engineering. Integrating mechanical robustness with advanced electrical automation.",
        image: engineersTeam,
        items: [
            "Pumps, compressors, and heat exchangers",
            "Valves and piping systems",
            "Electrical motors, switchboards, and automation",
            "Emergency repairs and breakdown support",
        ],
    },
];

const Services: React.FC = () => {
    return (
        <div className="bg-background overflow-x-hidden">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dlxpaurzd/image/upload/v1771311088/a-large-tanker-cargo-ship-is-being-renovated-and-p-2026-01-06-09-23-56-utc_ze4mj3.jpg"
                        alt="Service Hero Background"
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
                                Global Maritime Expertise
                            </span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-xl">
                            Marine <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Engineering</span><br className="hidden md:block" /> Solutions
                        </h1>
                        <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            Delivering precision engineering, technical management, and riding squad services to the global maritime industry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:gap-24">
                        {serviceList.map((service, idx) => (
                            <AnimatedSection key={idx} className="group">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">
                                    {/* Image Side - Consistent styling, refined look */}
                                    <div className={cn(
                                        "w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/5",
                                        "order-1" // Keep image always first on mobile and desktop for consistent layout
                                    )}>
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 order-2">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-navy/5 text-navy rounded-xl">
                                                <service.icon size={32} strokeWidth={1.5} />
                                            </div>
                                            <h2 className="font-display text-2xl md:text-4xl font-bold text-navy">
                                                {service.title}
                                            </h2>
                                        </div>
                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50 hover:border-navy/20 transition-colors">
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {service.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-3 text-navy/80 text-sm md:text-base items-start group/item"
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-navy shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                                        <span className="font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section - Riding Teams */}
            <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                        <div className="lg:w-1/2">
                            <AnimatedSection direction="left">
                                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm font-bold mb-6 backdrop-blur-sm border border-white/20">
                                    <LifeBuoy size={16} />
                                    <span>ON-VOYAGE REPAIRS</span>
                                </div>
                                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                                    Zero Downtime <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Maintenance</span>
                                </h2>
                                <p className="text-base md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed">
                                    Our specialized sailing teams perform critical maintenance while your vessel remains operational, ensuring you never miss a charter.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white border border-white/20">
                                            <span className="font-display font-bold text-xl">01</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl mb-2">Qualified Personnel</h4>
                                            <p className="text-white/60">
                                                All technicians are fully certified with valid CDC and STCW seafarer documents, ready for rapid deployment.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white border border-white/20">
                                            <span className="font-display font-bold text-xl">02</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl mb-2">Sea-Going Project Management</h4>
                                            <p className="text-white/60">
                                                Experienced supervisors who can organize, plan, and execute complex machinery overhauls during transit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <AnimatedSection direction="right" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-navy/30 to-slate-800/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                    <img
                                        src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/5b/6b/2a/20/0b/v1_E10/E10A3KQF.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=b642db68400733c16e076cb0fb37847fb9d1481d09f3d9270001d6333406b620"
                                        alt="Engineers working"
                                        className="relative w-full rounded-2xl shadow-2xl border border-white/10"
                                    />
                                    {/* Floating Stats Card */}
                                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
                                        <p className="text-navy font-bold text-lg mb-1">Global Reach</p>
                                        <p className="text-sm text-muted-foreground">Deploying teams to any port worldwide.</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-secondary">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatedSection className="bg-navy rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-navy/20">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 border border-white/20">
                                <MessageCircle size={16} />
                                <span>LET'S DISCUSS YOUR FLEET</span>
                            </div>
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Optimize Your Operations?
                            </h2>
                            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed">
                                Get a competitive quote for your next dry docking or riding squad requirement within 24 hours.
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
                                        Request Quote
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

export default Services;

