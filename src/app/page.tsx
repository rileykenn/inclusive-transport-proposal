"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Plane,
    Wine,
    Mountain,
    Users,
    Calendar,
    Phone,
    Mail,
    MapPin,
    Clock,
    Shield,
    Star,
    ChevronDown,
    Menu,
    X,
    DollarSign,
    Heart,
    Compass,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
            className={className}
        >
            {children}
        </motion.section>
    );
}

/* ═════════════════════════════
   NAVBAR
   ═════════════════════════════ */
function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Services", href: "#services" },
        { label: "Tours", href: "#tours" },
        { label: "About", href: "#about" },
        { label: "Booking", href: "#booking" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]"
        >
            <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <Image
                        src="/images/logo-blue.png"
                        alt="Inclusive Ability Support"
                        width={45}
                        height={45}
                        className="w-11 h-11"
                    />
                    <div className="hidden sm:block">
                        <span className="text-base font-bold text-[var(--color-text)] leading-tight block">
                            Beni Brown's
                        </span>
                        <span className="text-sm font-extrabold text-[var(--color-primary-deeper)] tracking-tight">
                            Inclusive Ability Support
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary-deeper)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-[var(--color-text)]"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-4"
                >
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-[var(--color-text-secondary)] font-medium border-b border-[var(--color-border-light)] last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        onClick={() => setOpen(false)}
                        className="block mt-3 text-center bg-[var(--color-primary)] text-white px-5 py-3 rounded-full font-semibold"
                    >
                        Book Now
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}

/* ═════════════════════════════
   HERO
   ═════════════════════════════ */
