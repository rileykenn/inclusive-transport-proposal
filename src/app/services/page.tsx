"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    Copy,
    CheckCircle,
    ArrowLeft,
    Sparkles,
    Heart,
    Wine,
    Mountain,
    Plane,
    Briefcase,
    Star,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
    {
        icon: Heart,
        image: "/images/ndis.jpeg",
        title: "NDIS Transport Services",
        description:
            "Reliable, comfortable transport for NDIS participants. We provide door to door transport for appointments, community activities, social outings, and more. All services are in line with NDIS pricing guidelines.",
        features: [
            "Door to door pickup and drop off",
            "Appointments and medical transport",
            "Community access and social activities",
            "Comfortable, accessible 12 seater vehicle",
            "In line with NDIS pricing guidelines",
            "Professional, friendly driver",
        ],
        gradient: "from-rose-500 to-pink-600",
    },
    {
        icon: Wine,
        image: "/images/wine-tours.jpeg",
        title: "Wine & Brewery Tours",
        description:
            "Return transport to local wineries or breweries with time for tastings and lunch. Choose from half day or full day options. Sit back, relax, and enjoy the scenic drive.",
        features: [
            "Cellar door wine tasting experiences",
            "Scenic coastal and country drives",
            "Multiple winery and brewery stops",
            "Small group, comfortable travel",
            "Half day or full day options",
            "Designated driver included",
        ],
        gradient: "from-purple-500 to-violet-600",
    },
    {
        icon: Mountain,
        image: "/images/blue-mountains.jpeg",
        title: "Blue Mountains Day Trip",
        description:
            "Escape the everyday with a scenic full day trip to the Blue Mountains. Enjoy bushwalks, lookouts, village strolls, and a cafe lunch surrounded by nature.",
        features: [
            "Scenic lookouts and grounding stops",
            "Guided bush walk through nature",
            "Cafe lunch in Leura or Katoomba",
            "Village stroll through shops and gardens",
            "Full day experience",
            "Comfortable return transport",
        ],
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: Plane,
        image: "/images/airport-transfer.jpeg",
        title: "Airport Transfers",
        description:
            "Door to door airport pick up or drop off for individuals and groups. Reliable, on time service with flight tracking so you never have to worry.",
        features: [
            "All major airports covered",
            "Reliable pickup and drop off",
            "Flight tracking for peace of mind",
            "Comfortable group vehicle",
            "Individual or group transfers",
            "Early morning and late night available",
        ],
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: Briefcase,
        image: "/images/corpreteevents.jpeg",
        title: "Corporate Transport",
        description:
            "Transport for corporate retreats, conferences, team building days, and off-site events. Flexible scheduling with custom routes and timing.",
        features: [
            "Corporate retreats and conferences",
            "Flexible scheduling and custom routes",
            "Professional, punctual service",
            "Comfortable 12 seater vehicle",
            "Hourly or full day bookings",
            "Custom itineraries available",
        ],
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: Star,
        image: "/images/winery-van.jpeg",
        title: "Crooked River Winery Estate Day Trip",
        description:
            "A signature 5 hour winery experience at Crooked River Winery. Enjoy cellar door tastings, scenic vineyard views, and a relaxing day out. Winery lunch and glass of wine available as add-ons at additional cost.",
        features: [
            "Return transport included",
            "Cellar door tasting experience",
            "Free time to explore the estate",
            "Winery lunch available (add-on)",
            "Glass of wine available (add-on)",
            "5 hour experience",
        ],
        gradient: "from-teal-500 to-cyan-600",
    },
];

