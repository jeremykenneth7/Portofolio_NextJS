import { useScrollReveal } from "../useScrollReveal";
import { experiences } from "../../data/experiences.js";

export default function Experience() {
    const [ref, visible] = useScrollReveal();

    return (
        <section
            id="experience"
            ref={ref}
            className={`py-16 md:py-20 scroll-mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
            <div className="mb-10 md:mb-12">
                <p className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium tracking-widest uppercase mb-3">
                    <span className="h-px w-6 bg-current inline-block" />
                    Career
                </p>
                <h2 className="font-display text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 mb-4">
                    Experience
                </h2>
                <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
                    Roles I&apos;ve held building software for governments, enterprises, and startups across Indonesia.
                </p>
            </div>

            <div className="divide-y divide-gray-200">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        style={{ transitionDelay: `${index * 80}ms` }}
                        className={`py-6 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    >
                        <span className="md:w-36 flex-shrink-0 text-xs font-medium text-gray-400">
                            {exp.period}
                        </span>

                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-2 mb-1.5">
                                <h3 className="text-base font-semibold text-gray-900">{exp.role}</h3>
                                <span className="text-gray-300">·</span>
                                {exp.companyUrl ? (
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-sky-600 hover:underline"
                                    >
                                        {exp.company}
                                    </a>
                                ) : (
                                    <span className="text-sm font-medium text-sky-600">{exp.company}</span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed mb-2 max-w-2xl">
                                {exp.highlights[0]}
                            </p>
                            <p className="text-xs text-gray-400">
                                {exp.tags.join(' · ')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
