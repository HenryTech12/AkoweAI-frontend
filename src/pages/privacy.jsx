import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
    return (
        <>
            <NextSeo
                title="Privacy Policy"
                description="AkoweAI Privacy Policy and Data Protection"
            />
            <Header />
            <main className="min-h-screen bg-white pt-24">
                <div className="container mx-auto px-4 py-12 max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                1. Introduction
                            </h2>
                            <p>
                                AkoweAI ("we", "us", "our" or "Company")
                                operates the akowe.ai website and WhatsApp bot
                                (the "Service").
                            </p>
                            <p>
                                This page informs you of our policies regarding
                                the collection, use, and disclosure of personal
                                data when you use our Service and the choices
                                you have associated with that data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                2. Information Collection and Use
                            </h2>
                            <p>
                                We collect several different types of
                                information:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Personal Data: Phone number, name, business
                                    information
                                </li>
                                <li>
                                    Usage Data: WhatsApp interactions, features
                                    used, timestamps
                                </li>
                                <li>
                                    Analytics Data: Device type, location,
                                    browser information
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                3. Data Security
                            </h2>
                            <p>
                                The security of your data is important to us but
                                remember that no method of transmission over the
                                Internet or method of electronic storage is 100%
                                secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                4. Contact Us
                            </h2>
                            <p>
                                If you have any questions about this Privacy
                                Policy, please contact us at:
                            </p>
                            <p>
                                Email: privacy@akowe.ai
                                <br />
                                WhatsApp:{" "}
                                {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
