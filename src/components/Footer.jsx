import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
    {
        title: "Product",
        links: [
            { name: "Why AkoweAI", href: "/" },
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Blog", href: "/blog" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
        ],
    },
];

const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/AkoweAI", icon: "𝕏" },
    { name: "Facebook", href: "https://facebook.com/AkoweAI", icon: "f" },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/company/akowe-ai",
        icon: "in",
    },
    { name: "Instagram", href: "https://instagram.com/AkoweAI", icon: "📷" },
];

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Main Footer Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
                >
                    {/* Brand Section */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-2"
                    >
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-xl shadow-lg shadow-blue-500/50"
                            />
                            <span className="font-display font-bold text-2xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                AkoweAI
                            </span>
                        </motion.div>
                        <p className="text-gray-400 font-medium leading-relaxed mb-6">
                            AI Business Co-Pilot for Nigeria&apos;s informal
                            traders. Manage your business smarter, grow faster,
                            and get bank-ready.
                        </p>
                        <p className="text-sm text-gray-500">
                            Built for traders. Trusted by hundreds.
                        </p>
                    </motion.div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <motion.div key={section.title} variants={itemVariants}>
                            <h4 className="font-display font-bold text-white mb-6 text-lg">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white font-medium transition relative group"
                                        >
                                            {link.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-full transition-all duration-300 rounded-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    {/* Copyright */}
                    <div className="text-sm text-gray-500 text-center md:text-left">
                        <p>&copy; 2026 AkoweAI. All rights reserved.</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white transition font-bold shadow-lg"
                                title={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-display font-bold rounded-lg shadow-lg hover:shadow-xl transition"
                    >
                        Get Started
                    </motion.button>
                </motion.div>

                {/* WhatsApp Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-2xl text-center text-sm"
                >
                    <p className="text-gray-300 mb-2">
                        <span className="font-bold text-green-400">
                            Twilio WhatsApp:
                        </span>{" "}
                        Connect with us on WhatsApp
                    </p>
                    <p className="text-gray-400">
                        Number:{" "}
                        <span className="font-mono font-bold text-white">
                            +1456678921
                        </span>{" "}
                        | Keyword:{" "}
                        <span className="font-mono font-bold text-green-400">
                            draw-me
                        </span>
                    </p>
                </motion.div>
            </div>
            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </footer>
    );
}
