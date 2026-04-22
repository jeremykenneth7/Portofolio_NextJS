import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiAcademicCap, HiArrowRight, HiCalendar, HiCode, HiLocationMarker } from "react-icons/hi";
import Footer from "../components/footer";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar";
import deved from "../public/assets/profile.jpg";

const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "19+", label: "Projects Built" },
    { value: "4", label: "Companies" },
    { value: "8+", label: "Technologies" },
];

const education = [
    {
        degree: "Bachelor of Computer Science",
        school: "UPN Veteran Yogyakarta",
        period: "2021 – 2025",
        location: "Yogyakarta, Indonesia",
        note: "Information System, GPA: 3.63/4.00",
    },
];

const skillGroups = [
    {
        label: "Frontend",
        skills: ["Next.js", "React", "Vue.js", "Tailwind CSS", "Flutter"],
    },
    {
        label: "Backend",
        skills: ["Laravel", "Node.js", "Express.js", "Yii2", "PHP"],
    },
    {
        label: "Database & Cloud",
        skills: ["MySQL", "PostgreSQL", "Firebase", "GCP", "Cloud Run"],
    },
    {
        label: "Tools",
        skills: ["Git", "Docker", "Figma", "Postman", "VS Code"],
    },
];

export default function About() {
    const [darkMode] = useLocalStorage("darkMode", false);

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>About • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
                <meta name="description" content="Learn more about Jeremy Kenneth — Full Stack Developer with 3+ years of experience building web and mobile applications across Indonesia." />
                <meta property="og:title" content="About • Jeremy Kenneth" />
                <meta property="og:description" content="Full Stack Developer with 3+ years of experience building web and mobile applications." />
                <meta property="og:image" content="/assets/profile.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

                    {/* Hero section */}
                    <section className="py-12 md:py-16">
                        <div className="grid md:grid-cols-5 gap-12 items-center">

                            {/* Text */}
                            <div className="md:col-span-3">
                                <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">
                                    <span className="h-px w-6 bg-current inline-block" />
                                    Who I Am
                                </p>
                                <h1 className="font-burtons text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
                                    About Me
                                </h1>

                                <div className="space-y-4 text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                                    <p>
                                        Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Jeremy Kenneth</span> — a Full Stack Developer based in Yogyakarta, Indonesia. My journey in software development started during my university years at <span className="font-medium text-gray-700 dark:text-gray-300">UPN Veteran Yogyakarta</span>, where I discovered a deep passion for building things that live on the web and mobile devices.
                                    </p>
                                    <p>
                                        In 2023, I was selected for <span className="font-medium text-gray-700 dark:text-gray-300">Bangkit Academy by Google, GoTo, and Traveloka</span> — a highly competitive program where I specialized in Cloud Computing. This experience sharpened my skills in cloud infrastructure, RESTful APIs, and leading cross-functional teams to deliver real-world applications.
                                    </p>
                                    <p>
                                        Since then, I&apos;ve worked professionally at <span className="font-medium text-gray-700 dark:text-gray-300">JMC Indonesia</span> and currently at <span className="font-medium text-gray-700 dark:text-gray-300">Simetri Dev</span>, delivering software for government agencies, enterprises, and startups — from GIS mapping platforms to loyalty apps used in Australia.
                                    </p>
                                    <p>
                                        Outside of code, I enjoy exploring new frameworks, contributing to open-source, and constantly looking for the next challenge that pushes me to grow as an engineer.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-8">
                                    <Link
                                        href="/portofolio"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                        View Portfolio <HiArrowRight />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 text-sm font-medium rounded-lg transition-colors"
                                    >
                                        Get In Touch
                                    </Link>
                                </div>

                                <div className="flex gap-3 mt-5">
                                    <a
                                        href="https://www.linkedin.com/in/jeremykenneth7/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <AiFillLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/jeremykenneth7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </div>
                            </div>

                            {/* Photo */}
                            <div className="md:col-span-2 flex justify-center">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-3xl rotate-6 opacity-20" />
                                    <div className="absolute inset-0 bg-gradient-to-tl from-sky-300 to-indigo-400 rounded-3xl -rotate-3 opacity-15" />
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                                        <Image
                                            src={deved}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Jeremy Kenneth"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="border-t border-gray-100 dark:border-gray-800 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map(({ value, label }) => (
                                <div key={label} className="text-center p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                    <p className="font-burtons text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 mb-1">
                                        {value}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="border-t border-gray-100 dark:border-gray-800 py-12">
                        <div className="mb-8">
                            <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-2">
                                <HiCode className="text-base" />
                                What I Use
                            </p>
                            <h2 className="font-burtons text-3xl text-gray-900 dark:text-white">
                                Tech Stack
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {skillGroups.map(({ label, skills }) => (
                                <div key={label} className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">{label}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="border-t border-gray-100 dark:border-gray-800 py-12">
                        <div className="mb-8">
                            <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-2">
                                <HiAcademicCap className="text-base" />
                                Background
                            </p>
                            <h2 className="font-burtons text-3xl text-gray-900 dark:text-white">
                                Education
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {education.map((edu, i) => (
                                <div key={i} className="flex gap-5 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-sm">
                                        <HiAcademicCap className="text-white text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">{edu.degree}</h3>
                                        <p className="text-sky-500 dark:text-sky-400 text-sm font-medium mt-0.5">{edu.school}</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{edu.note}</p>
                                        <div className="flex flex-wrap gap-x-4 mt-2 text-xs text-gray-400 dark:text-gray-500">
                                            <span className="flex items-center gap-1"><HiCalendar />{edu.period}</span>
                                            <span className="flex items-center gap-1"><HiLocationMarker />{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
