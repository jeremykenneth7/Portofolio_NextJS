import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import deved from "../public/assets/profile.jpg";
import { useLocalStorage } from "../components/localstorage";

const techStack = [
  'Flutter', 'Next.js', 'Laravel', 'Node.js',
  'Vue.js', 'React', 'Firebase', 'GCP',
];

export default function Home() {
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
        <title>Jeremy Kenneth • Full Stack Developer</title>
        <link rel="icon" href="/assets/developer.png" />
      </Head>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row items-center gap-10 py-16 md:py-24 min-h-[calc(100vh-4rem)]">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-4">
                <span className="h-px w-6 bg-current inline-block" />
                Hello, I&apos;m
              </p>

              <h1 className="font-burtons text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-4 leading-tight">
                Jeremy<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                  Kenneth
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-5">
                Full-Stack Developer
              </h2>

              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 text-sm md:text-base">
                I build scalable web and mobile applications using modern frameworks.
                Passionate about crafting seamless user experiences — from front-end design
                to robust back-end architecture and mobile development.
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mb-8">
                <a
                  href="/documents/CV-Jeremy-Kenneth.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <HiDownload />
                  Download CV
                </a>
                <Link href="/portofolio">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-400 dark:hover:text-sky-400 text-sm font-medium rounded-lg transition-colors">
                    View Portfolio
                    <HiArrowRight />
                  </a>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-1">
                <a
                  href="mailto:jeremykenneth7@gmail.com"
                  className="p-2.5 rounded-lg text-gray-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:text-sky-400 dark:hover:bg-sky-900/20 transition-colors"
                  aria-label="Email"
                >
                  <AiFillMail className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeremykenneth7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-gray-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:text-sky-400 dark:hover:bg-sky-900/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/jeremykenneth7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-gray-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:text-sky-400 dark:hover:bg-sky-900/20 transition-colors"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-3xl rotate-6 opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-tl from-sky-300 to-indigo-400 rounded-3xl -rotate-3 opacity-15" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                  <Image src={deved} layout="fill" objectFit="cover" alt="Jeremy Kenneth" priority />
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}
