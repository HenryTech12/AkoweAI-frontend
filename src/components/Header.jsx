import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "FAQ", href: "#faq" },
        { name: "About", href: "/about" },
    ];

    const navVariants = {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
    };

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-lg z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo with Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 group"
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-xl shadow-lg shadow-blue-500/50"
                    />
                    <span className="font-display font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        AkoweAI
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="relative text-gray-700 font-medium hover:text-gray-900 transition group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </motion.svg>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={
                    mobileMenuOpen
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl border-t border-gray-100"
            >
                <div className="flex flex-col gap-2 p-4">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                                mobileMenuOpen
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                            }
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={item.href}
                                className="block text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-blue-50 transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.nav>
        </header>
    );
}