export default function ServicesPage() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("beni@inclusivetransport.com.au");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div style={{ background: '#74d4cf' }} className="pt-8 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors mb-8"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/25 text-[#0a1f1e] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles size={14} />
                            Our Services
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0a1f1e] mb-4">
                            Book by{" "}
                            <span className="text-white">
                                Phone or Email
                            </span>
                        </h1>
                        <p className="text-lg text-[#0a1f1e]/70 max-w-2xl mx-auto mb-8">
                            Browse our services below and contact Beni directly to get a custom quote and secure your booking.
                        </p>

                        {/* Contact bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/20 border border-white/30 rounded-2xl p-5 max-w-xl mx-auto">
                            <a
                                href="tel:0402503701"
                                className="inline-flex items-center gap-2 text-[#0a1f1e] font-bold hover:text-white transition-colors"
                            >
                                <Phone size={18} className="text-[#0a1f1e]" />
                                0402 503 701
                            </a>
                            <span className="hidden sm:block text-[#0a1f1e]/20">|</span>
                            <a
                                href="mailto:beni@inclusivetransport.com.au"
                                className="inline-flex items-center gap-2 text-[#0a1f1e] font-bold hover:text-white transition-colors"
                            >
                                <Mail size={18} className="text-[#0a1f1e]" />
                                beni@inclusivetransport.com.au
                            </a>
                            <button
                                onClick={copyEmail}
                                className="inline-flex items-center gap-1.5 text-xs text-[#0a1f1e]/60 hover:text-[#0a1f1e] transition-colors bg-white/15 px-3 py-1.5 rounded-full border border-white/25 hover:border-white/50"
                            >
                                <Copy size={12} />
                                {copied ? "Copied!" : "Copy email"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Services List */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-5xl mx-auto px-6 -mt-8"
            >
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={fadeUp}
                            className="bg-white rounded-2xl border border-[var(--color-border)] shadow-lg hover:shadow-xl transition-all overflow-hidden"
                        >
                            <div className="grid md:grid-cols-[320px_1fr] gap-0">
                                {/* Image */}
                                <div className="relative h-56 md:h-full min-h-[240px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:bg-gradient-to-r md:from-transparent md:to-white/20" />
                                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${service.gradient} p-2.5 rounded-xl shadow-lg`}>
                                        <service.icon size={20} className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8">
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--color-text)] mb-3">
                                        {service.title}
                                    </h2>
                                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-5">
                                        {service.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                                        {service.features.map((f) => (
                                            <div
                                                key={f}
                                                className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                                            >
                                                <CheckCircle size={15} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                                        <span className="text-sm font-bold text-[var(--color-text)]">
                                            Contact Beni for Pricing & Booking:
                                        </span>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <a
                                                href="tel:0402503701"
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-deeper)] hover:text-[var(--color-primary)] transition-colors"
                                            >
                                                <Phone size={14} />
                                                0402 503 701
                                            </a>
                                            <a
                                                href="mailto:beni@inclusivetransport.com.au"
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-deeper)] hover:text-[var(--color-primary)] transition-colors"
                                            >
                                                <Mail size={14} />
                                                beni@inclusivetransport.com.au
                                            </a>
                                            <button
                                                onClick={copyEmail}
                                                className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors bg-[var(--color-surface-alt)] px-2.5 py-1 rounded-full border border-[var(--color-border)]"
                                            >
                                                <Copy size={12} />
                                                {copied ? "Copied!" : "Copy email"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom CTA */}
            <div className="py-12 px-6 text-center" style={{ background: '#74d4cf' }}>
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f1e] mb-4">
                        Ready to Book?
                    </h2>
                    <p className="text-[#0a1f1e]/70 mb-8">
                        Get in touch with Beni to discuss your needs, get a quote, and lock in your transport.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:0402503701"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-deeper)] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-[var(--color-primary)]/30"
                        >
                            <Phone size={18} />
                            Call 0402 503 701
                        </a>
                        <a
                            href="mailto:beni@inclusivetransport.com.au"
                            className="inline-flex items-center gap-2 bg-white/20 border-2 border-white/40 hover:border-white text-[#0a1f1e] px-8 py-4 rounded-full font-bold transition-all"
                        >
                            <Mail size={18} />
                            Email Beni
                        </a>
                    </div>
                    <button
                        onClick={copyEmail}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#0a1f1e]/60 hover:text-[#0a1f1e] transition-colors"
                    >
                        <Copy size={14} />
                        {copied ? "Email copied!" : "Click to copy email address"}
                    </button>
                </div>
            </div>

            {/* Footer credit */}
            <div className="bg-[var(--color-accent)] py-6 px-6 text-center border-t border-white/10">
                <p className="text-sm text-gray-500">
                    © 2026 Inclusive Ability Support. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    Website designed and developed by{" "}
                    <a
                        href="https://rileytechstudio.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
                    >
                        Riley Tech Studio
                    </a>
                </p>
            </div>
        </main>
    );
}
