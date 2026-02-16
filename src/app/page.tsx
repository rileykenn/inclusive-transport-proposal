"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    Heart,
    Compass,
    Sparkles,
    ArrowRight,
    CheckCircle,
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

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
                : "bg-white/90 backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <Image
                        src="/images/logo-blue.png"
                        alt="Inclusive Ability Support"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                    />
                    <div>
                        <span className="text-sm sm:text-base font-bold text-[var(--color-text)] leading-tight block">
                            Inclusive Ability Support
                        </span>
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[1.5px] text-[var(--color-primary-deeper)] font-semibold">
                            by Beni Brown
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
                        className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-deeper)] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl hover:shadow-[var(--color-primary)]/30"
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

            {/* Teal accent line */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />

            {/* Mobile Menu */}
            <AnimatePresence>
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
                            className="block mt-3 text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-5 py-3 rounded-full font-semibold"
                        >
                            Book Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

/* ═════════════════════════════
   HERO
   ═════════════════════════════ */
function Hero() {
    const reviews = [
        {
            name: "Sarah M.",
            text: "Beni was amazing! The winery tour was so well organised and comfortable. Highly recommend!",
            rating: 5,
        },
        {
            name: "James T.",
            text: "Best airport transfer service. Always on time, professional, and the van is spotless. 10/10.",
            rating: 5,
        },
    ];

    const [activeReview, setActiveReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/winery-van.jpeg"
                    alt="Inclusive Transport Services van at a winery"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Vibrant teal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/90 via-[var(--color-primary-deeper)]/70 to-[var(--color-primary)]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/60 via-transparent to-transparent" />
            </div>

            {/* Animated floating circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl float-animation" />
                <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-[var(--color-primary)]/15 blur-2xl float-animation" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[40%] right-[30%] w-32 h-32 rounded-full bg-[var(--color-primary-dark)]/10 blur-2xl float-animation" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/20 backdrop-blur-sm text-[var(--color-primary-light)] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[var(--color-primary)]/30">
                            <Sparkles size={16} />
                            Premium 12 Seater Transport
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                            Your Journey,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                                Our Priority
                            </span>
                        </h1>

                        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                            Book our premium, reliable 12 seater transport for NDIS customers, airport
                            transfers, winery tours, Blue Mountain escapes and more. Travel comfortably
                            and stress free with our professional service and be chauffeured by our
                            hand picked drivers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#booking"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-deeper)] text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-[var(--color-primary)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 shimmer-effect"
                            >
                                <Calendar size={18} />
                                Book Your Ride
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="tel:0402503701"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 text-white px-8 py-4 rounded-full text-base font-bold transition-all"
                            >
                                <Phone size={18} />
                                0402 503 701
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
                            {[
                                { icon: Shield, text: "Fully Insured" },
                                { icon: Users, text: "Group Specialists" },
                                { icon: Star, text: "5 Star Rated" },
                            ].map((badge, i) => (
                                <motion.div
                                    key={badge.text}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.15 }}
                                    className="flex items-center gap-2 text-sm text-white/70"
                                >
                                    <badge.icon
                                        size={16}
                                        className="text-[var(--color-primary)]"
                                    />
                                    <span className="font-medium">{badge.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Google Reviews — Desktop: both, Mobile: rotating single */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col gap-5 mt-8 lg:mt-0"
                    >
                        {/* Google Reviews Header */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className="star-gold fill-[#FBBC04]" />
                                ))}
                            </div>
                            <span className="text-white/80 text-sm font-medium">
                                5.0 on Google Reviews
                            </span>
                        </div>

                        {/* Desktop: show all reviews */}
                        <div className="hidden lg:flex flex-col gap-5">
                            {reviews.map((review, i) => (
                                <motion.div
                                    key={review.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + i * 0.2 }}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold text-sm">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{review.name}</p>
                                            <div className="flex gap-0.5">
                                                {[...Array(review.rating)].map((_, j) => (
                                                    <Star key={j} size={12} className="star-gold fill-[#FBBC04]" />
                                                ))}
                                            </div>
                                        </div>
                                        <svg className="ml-auto w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                    </div>
                                    <p className="text-white/80 text-sm leading-relaxed italic">
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile: rotating single review */}
                        <div className="lg:hidden relative min-h-[140px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeReview}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold text-sm">
                                            {reviews[activeReview].name[0]}
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{reviews[activeReview].name}</p>
                                            <div className="flex gap-0.5">
                                                {[...Array(reviews[activeReview].rating)].map((_, j) => (
                                                    <Star key={j} size={12} className="star-gold fill-[#FBBC04]" />
                                                ))}
                                            </div>
                                        </div>
                                        <svg className="ml-auto w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                    </div>
                                    <p className="text-white/80 text-sm leading-relaxed italic">
                                        &ldquo;{reviews[activeReview].text}&rdquo;
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                            {/* Dots indicator */}
                            <div className="flex justify-center gap-2 mt-3">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveReview(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === activeReview ? "bg-[var(--color-primary)] w-6" : "bg-white/30"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
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
            gradient: "from-rose-400 to-pink-500",
        },
        {
            icon: Plane,
            title: "Airport Transfers",
            desc: "Comfortable door to door airport transfers from $90 per person. Reliable pickups and drop offs for all major airports.",
            price: "From $90pp",
            gradient: "from-blue-400 to-indigo-500",
        },
        {
            icon: Wine,
            title: "Wine & Brewery Tours",
            desc: "Full and half day wine and brewery tours through stunning regional estates. Cellar door tastings, lunch, and scenic drives included.",
            price: "From $150pp",
            gradient: "from-purple-400 to-violet-500",
        },
        {
            icon: Mountain,
            title: "Blue Mountains Day Trips",
            desc: "Reconnect with nature on a full day Blue Mountains escape. Scenic lookouts, guided bush walks, cafe lunch, and village strolls.",
            price: "From $199pp",
            gradient: "from-emerald-400 to-teal-500",
        },
        {
            icon: Compass,
            title: "Crooked River Winery Estate",
            desc: "An all inclusive 5 hour winery experience. Cellar door tasting, seated lunch with wine, and time to explore the estate.",
            price: "$250pp All Inclusive",
            gradient: "from-amber-400 to-orange-500",
        },
        {
            icon: Users,
            title: "Group Transport",
            desc: "Comfortable group transport for corporate events, festivals, parties, and special occasions. Flexible scheduling and routes.",
            price: "Custom Quote",
            gradient: "from-cyan-400 to-teal-500",
        },
    ];

    return (
        <AnimatedSection
            id="services"
            className="py-24 px-6 bg-gradient-to-b from-[var(--color-surface-alt)] to-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[var(--color-primary-dark)]/5 blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                {/* Services header removed — client rethinking */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={fadeUp}
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                            className="bg-white rounded-2xl p-8 border-2 border-[var(--color-primary)]/50 hover:border-[var(--color-primary)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Top gradient accent */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon
                                    size={24}
                                    className="text-white"
                                />
                            </div>
                            <h3 className="text-xl font-extrabold text-[var(--color-text)] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[15px] font-medium text-[var(--color-text-secondary)] leading-relaxed mb-4">
                                {service.desc}
                            </p>
                            <span className="inline-block text-sm font-bold text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-5 py-2 rounded-full shadow-md">
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
            color: "from-purple-500 to-violet-600",
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
            color: "from-emerald-500 to-teal-600",
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
            color: "from-blue-500 to-indigo-600",
            features: [
                "All major airports covered",
                "Reliable pickup and drop off",
                "Flight tracking for peace of mind",
                "Comfortable group vehicle",
            ],
        },
    ];

    return (
        <AnimatedSection id="tours" className="py-24 px-6 bg-gradient-to-b from-white to-[var(--color-surface-alt)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--color-primary)]/5 blur-[100px]" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div variants={fadeUp} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary-deeper)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <Compass size={14} />
                        Featured Experiences
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-text)] mb-4">
                        Popular Tours &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-deeper)]">
                            Transfers
                        </span>
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
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className={`absolute top-4 right-4 bg-gradient-to-r ${tour.color} px-3 py-1.5 rounded-full shadow-lg`}>
                                    <span className="text-sm font-bold text-white">
                                        {tour.price}
                                        <span className="text-xs font-medium opacity-80"> /person</span>
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
                                            <CheckCircle size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#booking"
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-deeper)] text-white py-3 rounded-xl font-semibold transition-all text-sm shadow-md"
                                >
                                    Book This Experience
                                    <ArrowRight size={16} />
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
            className="py-24 px-6 bg-gradient-to-br from-[var(--color-accent)] via-[#1a3a3a] to-[var(--color-accent)] relative overflow-hidden"
        >
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[var(--color-primary)]/8 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--color-primary-dark)]/8 blur-[80px]" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div variants={fadeUp} className="relative">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/winery-van.jpeg"
                                alt="Inclusive Transport at Crooked River Winery"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white px-6 py-3 rounded-2xl shadow-xl pulse-glow">
                            <span className="text-2xl font-extrabold">$250</span>
                            <span className="text-sm ml-1 opacity-80">per person</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={fadeUp}>
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            <Wine size={14} />
                            Signature Experience
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                            Crooked River Winery{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
                                Estate Day Trip
                            </span>
                        </h2>
                        <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                            An all inclusive 5 hour winery experience. From cellar door tastings
                            to a seated lunch overlooking the vineyard, everything is taken care
                            of so you can sit back and enjoy the day.
                        </p>

                        <div className="space-y-3 mb-8">
                            {itinerary.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex items-start gap-4 bg-white/5 hover:bg-white/8 rounded-xl px-4 py-3 transition-colors border border-white/5"
                                >
                                    <span className="text-sm font-bold text-[var(--color-primary)] whitespace-nowrap min-w-[70px]">
                                        {item.time}
                                    </span>
                                    <span className="text-sm text-gray-300">{item.event}</span>
                                </motion.div>
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
                                    className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 px-3 py-1.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#booking"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-deeper)] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-[var(--color-primary)]/20"
                        >
                            <Calendar size={18} />
                            Book This Tour
                            <ArrowRight size={16} />
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
            gradient: "from-blue-400 to-indigo-500",
        },
        {
            icon: Users,
            title: "Small Groups",
            desc: "Comfortable group sizes that feel personal, not packed or rushed.",
            gradient: "from-emerald-400 to-teal-500",
        },
        {
            icon: Star,
            title: "Professional Drivers",
            desc: "Experienced, friendly drivers who care about your comfort and safety.",
            gradient: "from-amber-400 to-orange-500",
        },
        {
            icon: Clock,
            title: "Flexible Scheduling",
            desc: "Pick up and drop off times that work around you, not the other way around.",
            gradient: "from-purple-400 to-violet-500",
        },
    ];

    return (
        <AnimatedSection
            id="about"
            className="py-24 px-6 bg-gradient-to-b from-[var(--color-surface-alt)] to-white relative overflow-hidden"
        >
            <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[var(--color-primary)]/5 blur-[100px]" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div variants={fadeUp}>
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary-deeper)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            <Heart size={14} />
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-6">
                            Transport That Puts{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-deeper)]">
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
                                <motion.div
                                    key={b.title}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all"
                                >
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                                        <b.icon
                                            size={20}
                                            className="text-white"
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
                                </motion.div>
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