function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-[72px]">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/winery-van.jpeg"
                        alt="Inclusive Transport Services van at a winery"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[var(--color-primary-light)]/30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    {/* Google Reviews */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 mb-8"
                    >
                        <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[var(--color-primary)]/20 flex gap-3 items-start max-w-sm transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-white p-1.5 rounded-full shrink-0 border border-gray-100 shadow-sm flex items-center justify-center w-8 h-8">
                                <span className="text-sm font-bold text-gray-800">G</span>
                            </div>
                            <div>
                                <div className="flex text-yellow-400 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-xs font-medium text-gray-800 leading-snug">"Beni provided absolutely amazing service. The van was pristine and he was so helpful with our wheelchair needs."</p>
                                <p className="text-[10px] text-gray-500 mt-1 font-bold">- Sarah J.</p>
                            </div>
                        </div>

                        <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[var(--color-primary)]/20 flex gap-3 items-start max-w-sm transform hover:scale-105 transition-transform duration-300 hidden sm:flex">
                            <div className="bg-white p-1.5 rounded-full shrink-0 border border-gray-100 shadow-sm flex items-center justify-center w-8 h-8">
                                <span className="text-sm font-bold text-gray-800">G</span>
                            </div>
                            <div>
                                <div className="flex text-yellow-400 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-xs font-medium text-gray-800 leading-snug">"Best winery tour we've ever had! Relaxing, professional, and Beni knew all the best spots."</p>
                                <p className="text-[10px] text-gray-500 mt-1 font-bold">- Michael T.</p>
                            </div>
                        </div>
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-text)] leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
                        Your Journey,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
                            Our Priority
                        </span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl font-medium">
                        Book our Premium, reliable 12 seater transport for <span className="text-[var(--color-primary-deeper)] font-bold">NDIS customers</span>, airport transfers, winery tours, Blue Mountain escapes & retreats. Travel comfortably and stress free with our professional service, chauffeured by our hand-picked drivers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#booking"
                            className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                        >
                            <Calendar size={18} />
                            Book Your Ride
                        </a>
                        <a
                            href="tel:0402503701"
                            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-text)] px-8 py-4 rounded-full text-base font-bold transition-all"
                        >
                            <Phone size={18} />
                            0402 503 701
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[var(--color-border)]">
                        {[
                            { icon: Shield, text: "Fully Insured" },
                            { icon: Users, text: "Group Specialists" },
                            { icon: Star, text: "Professional Service" },
                        ].map((badge) => (
                            <div
                                key={badge.text}
                                className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                            >
                                <badge.icon
                                    size={16}
                                    className="text-[var(--color-primary-dark)]"
                                />
                                <span className="font-medium">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ═════════════════════════════
   SERVICES
   ═════════════════════════════ */
function Services() {
    const services = [
        {
            icon: Heart,
            title: "NDIS Transport",
            desc: "Supportive and professional transport services for NDIS participants. Safe, comfortable rides to appointments and community activities.",
            price: "NDIS Funded",
            highlight: true,
        },
        {
            icon: Plane,
            title: "Airport Transfers",
            desc: "Comfortable door to door airport transfers from $90 per person. Reliable pickups and drop offs for all major airports.",
            price: "From $90pp",
        },
        {
            icon: Wine,
            title: "Wine & Brewery Tours",
            desc: "Full and half day wine and brewery tours through stunning regional estates. Cellar door tastings, lunch, and scenic drives included.",
            price: "From $150pp",
        },
        {
            icon: Mountain,
            title: "Blue Mountains Day Trips",
            desc: "Reconnect with nature on a full day Blue Mountains escape. Scenic lookouts, guided bush walks, cafe lunch, and village strolls.",
            price: "From $199pp",
        },
        {
            icon: Compass,
            title: "Crooked River Winery Estate",
            desc: "An all inclusive 5 hour winery experience. Cellar door tasting, seated lunch with wine, and time to explore the estate.",
            price: "$250pp All Inclusive",
        },
        {
            icon: Users,
            title: "Group Transport",
            desc: "Comfortable group transport for corporate events, festivals, parties, and special occasions. Flexible scheduling and routes.",
            price: "Custom Quote",
        },
    ];

    return (
        <AnimatedSection
            id="services"
            className="py-24 px-6 bg-[var(--color-surface-alt)]"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div variants={fadeUp} className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[2px] text-[var(--color-primary-deeper)] font-bold mb-3">
                        Our Services
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-4">
                        Where Do You Want to Go?
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        From airport runs to full day winery experiences. Professional,
                        comfortable transport built around your schedule.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            variants={fadeUp}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                            className={`rounded-2xl p-8 border-2 transition-all duration-300 group shadow-lg hover:shadow-2xl relative overflow-hidden ${
                                // @ts-ignore
                                service.highlight
                                    ? "bg-gradient-to-br from-white to-[var(--color-primary-light)] border-[var(--color-primary)]"
                                    : "bg-white border-transparent hover:border-[var(--color-primary)]/30"
                                }`}
                        >
                            {/* @ts-ignore */}
                            {service.highlight && (
                                <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                <service.icon
                                    size={22}
                                    className="text-[var(--color-primary-deeper)] group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                {service.desc}
                            </p>
                            <span className="inline-block text-sm font-bold text-[var(--color-primary-deeper)] bg-[var(--color-primary-light)] px-3 py-1 rounded-full">
                                {service.price}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

/* ═════════════════════════════
   FEATURED TOURS
   ═════════════════════════════ */
function FeaturedTours() {
    const tours = [
        {
            image: "/images/wine-tours.jpeg",
            title: "Wine & Brewery Tours",
            subtitle: "Full & Half Day",
            price: "From $150",
            features: [
                "Cellar door wine tasting",
                "Scenic coastal and country drives",
                "Multiple winery and brewery stops",
                "Small group, comfortable travel",
            ],
        },
        {
            image: "/images/blue-mountains.jpeg",
            title: "Blue Mountains Reset Day",
            subtitle: "Full Day Experience",
            price: "From $199",
            features: [
                "Scenic lookouts and grounding stops",
                "Guided bush walk through nature",
                "Cafe lunch in Leura or Katoomba",
                "Village stroll through shops and gardens",
            ],
        },
        {
            image: "/images/airport-transfer.jpeg",
            title: "Airport Transfers",
            subtitle: "Door to Door",
            price: "From $90",
            features: [
                "All major airports covered",
                "Reliable pickup and drop off",
                "Flight tracking for peace of mind",
                "Comfortable group vehicle",
            ],
        },
    ];

    return (
        <AnimatedSection id="tours" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div variants={fadeUp} className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[2px] text-[var(--color-primary-deeper)] font-bold mb-3">
                        Featured Experiences
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-4">
                        Popular Tours & Transfers
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Explore some of the most popular packages. Every trip is fully catered
                        with comfortable transport and a personal touch.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {tours.map((tour) => (
                        <motion.div
                            key={tour.title}
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    <span className="text-sm font-bold text-[var(--color-primary-deeper)]">
                                        {tour.price}
                                        <span className="text-xs font-medium text-[var(--color-text-muted)]">
                                            {" "}
                                            /person
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-xs uppercase tracking-wider text-[var(--color-primary-dark)] font-semibold mb-1">
                                    {tour.subtitle}
                                </p>
                                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">
                                    {tour.title}
                                </h3>

                                <ul className="space-y-2.5 mb-6">
                                    {tour.features.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#booking"
                                    className="block text-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 rounded-xl font-semibold transition-all text-sm"
                                >
                                    Book This Experience
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

/* ═════════════════════════════
   WINERY SPOTLIGHT
   ═════════════════════════════ */
function WinerySpotlight() {
    const itinerary = [
        { time: "10:00am", event: "Pick up from home or agreed meeting point" },
        { time: "11:00am", event: "Arrive at Crooked River Winery" },
        { time: "11:00", event: "Cellar door tasting experience" },
        { time: "12:15pm", event: "Seated winery lunch (main meal + glass of wine)" },
        { time: "1:30pm", event: "Explore the estate and enjoy the views" },
        { time: "3:00pm", event: "Depart winery" },
        { time: "4:00pm", event: "Drop off at original location" },
    ];

    return (
        <AnimatedSection
            className="py-24 px-6 bg-[var(--color-accent)]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div variants={fadeUp} className="relative">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/winery-van.jpeg"
                                alt="Inclusive Transport at Crooked River Winery"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded-2xl shadow-lg">
                            <span className="text-2xl font-extrabold">$250</span>
                            <span className="text-sm ml-1 opacity-80">per person</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={fadeUp}>
                        <p className="text-xs uppercase tracking-[2px] text-[var(--color-primary)] font-bold mb-3">
                            Signature Experience
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                            Crooked River Winery Estate Day Trip
                        </h2>
                        <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed mb-8">
                            An all inclusive 5 hour winery experience. From cellar door tastings
                            to a seated lunch overlooking the vineyard, everything is taken care
                            of so you can sit back and enjoy the day.
                        </p>

                        <div className="space-y-3 mb-8">
                            {itinerary.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 bg-white/5 rounded-xl px-4 py-3"
                                >
                                    <span className="text-sm font-bold text-[var(--color-primary)] whitespace-nowrap min-w-[70px]">
                                        {item.time}
                                    </span>
                                    <span className="text-sm text-gray-300">{item.event}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {[
                                "Return Transport",
                                "Cellar Door Tasting",
                                "Winery Lunch",
                                "Glass of Wine",
                                "Free Time to Explore",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#booking"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-full font-bold transition-all"
                        >
                            <Calendar size={18} />
                            Book This Tour
                        </a>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

/* ═════════════════════════════
   ABOUT
   ═════════════════════════════ */
function About() {
    const benefits = [
        {
            icon: Shield,
            title: "Fully Insured",
            desc: "Every trip is fully covered so you can travel with total peace of mind.",
        },
        {
            icon: Users,
            title: "Small Groups",
            desc: "Comfortable group sizes that feel personal, not packed or rushed.",
        },
        {
            icon: Star,
            title: "Professional Drivers",
            desc: "Experienced, friendly drivers who care about your comfort and safety.",
        },
        {
            icon: Clock,
            title: "Flexible Scheduling",
            desc: "Pick up and drop off times that work around you, not the other way around.",
        },
    ];

    return (
        <AnimatedSection
            id="about"
            className="py-24 px-6 bg-[var(--color-surface-alt)]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div variants={fadeUp}>
                        <p className="text-xs uppercase tracking-[2px] text-[var(--color-primary-deeper)] font-bold mb-3">
                            Why Choose Us
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                            Transport That Puts{" "}
                            <span className="text-[var(--color-primary-dark)]">
                                People First
                            </span>
                        </h2>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
                            Inclusive Ability Support is about more than getting from A to B. It
                            is about making the journey something you actually look forward to.
                            Whether it is a winery tour, an airport transfer, or a day trip to
                            the Blue Mountains, every ride is comfortable, professional, and
                            personal.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((b) => (
                                <div key={b.title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
                                        <b.icon
                                            size={20}
                                            className="text-[var(--color-primary-deeper)]"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[var(--color-text)] mb-1">
                                            {b.title}
                                        </h4>
                                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                                            {b.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div variants={fadeUp} className="relative">
                        <div className="relative h-[480px] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/airport-transfer.jpeg"
                                alt="Airport transfer service"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                                <Star
                                    size={22}
                                    className="text-[var(--color-primary-deeper)]"
                                    fill="currentColor"
                                />
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-[var(--color-text)]">
                                    100%
                                </p>
                                <p className="text-xs text-[var(--color-text-muted)]">
                                    Customer Satisfaction
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

/* ═════════════════════════════
   BOOKING SECTION
   ═════════════════════════════ */
function BookingSection() {
    const [selectedService, setSelectedService] = useState("wine-tours");
    const [selectedDate, setSelectedDate] = useState(15);

    const serviceOptions = [
        { id: "wine-tours", label: "Wine & Brewery Tours", price: "From $150pp" },
        { id: "airport", label: "Airport Transfers", price: "From $90pp" },
        { id: "blue-mountains", label: "Blue Mountains Day Trip", price: "From $199pp" },
        { id: "winery-estate", label: "Crooked River Winery", price: "$250pp" },
        { id: "group", label: "Group Transport", price: "Custom Quote" },
        { id: "ndis", label: "NDIS Transport", price: "NDIS Funded" },
    ];

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const calendarDays = Array.from({ length: 35 }, (_, i) => {
        const day = i - 2;
        return day > 0 && day <= 28 ? day : null;
    });

    return (
        <AnimatedSection id="booking" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div variants={fadeUp} className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[2px] text-[var(--color-primary-deeper)] font-bold mb-3">
                        Ready to Go?
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-4">
                        Book Your Experience
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Pick your service, choose a date, and lock it in. Easy online booking
                        so you can plan your trip in minutes.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="max-w-4xl mx-auto bg-white rounded-3xl border border-[var(--color-border)] shadow-2xl shadow-black/5 overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-[var(--color-accent)] px-8 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/logo-white.png"
                                alt="Logo"
                                width={28}
                                height={28}
                            />
                            <span className="text-white font-bold text-sm">
                                Inclusive Ability Support
                            </span>
                        </div>
                        <span className="text-[var(--color-primary)] text-sm font-medium">
                            Live Booking
                        </span>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Service Selection */}
                            <div>
                                <h3 className="text-sm font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
                                    Select Your Service
                                </h3>
                                <div className="space-y-2.5">
                                    {serviceOptions.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setSelectedService(s.id)}
                                            className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all flex justify-between items-center ${selectedService === s.id
                                                ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary-deeper)]"
                                                : "border-[var(--color-border)] hover:border-[var(--color-primary)]/30 text-[var(--color-text-secondary)]"
                                                }`}
                                        >
                                            <span className="font-medium text-sm">{s.label}</span>
                                            <span
                                                className={`text-xs font-bold ${selectedService === s.id
                                                    ? "text-[var(--color-primary-deeper)]"
                                                    : "text-[var(--color-text-muted)]"
                                                    }`}
                                            >
                                                {s.price}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Calendar */}
                            <div>
                                <h3 className="text-sm font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
                                    Choose a Date
                                </h3>
                                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-5 border border-[var(--color-border)]">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-bold text-[var(--color-text)]">
                                            March 2026
                                        </span>
                                        <div className="flex gap-1.5">
                                            <button className="w-7 h-7 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                                ‹
                                            </button>
                                            <button className="w-7 h-7 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                                ›
                                            </button>
                                        </div>
                                    </div>

                                    <div className="calendar-grid mb-2">
                                        {days.map((d) => (
                                            <div
                                                key={d}
                                                className="text-center text-[11px] font-semibold text-[var(--color-text-muted)] py-2 uppercase tracking-wider"
                                            >
                                                {d}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="calendar-grid">
                                        {calendarDays.map((day, i) => (
                                            <div
                                                key={i}
                                                onClick={() => day && setSelectedDate(day)}
                                                className={`calendar-day ${day === selectedDate ? "selected" : ""
                                                    } ${!day ? "empty" : ""}`}
                                            >
                                                {day || ""}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3.5 rounded-xl font-bold text-sm transition-all">
                                    Continue Booking →
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    variants={fadeIn}
                    className="text-center mt-8 text-sm text-[var(--color-text-muted)]"
                >
                    Prefer to book by phone?{" "}
                    <a
                        href="tel:0402503701"
                        className="text-[var(--color-primary-deeper)] font-semibold hover:underline"
                    >
                        Call 0402 503 701
                    </a>
                </motion.p>
            </div>
        </AnimatedSection>
    );
}

/* ═════════════════════════════
   FOOTER
   ═════════════════════════════ */
function Footer() {
    return (
        <AnimatedSection
            id="contact"
            className="bg-[var(--color-accent)] text-white py-20 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div variants={fadeUp}>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/images/logo-white.png"
                                alt="Inclusive Ability Support"
                                width={36}
                                height={36}
                            />
                            <div>
                                <span className="font-bold text-white block leading-tight">
                                    Inclusive Ability
                                </span>
                                <span className="text-[11px] uppercase tracking-[1.5px] text-[var(--color-primary)] font-semibold">
                                    Support
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mt-4">
                            Professional transport services for tours, transfers, events, and
                            NDIS support. Fully insured, comfortable, and always on time.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeUp}>
                        <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <div className="space-y-3">
                            {[
                                { label: "Wine & Brewery Tours", href: "#tours" },
                                { label: "Airport Transfers", href: "#services" },
                                { label: "Blue Mountains Day Trips", href: "#tours" },
                                { label: "Book Online", href: "#booking" },
                                { label: "Contact Us", href: "#contact" },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="block text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={fadeUp}>
                        <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <a
                                href="tel:0402503701"
                                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                            >
                                <Phone size={16} className="text-[var(--color-primary)]" />
                                0402 503 701
                            </a>
                            <a
                                href="mailto:bennibrown.bb@gmail.com"
                                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                            >
                                <Mail size={16} className="text-[var(--color-primary)]" />
                                bennibrown.bb@gmail.com
                            </a>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <MapPin size={16} className="text-[var(--color-primary)]" />
                                Australia Wide
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn}
                    className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-gray-500">
                        © 2026 Inclusive Ability Support. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500">
                        www.inclusivetransport.com.au
                    </p>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}

/* ═════════════════════════════
   PAGE EXPORT
   ═════════════════════════════ */
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <FeaturedTours />
            <WinerySpotlight />
            <About />
            <BookingSection />
            <Footer />
        </>
    );
}
