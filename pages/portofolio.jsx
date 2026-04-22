import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiExternalLink, HiSearch } from "react-icons/hi";
import Footer from "../components/footer.js";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar.js";

// CARA TAMBAH PROJECT BARU:
//   1. Taruh gambar di /public/portofolio/ (opsional)
//   2. Tambah objek baru di array projects di bawah ini
//   3. Kalau tidak ada gambar, isi image: null â†’ otomatis pakai placeholder
const projects = [
    {
        title: "Pasang Baru PT Air Minum Intan Banjar",
        image: "/portofolio/samba.png",
        description: "Website for customers to register new water connections and track registration status.",
        date: "2024",
        link: "https://samba.intanbanjar.id/",
        tags: ["Laravel", "MySQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "SIAP PT Air Minum Intan Banjar",
        image: "/portofolio/siap.png",
        description: "Customer complaint management website with submission form and real-time tracking.",
        date: "2024",
        link: "https://aduan.intanbanjar.id/",
        tags: ["Laravel", "MySQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "Kasil Paniradya Kaistimewaan",
        image: "/portofolio/kasil.png",
        description: "GIS-based website mapping distribution of special fund activity results across Yogyakarta.",
        date: "2024",
        link: "https://kasil.jogjaprov.go.id/",
        tags: ["Laravel", "MySQL", "GIS"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "Jogja Dataku Bappeda DIY",
        image: "/portofolio/dataku.png",
        description: "Regional data portal for Yogyakarta with infographics, master data, and financial data.",
        date: "2024",
        link: "https://bappeda.jogjaprov.go.id/dataku/",
        tags: ["Yii2", "MySQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "Ground Truthed Independent Forestry Monitor",
        image: "/portofolio/ifm.png",
        description: "Forestry data platform with infographics, master data, and financial reporting.",
        date: "2025",
        link: "https://ground-truthed.id",
        tags: ["Laravel", "MySQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "SIGAP Kementrian Lingkungan Hidup",
        image: "/portofolio/sigap.png",
        description: "Forest distribution data portal for the Ministry of Environment and Forestry of Indonesia.",
        date: "2024",
        link: "https://sigap.menlhk.go.id/sigap-frontend-2024/",
        tags: ["Vue.js", "PostgreSQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "Satu Data Kota Kediri",
        image: "/portofolio/kediri.png",
        description: "Open data platform for Kediri City with infographics, master data, and financial data.",
        date: "2024",
        link: "https://satudata.kedirikota.go.id/",
        tags: ["Yii2", "MySQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "Angkasa Penjualan Angkasa Tour and Travel",
        image: "/portofolio/angkasa_pemasaran.png",
        description: "Tour & travel sales platform with payment processing, monitoring, and user management.",
        date: "2024",
        link: "https://angkasatour.co.id/",
        tags: ["Yii2", "MySQL"],
        powered: "JMC Indonesia",
        category: "web",
    },
    {
        title: "Tsunami Warning Center",
        image: "/portofolio/tsunami1.png",
        description: "Realtime earthquake and tsunami warning website using BMKG API and GeoJSON maps.",
        date: "2022",
        link: "https://github.com/jeremykenneth7/Tsunami-Warning-Center",
        tags: ["PHP", "GeoJSON", "MySQL"],
        powered: "UPN Veteran Yogyakarta",
        category: "web",
    },
    {
        title: "Online eCommerce Website",
        image: "/portofolio/onlineshop2.png",
        description: "Full-featured eCommerce app inspired by Tokopedia, built with PHP and Bootstrap.",
        date: "2021",
        link: "https://github.com/jeremykenneth7/Online-eCommerce-Website",
        tags: ["PHP", "MySQL", "Bootstrap"],
        powered: "UPN Veteran Yogyakarta",
        category: "web",
    },
    {
        title: "Storyku Management Website",
        image: "/portofolio/storyku.png",
        description: "Story management app with React frontend and Firebase backend.",
        date: "2024",
        link: "https://storyku.vercel.app/",
        tags: ["React", "Firebase", "Tailwind CSS"],
        powered: "Bangkit Academy 2023",
        category: "web",
    },
    {
        title: "Volcano Eruption Prevention Website",
        image: "/portofolio/gunung.png",
        description: "Disaster mitigation site with volcano info and missing person search for Indonesia.",
        date: "2022",
        link: "https://github.com/jeremykenneth7/Volcano-Eruption-Prevention-Website",
        tags: ["PHP", "MySQL"],
        powered: "UPN Veteran Yogyakarta",
        category: "web",
    },
    {
        title: "Bookshelf Website",
        image: "/portofolio/bookshelf.png",
        description: "Frontend bookshelf app with localStorage â€” add, delete, and search books.",
        date: "2023",
        link: "https://github.com/jeremykenneth7/BookshelfApps-Frontend-LocalStorage",
        tags: ["JavaScript"],
        powered: "Bangkit Academy 2023",
        category: "web",
    },
    // â”€â”€ MOBILE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
        title: "OZ Loyalty Australia",
        image: "/portofolio/oz.png",
        description: "Loyalty program app for small grocery stores in Australia built with Flutter and Firebase.",
        date: "2024",
        link: "https://bit.ly/oz_loyalty",
        tags: ["Flutter", "Firebase"],
        powered: "Client Project",
        category: "mobile",
    },
    {
        title: "Computer Shop Mobile App",
        image: "/portofolio/computershop.png",
        description: "eCommerce mobile app for computer parts with basket and checkout functionality.",
        date: "2023",
        link: "https://github.com/jeremykenneth7/Computer-Shop-MobileApps",
        tags: ["Flutter", "SQLite"],
        powered: "Client Project",
        category: "mobile",
    },
    {
        title: "Stopwatch + Recommended Places App",
        image: "/portofolio/stopwatch.png",
        description: "Flutter app combining a stopwatch utility with place recommendations via API.",
        date: "2023",
        link: "https://github.com/jeremykenneth7/StopwatchApp-Flutter",
        tags: ["Flutter"],
        powered: "Client Project",
        category: "mobile",
    },
    // â”€â”€ BACKEND â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
        title: "CalorEase Capstone Project",
        image: "/portofolio/calorease.png",
        description: "Cloud backend for a calorie tracking app using food image scanning and nutrition data.",
        date: "2023",
        link: "https://github.com/orgs/CalorEase/repositories",
        tags: ["GCP", "Cloud Run", "Cloud Functions"],
        powered: "Bangkit Academy 2023",
        category: "backend",
    },
    {
        title: "Storyku Backend API",
        image: "/portofolio/storyku2.png",
        description: "Express.js + Firebase backend powering the Storyku story management platform.",
        date: "2024",
        link: "https://github.com/jeremykenneth7/StorykuAPI-Backend-ExpressJS",
        tags: ["Express.js", "Firebase", "Cloud Functions"],
        powered: "Bangkit Academy 2023",
        category: "backend",
    },
    {
        title: "Image Prediction Model API",
        image: "/portofolio/flask.jpg",
        description: "REST API for ML image classification deployed via Docker and Google Cloud Run.",
        date: "2023",
        link: "https://github.com/jeremykenneth7/CalorEase-API-2",
        tags: ["Flask", "Python", "Docker", "Cloud Run"],
        powered: "Bangkit Academy 2023",
        category: "backend",
    },
    {
        title: "CalorEase Database API",
        image: "/portofolio/bangkit.jpeg",
        description: "Express.js + Firebase API for the CalorEase app database, deployed on Cloud Functions.",
        date: "2023",
        link: "https://github.com/CalorEase/CaloriesAPI",
        tags: ["Express.js", "Firebase", "Cloud Functions"],
        powered: "Bangkit Academy 2023",
        category: "backend",
    },
];

const CATEGORIES = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "backend", label: "Backend" },
];

function ProjectCard({ project }) {
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

export default function Portfolio() {
    const [darkMode] = useLocalStorage("darkMode", false);
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");

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
                <title>Portfolio â€¢ Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
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
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            Portfolio
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm leading-relaxed">
                            A collection of projects I&apos;ve built across web, mobile, and backend development â€”
                            from government platforms to personal experiments.
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
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filtered.map((project, i) => (
                                <ProjectCard key={i} project={project} />
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
