import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiArrowRight, HiCode } from "react-icons/hi";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import deved from "../public/assets/profile.jpg";

const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Built" },
    { value: "5", label: "Companies" },
    { value: "8+", label: "Technologies" },
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
    return (
        <>
            <Head>
                <title>About • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
                <meta name="description" content="Learn more about Jeremy Kenneth — Full Stack Developer with 3+ years of experience building web and mobile applications across Indonesia." />
                <meta property="og:title" content="About • Jeremy Kenneth" />
                <meta property="og:description" content="Full Stack Developer with 3+ years of experience building web and mobile applications." />
                <meta property="og:image" content="/assets/profile.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className="bg-white min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

                    {/* Hero section */}
                    <section className="py-12 md:py-16">
                        <div className="grid md:grid-cols-5 gap-12 items-center">

                            {/* Text */}
                            <div className="md:col-span-3">
                                <p className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium tracking-widest uppercase mb-3">
                                    <span className="h-px w-6 bg-current inline-block" />
                                    Who I Am
                                </p>
                                <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                                    About Me
                                </h1>

                                <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed">
                                    <p>
                                        Hi, I&apos;m <span className="font-semibold text-gray-900">Jeremy Kenneth</span> — a Full Stack Developer based in Yogyakarta, Indonesia. My journey in software development started during my university years, where I discovered a deep passion for building things that live on the web and mobile devices.
                                    </p>
                                    <p>
                                        In 2023, I was selected for <span className="font-medium text-gray-700">Bangkit Academy by Google, GoTo, and Traveloka</span> — a highly competitive program where I specialized in Cloud Computing. This experience sharpened my skills in cloud infrastructure, RESTful APIs, and leading cross-functional teams to deliver real-world applications.
                                    </p>
                                    <p>
                                        Since then, I&apos;ve worked professionally at <span className="font-medium text-gray-700">JMC Indonesia</span> and currently at <span className="font-medium text-gray-700">Simetri Dev</span>, delivering software for government agencies, enterprises, and startups — from GIS mapping platforms to loyalty apps used in Australia.
                                    </p>
                                    <p>
                                        Outside of code, I enjoy exploring new frameworks, contributing to open-source, and constantly looking for the next challenge that pushes me to grow as an engineer.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-8">
                                    <Link
                                        href="/#portfolio"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-sky-600 text-gray-900 text-sm font-semibold rounded-lg transition-colors"
                                    >
                                        View Portfolio <HiArrowRight />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 hover:border-sky-400 hover:text-sky-600 text-sm font-medium rounded-lg transition-colors"
                                    >
                                        Get In Touch
                                    </Link>
                                </div>

                                <div className="flex gap-3 mt-5">
                                    <a
                                        href="https://www.linkedin.com/in/jeremykenneth7/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-sky-400 hover:text-sky-600 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <AiFillLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/jeremykenneth7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-sky-400 hover:text-sky-600 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </div>
                            </div>

                            {/* Photo */}
                            <div className="md:col-span-2 flex justify-center">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 p-3 rounded-3xl bg-white/50 backdrop-blur-xl border border-gray-200 shadow-xl">
                                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                                        <Image
                                            src={deved}
                                            fill
                                            sizes="(max-width: 768px) 288px, 384px"
                                            className="object-cover"
                                            alt="Jeremy Kenneth"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats */}
                    <section className="border-t border-gray-100 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map(({ value, label }) => (
                                <div key={label} className="text-center p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200">
                                    <p className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 py-2 mb-1">
                                        {value}
                                    </p>
                                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="border-t border-gray-100 py-12">
                        <div className="mb-8">
                            <p className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium tracking-widest uppercase mb-2">
                                <HiCode className="text-base" />
                                What I Use
                            </p>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900">
                                Tech Stack
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {skillGroups.map(({ label, skills }) => (
                                <div key={label} className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{label}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 text-xs font-medium bg-white text-gray-700 rounded-lg border border-gray-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Footer />
                </main>
            </div>
        </>
    );
}
