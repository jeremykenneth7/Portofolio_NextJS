import Image from "next/image";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LuExternalLink, LuZoomIn } from "react-icons/lu";
import { useScrollReveal } from "../useScrollReveal";
import { certificates } from "../../data/certificates.js";

const highlightAlts = ["bangkit", "preparing", "sysmin"];
const highlighted = highlightAlts.map((alt) => certificates.find((c) => c.alt === alt)).filter(Boolean);
const rest = certificates.filter((c) => !highlightAlts.includes(c.alt));
const images = [...highlighted, ...rest];

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

    // Drag-to-scroll for mouse users (touch/trackpad already scroll natively)
    const trackRef = useRef(null);
    const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

    const onPointerDown = (e) => {
        drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
    };
    const onPointerMove = (e) => {
        if (!drag.current.active) return;
        const delta = e.clientX - drag.current.startX;
        if (Math.abs(delta) > 5) drag.current.moved = true;
        trackRef.current.scrollLeft = drag.current.startScroll - delta;
    };
    const endDrag = () => {
        drag.current.active = false;
    };
    // Swallow the click that follows a drag so it doesn't trigger zoom/link
    const onClickCapture = (e) => {
        if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
        }
    };

    return (
        <section
            id="certificates"
            ref={ref}
            className={`py-16 md:py-20 scroll-mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
            <div className="mb-10 md:mb-12">
                <p className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium tracking-widest uppercase mb-3">
                    <span className="h-px w-6 bg-current inline-block" />
                    Credentials
                </p>
                <h2 className="font-display text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 mb-4">
                    Certificates
                </h2>
                <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
                    {certificates.length} certificates earned from Google, Coursera, Dicoding, and other platforms — drag sideways to see more.
                </p>
            </div>

            <div
                ref={trackRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onClickCapture={onClickCapture}
                className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-proximity cursor-grab active:cursor-grabbing select-none [scrollbar-width:thin]"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{ transitionDelay: `${Math.min(index, 6) * 80}ms` }}
                        className={`flex-shrink-0 w-64 snap-start rounded-xl overflow-hidden border border-gray-200 bg-white/60 backdrop-blur-md hover:border-sky-300 transition-all duration-500 shadow-sm hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="relative aspect-[4/3] pointer-events-none">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="256px"
                                className="object-cover"
                                draggable={false}
                            />
                        </div>
                        <div className="p-4 flex items-center justify-between gap-3">
                            <p className="text-xs text-gray-600 leading-relaxed">{image.description}</p>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                                <button
                                    className="p-2 rounded-lg bg-white/60 border border-gray-200 text-gray-500 hover:bg-accent hover:text-gray-900 hover:border-accent transition-colors"
                                    onClick={() => handleZoom(index)}
                                    aria-label="Zoom"
                                >
                                    <LuZoomIn className="text-sm" />
                                </button>
                                <a
                                    href={image.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/60 border border-gray-200 text-gray-500 hover:bg-accent hover:text-gray-900 hover:border-accent transition-colors"
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
                        className="absolute top-5 right-6 text-white/70 hover:text-accent text-3xl z-10 transition-colors"
                        onClick={handleCloseZoom}
                        aria-label="Close"
                    >
                        &#10006;
                    </button>
                    <button
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-accent text-5xl z-10 transition-colors"
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
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-accent text-5xl z-10 transition-colors"
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
