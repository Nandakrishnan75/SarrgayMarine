import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Send,
    ArrowRight,
    Clock,
    Globe,
    Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const serviceOptions = [
    "Generator & Auxiliary Engine Maintenance",
    "Main Engine Overhauls",
    "Dry Dock Assistance",
    "Mechanical & Electrical Services",
    "Sailing Teams & Riding Crew",
    "Emergency Repairs",
    "Other",
];

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+91 80099 09888\n+91 80099 80888",
        subtext: "24/7 Emergency Support",
        href: "tel:+918009909888",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@sarrgaymarine.com\nservice@sarrgaymarine.com",
        subtext: "Send us your inquiry",
        href: "mailto:info@sarrgaymarine.com",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Kochi, India",
        subtext: "Headquarters",
        href: null,
    },
];

type SubmitStatus = 'idle' | 'success' | 'error';

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        vesselName: '',
        serviceRequired: '',
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const payload = {
                access_key: '9f152561-e793-4709-bfc4-69dba81639a6', // Replace after getting key from web3forms.com
                subject: `New Inquiry from ${formData.name} — ${formData.serviceRequired || 'General'}`,
                from_name: 'Sarrgay Marine Website',
                replyto: formData.email,
                name: formData.name,
                email: formData.email,
                phone: formData.phone || 'Not provided',
                company: formData.company || 'Not provided',
                vessel_name: formData.vesselName || 'Not provided',
                service_required: formData.serviceRequired,
                message: formData.message,
            };

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    vesselName: '',
                    serviceRequired: '',
                    message: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://res.cloudinary.com/dlxpaurzd/image/upload/v1771310605/ship_r3dnoc.jpg"
                        alt="Cargo ship at port"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/80" />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 border border-white/20">
                            <MessageCircle size={16} />
                            Contact Us
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-xl">
                            Let's Start a<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Conversation</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            Whether you need emergency repairs, routine maintenance, or technical consultation,
                            our team is ready to assist you 24/7.
                        </p>
                    </motion.div>
                </div>


            </section>

            {/* Contact Cards */}
            <section className="relative -mt-12 z-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary border border-border hover:border-navy/30 hover:shadow-xl transition-all duration-500"
                                    >
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-300 text-navy border border-navy/10">
                                            <item.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                                        </div>
                                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
                                        <p className="text-xl font-bold text-navy mb-1 group-hover:text-navy transition-colors whitespace-pre-line">{item.value}</p>
                                        <p className="text-sm text-muted-foreground">{item.subtext}</p>
                                    </a>
                                ) : (
                                    <div className="group flex flex-col items-center text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary border border-border h-full">
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-navy/5 flex items-center justify-center mb-4 md:mb-6 text-navy border border-navy/10">
                                            <item.icon className="w-6 h-6 text-navy" strokeWidth={1.5} />
                                        </div>
                                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
                                        <p className="text-xl font-bold text-navy mb-1 whitespace-pre-line">{item.value}</p>
                                        <p className="text-sm text-muted-foreground">{item.subtext}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12">
                        {/* Left Side - Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                                    Visit Our Office
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Our headquarters in Kochi serves as the central hub for all marine engineering
                                    operations across the Indian subcontinent and beyond.
                                </p>
                            </motion.div>

                            {/* Address Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="bg-secondary rounded-2xl p-8"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-border">
                                        <MapPin className="w-5 h-5 text-navy" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy text-lg mb-1 tracking-normal" style={{ wordSpacing: '0.15em' }}>Sarrgay Marine</h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                            65/1599A, Mathilicherril<br />
                                            Shenoy Road, Kaloor<br />
                                            Kochi–682017<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-border pt-6 space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Clock className="w-4 h-4 text-navy" />
                                        <span className="text-navy font-medium">Available 24/7 for emergencies</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Globe className="w-4 h-4 text-navy" />
                                        <span className="text-navy font-medium">Global service coverage</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Shield className="w-4 h-4 text-navy" />
                                        <span className="text-navy font-medium">Certified marine engineers</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* WhatsApp CTA */}
                            <motion.a
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                href="https://wa.me/918009909888"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 bg-navy text-white p-6 rounded-2xl hover:bg-navy-light transition-all duration-500 group shadow-lg shadow-navy/20 border border-white/10"
                            >
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                    <MessageCircle className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl">Chat on WhatsApp</h3>
                                    <p className="text-white/80 text-sm">Get instant response</p>
                                </div>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Right Side - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-2xl border border-border shadow-xl shadow-navy/5 overflow-hidden">
                                {/* Form Header */}
                                <div className="bg-secondary px-8 py-6 border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-display text-2xl font-bold text-navy">Send Inquiry</h3>
                                            <p className="text-muted-foreground text-sm mt-1">Fill out the form and we'll respond within 24 hours</p>
                                        </div>
                                        <div className="hidden sm:flex items-center gap-2 bg-navy/5 text-navy px-4 py-2 rounded-full text-sm font-semibold border border-navy/10">
                                            <Clock size={14} />
                                            &lt; 24h Response
                                        </div>
                                    </div>
                                </div>

                                {/* Form Body */}
                                <div className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-navy mb-2">
                                                    Full Name <span className="text-navy font-bold">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="John Smith"
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-secondary border border-border rounded-xl text-navy text-sm md:text-base placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-navy mb-2">
                                                    Email Address <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="john@company.com"
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-secondary border border-border rounded-xl text-navy text-sm md:text-base placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-navy mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+1 234 567 8900"
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-secondary border border-border rounded-xl text-navy text-sm md:text-base placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-navy mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder="Your Company Ltd."
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-secondary border border-border rounded-xl text-navy text-sm md:text-base placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-navy mb-2">
                                                    Vessel Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="vesselName"
                                                    value={formData.vesselName}
                                                    onChange={handleInputChange}
                                                    placeholder="MV Vessel Name"
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-secondary border border-border rounded-xl text-navy text-sm md:text-base placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-navy mb-2">
                                                    Service Required <span className="text-navy font-bold">*</span>
                                                </label>
                                                <select
                                                    name="serviceRequired"
                                                    value={formData.serviceRequired}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-secondary border border-border rounded-xl text-navy text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all appearance-none"
                                                    style={{
                                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'right 12px center',
                                                        backgroundSize: '20px',
                                                        paddingRight: '40px'
                                                    }}
                                                >
                                                    <option value="">Select a service</option>
                                                    {serviceOptions.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-navy mb-2">
                                                Your Message <span className="text-navy font-bold">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={5}
                                                required
                                                placeholder="Please describe your requirements, vessel details, and any specific timeline..."
                                                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-navy font-medium focus:border-navy focus:ring-2 focus:ring-navy/10 focus:outline-none transition-all placeholder:text-muted-foreground resize-none"
                                            />
                                        </div>

                                        {submitStatus === 'success' && (
                                            <div className="flex items-start gap-3 bg-slate-100 border border-slate-300 text-slate-800 px-5 py-4 rounded-xl text-sm font-medium">
                                                <Shield className="w-5 h-5 shrink-0 mt-0.5 text-navy" />
                                                <span>
                                                    Thank you! Your message has been sent. Our team will get back to you within 24 hours.
                                                </span>
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="flex items-start gap-3 bg-slate-100 border border-slate-300 text-slate-800 px-5 py-4 rounded-xl text-sm font-medium">
                                                <Shield className="w-5 h-5 shrink-0 mt-0.5 text-slate-600" />
                                                <span>
                                                    Something went wrong. Please try again or reach us directly at{' '}
                                                    <a href="mailto:info@sarrgaymarine.com" className="underline font-semibold">info@sarrgaymarine.com</a>.
                                                </span>
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full h-14 font-bold gap-2 text-base rounded-xl"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
