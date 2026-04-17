import { motion } from "framer-motion";

const steps = [
    {
        number: 1,
        title: "Download WhatsApp",
        description: "AkoweAI lives in your WhatsApp chat",
        icon: "📲",
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: 2,
        title: "Chat or Send Voice",
        description: "Send voice notes, receipts, or text messages",
        icon: "💬",
        color: "from-purple-500 to-pink-500",
    },
    {
        number: 3,
        title: "AI Processes",
        description: "Claude AI extracts and organizes your transactions",
        icon: "🤖",
        color: "from-orange-500 to-red-500",
    },
    {
        number: 4,
        title: "Reports Ready",
        description: "Get instant financial reports and business insights",
        icon: "📊",
        color: "from-green-500 to-emerald-500",
    },
];

export default function HowItWorks() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
            id="how-it-works"
            className="py-32 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden"
        >
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
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
                        className="text-sm font-display font-bold text-blue-600 bg-blue-50 px-6 py-2 rounded-full inline-block mb-6"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        ✨ Simple Process
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                        How It{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        4 simple steps to smarter business management
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative group"
                        >
                            {/* Connection Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="hidden md:block absolute top-24 -right-3 w-6 text-gray-300 text-2xl font-bold group-hover:text-blue-400 transition"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    →
                                </motion.div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative h-full bg-gradient-to-br ${step.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden group/card`}
                            >
                                {/* Animated Background Gradient */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover/card:opacity-20"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* Step Number Badge */}
                                <motion.div
                                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center font-display font-bold text-lg"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                >
                                    {step.number}
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <motion.div
                                        className="text-6xl mb-6 inline-block"
                                        whileHover={{ scale: 1.2, rotate: 12 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                        }}
                                    >
                                        {step.icon}
                                    </motion.div>

                                    <h3 className="text-2xl font-display font-bold mb-3 leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-white/90 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Timeline mobile view */}
                <motion.div
                    className="md:hidden mt-12 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />
                    <div className="space-y-8 pl-20">
                        {steps.map((step) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute left-0 top-0 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-display font-bold">
                                    {step.number}
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-md">
                                    <div className="text-3xl mb-2">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>{" "}
            </div>
        </section>
    );
}
