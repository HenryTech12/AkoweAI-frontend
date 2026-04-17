/**
 * Format currency in NGN
 */
export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date) {
    return new Intl.DateTimeFormat("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

/**
 * Delay helper for async operations
 */
export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if running in browser
 */
export function isBrowser() {
    return typeof window !== "undefined";
}

/**
 * Check if mobile device
 */
export function isMobile() {
    if (!isBrowser()) return false;
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

/**
 * Get device type
 */
export function getDeviceType() {
    if (!isBrowser()) return "unknown";

    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) {
        return "mobile";
    }
    if (/tablet/i.test(ua)) {
        return "tablet";
    }
    return "desktop";
}
