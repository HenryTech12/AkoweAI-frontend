import { motion } from "framer-motion";

const features = [
    {
        id: 1,
        icon: "🎤",
        title: "Speak Your Language",
        description:
            "Voice notes in Pidgin, Yoruba, Igbo, or Hausa. AI understands your dialect.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        icon: "📸",
        title: "Photo Receipts",
        description:
            "Snap photos of handwritten receipts or waybills. AI reads them instantly.",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        icon: "📊",
        title: "Bank-Ready Reports",
        description:
            "Generate professional financial statements banks want to see.",
        color: "from-green-500 to-emerald-500",
    },
    {
        id: 4,
        icon: "🎯",
        title: "Real-Time Analytics",
        description:
            "Know your numbers instantly: daily sales, expenses, and profit trends.",
        color: "from-orange-500 to-red-500",
    },
    {
        id: 5,
        icon: "🔒",
        title: "Your Data, Your Control",
        description:
            "All data encrypted and private. You decide who sees your reports.",
        color: "from-indigo-500 to-blue-500",
    },
    {
        id: 6,
        icon: "💰",
        title: "Free Forever (For You)",
        description:
            "Free for traders. Banks and lenders pay for credit reports.",
        color: "from-yellow-500 to-orange-500",
    },
];

export default function Features() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="features"
            className="py-32 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
        >
            {/* Background Elements */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="text-sm font-display font-bold text-green-600 bg-green-50 px-6 py-2 rounded-full inline-block mb-6"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        ✨ Powerful Features
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                        Why Traders Love{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            AkoweAI
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Designed for the Nigerian informal economy. Built with
                        traders in mind.
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                            />

                            {/* Card Content */}
                            <div className="relative bg-white backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Gradient Top Border */}
                                <motion.div
                                    className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color}`}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="text-6xl mb-6"
                                    whileHover={{ scale: 1.2, rotate: 12 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {feature.description}
                                </p>

                                {/* Animated Underline */}
                                <motion.div
                                    className={`mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r ${feature.color} rounded-full`}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-700 text-lg font-medium mb-6">
                        Ready to experience the future of business accounting?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-display font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"
                    >
                        Explore All Features
                    </motion.button>
                </motion.div>{" "}
            </div>
        </section>
    );
}
