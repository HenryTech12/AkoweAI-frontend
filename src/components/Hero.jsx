import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-900 flex items-center pt-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="text-sm font-display font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
                                🚀 AI-Powered Finance for Everyone
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
                        >
                            Your AI Business Co-Pilot
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium"
                        >
                            Speak your dialect. Take photos of receipts. We
                            handle the accounting.
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">
                                Turn your informal business into formal growth.
                            </span>
                        </motion.p>

                        {/* Key Metrics */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-xl rounded-2xl p-6 border border-blue-200 shadow-lg shadow-blue-500/10"
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold text-blue-600">
                                    40M+
                                </div>
                                <div className="text-gray-600 text-sm md:text-base font-medium">
                                    MSMEs in Nigeria
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-xl rounded-2xl p-6 border border-green-200 shadow-lg shadow-green-500/10"
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold text-green-600">
                                    80%
                                </div>
                                <div className="text-gray-600 text-sm md:text-base font-medium">
                                    Financially Invisible
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mb-6"
                        >
                            <WhatsAppButton
                                label="🚀 Get Started Free"
                                message="I want to start managing my business smarter with AkoweAI!"
                                ctaType="primary"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 font-display font-bold rounded-xl hover:shadow-lg transition border-2 border-blue-200"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 text-base font-medium"
                        >
                            ✓ Free for traders • Banks pay for reports • No
                            credit card needed
                        </motion.p>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            className="aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 backdrop-blur-xl rounded-3xl p-8 flex items-center justify-center border border-white/50 shadow-2xl shadow-blue-500/20"
                        >
                            <motion.div
                                className="text-center"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <motion.div
                                    className="text-8xl mb-6 inline-block"
                                    animate={{ rotate: [0, -5, 5, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                    }}
                                >
                                    📱
                                </motion.div>
                                <p className="text-2xl font-display font-bold text-gray-900 mb-2">
                                    WhatsApp Chat
                                </p>
                                <p className="text-gray-700 font-medium">
                                    Your AI accountant in your pocket
                                </p>
                                <motion.div
                                    className="mt-4 text-sm bg-green-100 text-green-700 rounded-lg p-3 font-medium"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    Always available 24/7
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-10 right-0 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                        >
                            <div className="text-3xl">🎤</div>
                            <p className="text-xs font-bold text-gray-700 mt-1">
                                Voice Notes
                            </p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: 0.3,
                            }}
                            className="absolute bottom-10 left-0 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                        >
                            <div className="text-3xl">📸</div>
                            <p className="text-xs font-bold text-gray-700 mt-1">
                                Photo Receipts
                            </p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: 0.6,
                            }}
                            className="absolute bottom-20 right-5 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                        >
                            <div className="text-3xl">📊</div>
                            <p className="text-xs font-bold text-gray-700 mt-1">
                                Analytics
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 0 }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </motion.svg>{" "}
            </motion.div>
        </section>
    );
}
