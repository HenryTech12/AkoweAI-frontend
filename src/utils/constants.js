/**
 * Application constants
 */

export const APP_NAME = "AkoweAI";
export const APP_TAGLINE = "Your AI Business Co-Pilot";
export const APP_URL = "https://akowe.ai";

export const COLORS = {
    primary: "#0ea5e9",
    secondary: "#22c55e",
    success: "#16a34a",
    warning: "#f59e0b",
    error: "#dc2626",
    dark: "#1f2937",
    light: "#f9fafb",
    white: "#ffffff",
    gray: "#6b7280",
};

// Twilio WhatsApp Configuration
export const TWILIO = {
    whatsappNumber:
        process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER || "+1456678921",
    sandboxKeyword: process.env.NEXT_PUBLIC_TWILIO_SANDBOX_KEYWORD || "draw-me",
};

export const CONTACT = {
    email: "support@akowe.ai",
    phone: process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER || "+1456678921",
    whatsapp: process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER || "+1456678921",
};

export const SOCIAL_LINKS = {
    twitter: "https://twitter.com/AkoweAI",
    linkedin: "https://linkedin.com/company/akowe-ai",
    instagram: "https://instagram.com/AkoweAI",
    facebook: "https://facebook.com/AkoweAI",
    whatsapp: `https://wa.me/${
        process.env.NEXT_PUBLIC_TWILIO_WHATSAPP_NUMBER || "+1456678921"
    }`,
};

export const NAVIGATION = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export const FEATURES = [
    {
        id: 1,
        icon: "🎤",
        title: "Speak Your Language",
        description: "Voice notes in Pidgin, Yoruba, Igbo, or Hausa",
    },
    {
        id: 2,
        icon: "📸",
        title: "Photo Receipts",
        description: "Snap photos of receipts and we digitize them",
    },
    {
        id: 3,
        icon: "📊",
        title: "Bank-Ready Reports",
        description: "Generate professional financial statements",
    },
    {
        id: 4,
        icon: "🎯",
        title: "Real-Time Analytics",
        description: "Know your business numbers instantly",
    },
    {
        id: 5,
        icon: "🔒",
        title: "Data Security",
        description: "Enterprise-level encryption and privacy",
    },
    {
        id: 6,
        icon: "💰",
        title: "Free Forever",
        description: "Free for traders, banks pay for reports",
    },
];
