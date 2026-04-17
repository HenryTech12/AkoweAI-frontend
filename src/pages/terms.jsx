import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
    return (
        <>
            <NextSeo
                title="Terms of Service"
                description="AkoweAI Terms of Service and Conditions"
            />
            <Header />
            <main className="min-h-screen bg-white pt-24">
                <div className="container mx-auto px-4 py-12 max-w-3xl">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900">
                        Terms of Service
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                1. Terms
                            </h2>
                            <p>
                                By accessing this website and using AkoweAI, you
                                accept and agree to be bound by the terms and
                                provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                2. Use License
                            </h2>
                            <p>
                                Permission is granted to temporarily download
                                one copy of the materials (information or
                                software) on AkoweAI for personal,
                                non-commercial transitory viewing only. This is
                                the grant of a license, not a transfer of title.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                3. Disclaimer of Warranties
                            </h2>
                            <p>
                                The materials on AkoweAI are provided on an "as
                                is" basis. AkoweAI makes no warranties,
                                expressed or implied, and hereby disclaims and
                                negates all other warranties including, without
                                limitation, implied warranties or conditions of
                                merchantability, fitness for a particular
                                purpose, or non-infringement of intellectual
                                property or other violation of rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                4. Limitations of Liability
                            </h2>
                            <p>
                                In no event shall AkoweAI or its suppliers be
                                liable for any damages (including, without
                                limitation, damages for loss of data or profit,
                                or due to business interruption) arising out of
                                the use or inability to use the materials on
                                AkoweAI.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                5. Accuracy of Materials
                            </h2>
                            <p>
                                The materials appearing on AkoweAI could include
                                technical, typographical, or photographic
                                errors. AkoweAI does not warrant that any of the
                                materials on our website are accurate, complete,
                                or current.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                6. Contact Information
                            </h2>
                            <p>
                                If you have any questions about these Terms of
                                Service, please contact us at:
                            </p>
                            <p>
                                Email: support@akowe.ai
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
