import Head from "next/head";
import { useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function CV() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    const cvUrl = "/documents/CV-Jeremy-Kenneth.pdf";

    return (
        <>
            <Head>
                <title>CV • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
            </Head>
            <div className="bg-white min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Curriculum Vitae</h1>
                            <p className="text-sm text-gray-500 mt-1">Jeremy Kenneth</p>
                        </div>
                        <a
                            href={cvUrl}
                            download="CV-Jeremy-Kenneth.pdf"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-sky-600 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
                        >
                            <HiDownload />
                            Download
                        </a>
                    </div>

                    {isMobile ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                            <p className="text-gray-500 text-sm">
                                For the best experience, please view my CV on a desktop or laptop. You can download the PDF version using the button above.
                            </p>
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-sky-600 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
                            >
                                Open PDF
                            </a>
                        </div>
                    ) : (
                        <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm"
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
        </>
    );
}
