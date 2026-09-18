import Head from "next/head";
import Link from "next/link";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 — Page Not Found • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
            </Head>
            <div className="bg-white min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center px-4">
                    <div className="text-center max-w-lg">

                        {/* Big 404 */}
                        <p className="font-display text-[8rem] md:text-[10rem] leading-none text-sky-500 select-none">
                            404
                        </p>

                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 -mt-4">
                            Page not found
                        </h1>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                            Oops — the page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-sky-600 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
                            >
                                <HiHome />
                                Back to Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:border-sky-400 hover:text-sky-600 text-sm font-medium rounded-lg transition-colors"
                            >
                                <HiArrowLeft />
                                Go Back
                            </button>
                        </div>
                    </div>
                </main>
                <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <Footer />
                </div>
            </div>
        </>
    );
}
