import React from "react";
import { motion } from "framer-motion";
import { useWhatsApp } from "../hooks/useWhatsApp";

export default function WhatsAppButton({
    label = "Chat on WhatsApp",
    message = "I'm interested in AkoweAI",
    ctaType = "secondary",
    useTwilioSandbox = true,
}) {
    const { openWhatsApp, isLoading } = useWhatsApp();

    const baseStyles =
        "px-6 py-3 rounded-xl font-display font-bold transition duration-300 flex items-center gap-3 justify-center relative overflow-hidden group";

    const styleMap = {
        primary: `${baseStyles} bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/50`,
        secondary: `${baseStyles} bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg`,
        outline: `${baseStyles} border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm`,
        ghost: `${baseStyles} text-blue-600 hover:bg-blue-50`,
    };

    return (
        <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openWhatsApp(message, useTwilioSandbox)}
            disabled={isLoading}
            className={`${styleMap[ctaType]} shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {/* Animated Background Shimmer */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Content */}
            <span className="relative z-10">
                {!isLoading ? (
                    <>
                        <svg
                            className="w-5 h-5 inline-block"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.56.934-2.846 2.359-3.52 4.169-.64 1.67-.92 3.46-.52 5.12.39 1.66 1.36 3.14 2.64 4.29l.5.341.478.329c.21.144.477.326.751.548l.052.036c1.578 1.072 3.644 1.679 5.734 1.679 1.25 0 2.469-.194 3.637-.667l3.732 1.237-.98-3.868-.043-.123c.537-1.566.838-3.301.838-5.059 0-2.59-.52-5.07-1.53-7.514-.99-2.325-2.465-4.285-4.276-5.476-1.685-.98-3.63-1.45-5.694-1.45" />
                        </svg>
                        <span className="ml-2">{label}</span>
                    </>
                ) : (
                    <>
                        <motion.div
                            className="w-5 h-5 inline-block border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <span className="ml-2">Connecting...</span>
                    </>
                )}
            </span>

            {/* Tooltip for Twilio Info */}
            {useTwilioSandbox && (
                <motion.div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Join Twilio sandbox: draw-me
                    <motion.div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
            )}
        </motion.button>
    );
}
