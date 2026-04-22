import Head from "next/head";
import { useEffect } from "react";
import { HiCalendar, HiLocationMarker, HiOfficeBuilding } from "react-icons/hi";
import Footer from "../components/footer";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar";
import { experiences } from "../data/experiences.js";

export default function Experience() {
    const [darkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Experience • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
                <meta name="description" content="Jeremy Kenneth's professional work experience — Backend & Mobile Developer at JMC Indonesia, Simetri Dev, and Bangkit Academy by Google." />
                <meta property="og:title" content="Experience • Jeremy Kenneth" />
                <meta property="og:description" content="Professional journey building software solutions for governments, enterprises, and startups across Indonesia." />
                <meta property="og:image" content="/assets/profile.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

                    {/* Section Header */}
                    <div className="py-12 md:py-16">
                        <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">
                            <span className="h-px w-6 bg-current inline-block" />
                            Career
                        </p>
                        <h1 className="font-burtons text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                            Experience
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
                            My professional journey building software solutions for governments, enterprises, and startups across Indonesia.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line (desktop) */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-indigo-400 to-transparent hidden md:block" />

                        <div className="space-y-8 md:space-y-10">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative md:pl-20">
                                    {/* Timeline dot */}
                                    <div className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-sky-500 items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-sky-500" />
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-sky-300 dark:hover:border-sky-700/60 transition-all duration-200 shadow-sm hover:shadow-md">

                                        {/* Header row */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                            <div className="flex items-start gap-4">
                                                {/* Company Avatar */}
                                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-sm">
                                                    <span className="text-white font-bold text-lg select-none">
                                                        {exp.company.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                                        {exp.role}
                                                    </h2>
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sky-500 dark:text-sky-400 font-medium text-sm hover:underline"
                                                    >
                                                        {exp.company}
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/60 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                                                <HiCalendar />
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-5 text-xs text-gray-400 dark:text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <HiLocationMarker />
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <HiOfficeBuilding />
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2.5 mb-5">
                                            {exp.highlights.map((point, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500 mt-[0.45rem]" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 rounded-full border border-sky-100 dark:border-sky-800/50">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
