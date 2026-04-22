import Image from "next/image";
import { useEffect, useState } from "react";
import { HiExternalLink, HiX } from "react-icons/hi";

export default function ProjectModal({ project, onClose }) {
    const [imgError, setImgError] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    if (!project) return null;
    const showPlaceholder = !project.image || imgError;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm"
                    aria-label="Close"
                >
                    <HiX />
                </button>

                {/* Image */}
                <div className="relative h-56 sm:h-72 w-full bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30 rounded-t-2xl overflow-hidden flex-shrink-0">
                    {!showPlaceholder ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-cover"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-7xl font-bold text-sky-300 dark:text-sky-700 select-none">
                                {project.title.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-snug mb-1">
                                {project.title}
                            </h2>
                            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                                <span>{project.date}</span>
                                {project.powered && (
                                    <>
                                        <span>·</span>
                                        <span>{project.powered}</span>
                                    </>
                                )}
                            </div>
                        </div>
                        <span className="flex-shrink-0 px-2.5 py-1 text-xs font-medium bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-full border border-sky-100 dark:border-sky-800/50 capitalize">
                            {project.category}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6">
                        <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-medium bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full border border-sky-100 dark:border-sky-800/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    {project.link && (
                        <a
                            href={project.link.trim()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <HiExternalLink />
                            Visit Project
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
