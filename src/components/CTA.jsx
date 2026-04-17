import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CTA() {
    return (
        <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.span
                        className="text-sm font-display font-bold text-green-300 bg-green-400/20 px-6 py-2 rounded-full inline-block mb-6"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        🚀 Ready to Transform?
                    </motion.span>
                    <motion.h2
                        className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to Take Control of Your Business?
                    </motion.h2>
                    <motion.p
                        className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Join 100+ traders already using AkoweAI to get
                        bank-ready at scale. Start managing your business
                        smarter today.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <WhatsAppButton
                            label="🚀 Get Started Free"
                            message="I'm ready to transform my business with AkoweAI!"
                            ctaType="primary"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-purple-900 font-display font-bold rounded-xl hover:shadow-2xl transition-all shadow-lg"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                    <motion.p
                        className="text-blue-100 text-base font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        💰 100% free for traders • No credit card • Takes 30
                        seconds to start
                    </motion.p>{" "}
                </motion.div>
            </div>
        </section>
    );
}
