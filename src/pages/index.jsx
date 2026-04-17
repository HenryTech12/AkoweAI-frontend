import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <NextSeo
                title="AkoweAI"
                description="Manage your informal business with voice notes and receipts. Generate bank-ready financial reports. Free for traders."
            />
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
