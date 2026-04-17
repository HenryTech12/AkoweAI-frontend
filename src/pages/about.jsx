import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <NextSeo
                title="About Us"
                description="Learn about AkoweAI's mission to empower Nigerian traders."
            />
            <Header />
            <main>
                <section className="min-h-screen bg-gradient-to-br from-blue-600 to-green-600 text-white flex items-center pt-20">
                    <div className="container mx-auto px-4 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-8">
                                About AkoweAI
                            </h1>
                            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                                We're building the financial infrastructure for
                                Africa's informal economy.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    Nigeria has 40+ million micro, small, and
                                    medium enterprises (MSMEs), yet 80% are
                                    financially invisible. This means they can't
                                    access credit, insurance, or growth capital.
                                </p>
                                <p className="text-lg text-gray-600">
                                    AkoweAI is the bridge between informal
                                    traders and formal financial systems. We use
                                    AI to help traders document their business,
                                    generate bank-ready financial reports, and
                                    unlock access to credit at scale.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-gray-50 rounded-lg p-8"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Key Stats
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-3xl font-bold text-blue-600">
                                            40M+
                                        </div>
                                        <p className="text-gray-600">
                                            MSMEs in Nigeria
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-green-600">
                                            80%
                                        </div>
                                        <p className="text-gray-600">
                                            Are financially invisible
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-blue-600">
                                            ₦12.8T
                                        </div>
                                        <p className="text-gray-600">
                                            Credit gap annually
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Our Values
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Simplicity",
                                    description:
                                        "Technology should work for traders, not against them.",
                                },
                                {
                                    title: "Trust",
                                    description:
                                        "Your data is yours. Enterprise security for everyone.",
                                },
                                {
                                    title: "Impact",
                                    description:
                                        "We measure success by traders' growth, not just usage.",
                                },
                            ].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                    }}
                                    className="bg-white rounded-lg p-8 shadow-md"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
