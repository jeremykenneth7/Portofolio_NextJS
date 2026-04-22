import Head from "next/head";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import Footer from "../components/footer.js";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar.js";
import ProjectCard from "../components/ProjectCard.js";
import ProjectModal from "../components/ProjectModal.js";
import { CATEGORIES, projects } from "../data/projects.js";


export default function Portfolio() {
    const [darkMode] = useLocalStorage("darkMode", false);
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }, []);

    const filtered = projects.filter((p) => {
        const matchCat = category === "all" || p.category === category;
        const q = search.toLowerCase();
        const matchSearch =
            !q ||
            p.title.toLowerCase().includes(q) ||
            p.tags.some((t) => t.toLowerCase().includes(q)) ||
            p.powered.toLowerCase().includes(q);
        return matchCat && matchSearch;
    });

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Portfolio • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
                <meta name="description" content="Jeremy Kenneth's portfolio — 19+ web, mobile, and backend projects built with Flutter, Next.js, Laravel, Vue.js, and more." />
                <meta property="og:title" content="Portfolio • Jeremy Kenneth" />
                <meta property="og:description" content="19+ web, mobile, and backend projects built with Flutter, Next.js, Laravel, Vue.js, and more." />
                <meta property="og:image" content="/assets/profile.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    {/* Header */}
                    <div className="mb-10">
                        <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">
                            <span className="h-px w-6 bg-current inline-block" />
                            My Work
                        </p>
                        <h1 className="font-burtons text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                            Portoflio
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm leading-relaxed">
                            A collection of projects I&apos;ve built across web, mobile, and backend development — from client work to personal experiments. Each project reflects my passion for crafting seamless user experiences and robust solutions, whether it&apos;s a public-facing website or a backend API. Browse through to see the diversity of my work, ranging from full-stack web applications to mobile apps and backend services.
                        </p>
                    </div>

                    {/* Filters + Search */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                        <div className="flex gap-2 flex-wrap">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => setCategory(cat.key)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === cat.key
                                        ? "bg-sky-500 text-white shadow-sm"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                        <div className="relative sm:ml-auto">
                            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search project or tech..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-8 pr-4 py-1.5 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent w-full sm:w-60"
                            />
                        </div>
                    </div>

                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
                        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                    </p>

                    {/* Grid */}
                    {selectedProject && (
                        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                    )}

                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filtered.map((project, i) => (
                                <ProjectCard key={i} project={project} onCardClick={setSelectedProject} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 text-gray-400 dark:text-gray-500 text-sm">
                            No projects found for &quot;{search}&quot;.
                        </div>
                    )}

                    <div className="mt-16">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    );
}
