import { useState } from "react";

export function useWhatsApp() {
    const [isLoading, setIsLoading] = useState(false);

    const openWhatsApp = (message = "", useTwilioSandbox = true) => {
        setIsLoading(true);

        try {
            let whatsappUrl;

            if (useTwilioSandbox) {
                // Use Twilio WhatsApp Business API
                const twilioNumber =
                    process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER ||
                    "+1456678921";
                const sandboxKeyword =
                    process.env.NEXT_PUBLIC_TWILIO_SANDBOX_KEYWORD || "draw-me";
                const cleanNumber = twilioNumber.replace(/\+/g, "");

                // Send sandbox keyword followed by user message
                const sandboxMessage = `${sandboxKeyword}\n${message}`;
                const encodedMessage = encodeURIComponent(sandboxMessage);
                whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
            } else {
                // Use regular WhatsApp
                const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
                const encodedMessage = encodeURIComponent(message);
                whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            }

            // Track analytics
            if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "whatsapp_click", {
                    event_category: "engagement",
                    event_label: message.substring(0, 30),
                    twilio_sandbox: useTwilioSandbox,
                });
            }

            // Open WhatsApp
            window.open(whatsappUrl, "_blank");
        } catch (error) {
            console.error("Error opening WhatsApp:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return { openWhatsApp, isLoading };
}
