/**
 * Track custom events with Google Analytics
 */
export function trackEvent(category, action, label, value) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
}

/**
 * Track page views
 */
export function trackPageView(path) {
    trackEvent("page_view", "view", path);
}

/**
 * Track conversions
 */
export function trackConversion(type, value) {
    trackEvent("conversion", type, type, value);
}

/**
 * Track user engagement
 */
export function trackEngagement(type, label) {
    trackEvent("engagement", type, label);
}

/**
 * Performance monitoring hook
 */
export function initPerformanceMonitoring() {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (window.gtag) {
                        window.gtag("event", "page_speed", {
                            event_category: "performance",
                            event_label: entry.name,
                            value: Math.round(entry.duration),
                        });
                    }
                }
            });

            observer.observe({
                entryTypes: ["paint", "navigation"],
            });
        } catch (e) {
            console.error("Performance monitoring error:", e);
        }
    }
}
