import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { LuExternalLink, LuZoomIn } from "react-icons/lu";
import { useScrollReveal } from "../useScrollReveal";
import { certificates } from "../../data/certificates.js";

const highlightAlts = ["bangkit", "preparing", "sysmin"];
const images = highlightAlts
    .map((alt) => certificates.find((c) => c.alt === alt))
    .filter(Boolean);

export default function Certificates() {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedIndex, setZoomedIndex] = useState(null);

    const handleZoom = (index) => {
        setZoomedIndex(index);
        setIsZoomed(true);
    };

    const handleCloseZoom = () => {
        setIsZoomed(false);
        setZoomedIndex(null);
    };

    const handleNextImage = () => setZoomedIndex((zoomedIndex + 1) % images.length);
    const handlePreviousImage = () => setZoomedIndex(zoomedIndex === 0 ? images.length - 1 : zoomedIndex - 1);

    const [ref, visible] = useScrollReveal();

    return (
        <section
            id="certificates"
            ref={ref}
            className={`py-16 md:py-20 scroll-mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
            <div className="mb-10 md:mb-12">
                <p className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium tracking-widest uppercase mb-3">
                    <span className="h-px w-6 bg-current inline-block" />
                    Credentials
                </p>
                <h2 className="font-display text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 mb-4">
                    Certificates
                </h2>
                <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
                    A few highlights — {certificates.length} certificates earned in total from Google, Coursera, Dicoding, and other platforms.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        className={`rounded-xl overflow-hidden border border-gray-200 bg-white/60 backdrop-blur-md hover:border-amber-300 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4 flex items-center justify-between gap-3">
                            <p className="text-xs text-gray-600 leading-relaxed">{image.description}</p>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                                <button
                                    className="p-2 rounded-lg bg-white/60 border border-gray-200 text-gray-500 hover:bg-gold hover:text-gray-900 hover:border-gold transition-colors"
                                    onClick={() => handleZoom(index)}
                                    aria-label="Zoom"
                                >
                                    <LuZoomIn className="text-sm" />
                                </button>
                                <a
                                    href={image.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/60 border border-gray-200 text-gray-500 hover:bg-gold hover:text-gray-900 hover:border-gold transition-colors"
                                    aria-label="View certificate"
                                >
                                    <LuExternalLink className="text-sm" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isZoomed && createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={handleCloseZoom}
                >
                    <button
                        className="absolute top-5 right-6 text-white/70 hover:text-gold text-3xl z-10 transition-colors"
                        onClick={handleCloseZoom}
                        aria-label="Close"
                    >
                        &#10006;
                    </button>
                    <button
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold text-5xl z-10 transition-colors"
                        onClick={(e) => { e.stopPropagation(); handlePreviousImage(); }}
                        aria-label="Previous"
                    >
                        &#x2039;
                    </button>
                    <div className="relative w-full max-w-3xl mx-6" onClick={(e) => e.stopPropagation()}>
                        <div className="relative aspect-[4/3] rounded overflow-hidden">
                            <Image
                                src={images[zoomedIndex].src}
                                alt="Certificate"
                                fill
                                sizes="100vw"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <button
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-gold text-5xl z-10 transition-colors"
                        onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                        aria-label="Next"
                    >
                        &#x203A;
                    </button>
                </div>,
                document.body
            )}
        </section>
    );
}
