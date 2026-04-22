import Image from "next/image";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectCard({ project }) {
    const [imgError, setImgError] = useState(false);
    const showPlaceholder = !project.image || imgError;

    return (
        <div className="group flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-lg transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30 flex-shrink-0">
                {!showPlaceholder ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl font-bold text-sky-300 dark:text-sky-700 select-none">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}
                <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium bg-white/90 dark:bg-gray-900/80 text-gray-600 dark:text-gray-300 rounded-md backdrop-blur-sm">
                    {project.date}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1.5 line-clamp-2 leading-snug">
                    {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3 line-clamp-3 flex-1">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 text-xs bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-md border border-sky-100 dark:border-sky-800/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700/50">
                    <span className="text-xs text-gray-400 dark:text-gray-500 truncate mr-2">
                        {project.powered}
                    </span>
                    <a
                        href={project.link.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 transition-colors flex-shrink-0"
                    >
                        Visit <HiExternalLink className="text-sm" />
                    </a>
                </div>
            </div>
        </div>
    );
}
