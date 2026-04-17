/**
 * Format phone number for WhatsApp
 * Handles both +234 and 0 prefixes
 */
export function formatWhatsAppNumber(phone) {
    // Remove all non-digits
    let cleaned = phone.replace(/\D/g, "");

    // Handle Nigerian numbers
    if (cleaned.startsWith("234")) {
        return cleaned;
    }

    if (cleaned.startsWith("0")) {
        return "234" + cleaned.substring(1);
    }

    if (cleaned.length === 10) {
        return "234" + cleaned;
    }

    return cleaned;
}

/**
 * Generate WhatsApp URL with Twilio Sandbox Support
 * For Twilio sandbox, use room-specific keyword (e.g., "draw-me")
 */
export function generateWhatsAppUrl(
    phone,
    message = "",
    useTwilioSandbox = true
) {
    const twilioNumber =
        process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER || "+1456678921";
    const sandboxKeyword =
        process.env.NEXT_PUBLIC_TWILIO_SANDBOX_KEYWORD || "draw-me";

    if (useTwilioSandbox) {
        const sandboxMessage = `${sandboxKeyword}\n${message}`;
        const encodedMessage = encodeURIComponent(sandboxMessage);
        return `https://wa.me/${twilioNumber.replace(
            /\+/g,
            ""
        )}?text=${encodedMessage}`;
    }

    const formattedPhone = formatWhatsAppNumber(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

/**
 * Common message templates
 */
export const MESSAGE_TEMPLATES = {
    START: "I want to start managing my business smarter with AkoweAI.",
    LEARN_MORE: "Tell me more about how AkoweAI works.",
    PRICING: "What's your pricing model?",
    SUPPORT: "I need help setting up AkoweAI.",
    DEMO: "Can you show me a demo?",
    SANDBOX_JOIN: "I want to join the AkoweAI sandbox and start using it.",
};

/**
 * Track WhatsApp engagement
 */
export function trackWhatsAppEngagement(eventType, data = {}) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventType, {
            event_category: "whatsapp_engagement",
            ...data,
        });
    }
}
