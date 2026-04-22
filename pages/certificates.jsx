import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuExternalLink, LuZoomIn } from "react-icons/lu";
import Footer from "../components/footer.js";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar.js";
import { certificates } from "../data/certificates.js";

const SkeletonCard = () => (
    <div className="basis-1/4 flex-1 min-w-[240px]">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm h-48 md:h-52" />
    </div>
);

export default function Certificates() {
    const [darkMode] = useLocalStorage("darkMode", false);
    const [isHoveredArray, setIsHoveredArray] = useState(Array(20).fill(false));
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);
    const [zoomedIndex, setZoomedIndex] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }, []);

    const handleHover = (index, isHovered) => {
        setIsHoveredArray(isHoveredArray.map((item, idx) => idx === index ? isHovered : false));
    };

    const handleZoom = (imageSrc, index) => {
        setIsZoomed(true);
        setZoomedImage(imageSrc);
        setZoomedIndex(index);
    };

    const handleCloseZoom = () => {
        setIsZoomed(false);
        setZoomedImage(null);
        setZoomedIndex(null);
    };

    const handleNextImage = () => {
        const nextIndex = (zoomedIndex + 1) % images.length;
        setZoomedImage(images[nextIndex].src);
        setZoomedIndex(nextIndex);
    };

    const handlePreviousImage = () => {
        const previousIndex = zoomedIndex === 0 ? images.length - 1 : zoomedIndex - 1;
        setZoomedImage(images[previousIndex].src);
        setZoomedIndex(previousIndex);
    };

    const images = certificates;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Certificates • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
                <meta name="description" content="Jeremy Kenneth's certifications — Bangkit Academy by Google, Dicoding, Coursera, and more." />
                <meta property="og:title" content="Certificates • Jeremy Kenneth" />
                <meta property="og:description" content="Professional certifications from Bangkit Academy by Google, Dicoding, Coursera, and more." />
                <meta property="og:image" content="/assets/profile.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="py-12 md:py-16">
                        <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">
                            <span className="h-px w-6 bg-current inline-block" />
                            Credentials
                        </p>
                        <h1 className="font-burtons text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                            Certificates
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
                            {images.length} certificates earned from Google, Coursera, Dicoding, and other platforms.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                        {loading
                            ? Array.from({ length: images.length }, (_, index) => <SkeletonCard key={index} />)
                            : images.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700/50 hover:border-sky-300 dark:hover:border-sky-700/60 hover:shadow-md transition-all duration-200"
                                    onMouseEnter={() => handleHover(index, true)}
                                    onMouseLeave={() => handleHover(index, false)}
                                >
                                    <Image
                                        className="w-full object-cover"
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                    {isHoveredArray[index] && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm text-white text-center rounded-xl gap-3 p-4">
                                            <p className="text-xs leading-relaxed">{image.description}</p>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                                    onClick={() => handleZoom(image.src, index)}
                                                    aria-label="Zoom"
                                                >
                                                    <LuZoomIn className="text-lg text-white hover:text-sky-400 transition-colors" />
                                                </button>
                                                <a
                                                    href={image.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                                    aria-label="View certificate"
                                                >
                                                    <LuExternalLink className="text-lg text-white hover:text-sky-400 transition-colors" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                    <Footer />
                </main>
            </div>
            {isZoomed && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={handleCloseZoom}
                >
                    <button
                        className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl z-10 transition-colors"
                        onClick={handleCloseZoom}
                        aria-label="Close"
                    >
                        &#10006;
                    </button>
                    <button
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl z-10 transition-colors"
                        onClick={(e) => { e.stopPropagation(); handlePreviousImage(); }}
                        aria-label="Previous"
                    >
                        &#x2039;
                    </button>
                    <div
                        className="relative w-full max-w-3xl mx-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                width={800}
                                height={600}
                                layout="responsive"
                                src={zoomedImage}
                                alt="Certificate"
                            />
                        </div>
                    </div>
                    <button
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-5xl z-10 transition-colors"
                        onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                        aria-label="Next"
                    >
                        &#x203A;
                    </button>
                </div>
            )}
        </div>
    );
}
