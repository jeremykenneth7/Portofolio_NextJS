import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import Footer from "../components/footer";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar";

export default function NotFound() {
    const [darkMode] = useLocalStorage("darkMode", false);

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>404 — Page Not Found • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center px-4">
                    <div className="text-center max-w-lg">

                        {/* Big 404 */}
                        <p className="font-burtons text-[8rem] md:text-[10rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-indigo-500 select-none">
                            404
                        </p>

                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3 -mt-4">
                            Page not found
                        </h1>

                        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            Oops — the page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                <HiHome />
                                Back to Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 text-sm font-medium rounded-lg transition-colors"
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
        </div>
    );
}
