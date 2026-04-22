import Head from "next/head";
import { useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import Footer from "../components/footer";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar";

export default function CV() {
    const [darkMode] = useLocalStorage('darkMode', false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    const cvUrl = "/documents/CV-Jeremy-Kenneth.pdf";

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>CV • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Curriculum Vitae</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Jeremy Kenneth</p>
                        </div>
                        <a
                            href={cvUrl}
                            download="CV-Jeremy-Kenneth.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <HiDownload />
                            Download
                        </a>
                    </div>

                    {isMobile ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Browser mobile tidak mendukung preview PDF secara langsung.
                            </p>
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                Buka PDF
                            </a>
                        </div>
                    ) : (
                        <div className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"
                            style={{ height: '80vh' }}>
                            <iframe
                                src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                                className="w-full h-full"
                                title="CV Jeremy Kenneth"
                            />
                        </div>
                    )}
                </main>
                <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
