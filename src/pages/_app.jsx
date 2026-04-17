import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import { initPerformanceMonitoring } from "../utils/analytics";

const defaultSEO = {
    titleTemplate: "%s | AkoweAI",
    defaultTitle: "AkoweAI - AI Business Co-Pilot for Nigerian Traders",
    description:
        "Manage your informal business with voice notes and receipts. Generate bank-ready financial reports. Free for traders.",
    canonical: "https://akowe.ai",
    openGraph: {
        type: "website",
        locale: "en_NG",
        url: "https://akowe.ai",
        title: "AkoweAI - AI Business Co-Pilot",
        description: "Turn informal trade into formal growth",
        images: [
            {
                url: "https://akowe.ai/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AkoweAI - AI Business Co-Pilot for Nigerian Traders",
            },
        ],
    },
    twitter: {
        handle: "@AkoweAI",
        site: "@AkoweAI",
        cardType: "summary_large_image",
    },
};

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Initialize analytics
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", process.env.NEXT_PUBLIC_GA_ID);

        // Initialize performance monitoring
        initPerformanceMonitoring();
    }, []);

    return (
        <>
            <DefaultSeo {...defaultSEO} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
