import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import deved from "../../public/assets/profile.jpg";
import { useScrollReveal } from "../useScrollReveal";

const techStack = [
    'Laravel', 'Next.js', 'React', 'Vue.js',
    'Node.js', 'Flutter', 'Firebase', 'GCP',
];

const CornerBracket = ({ className }) => (
    <span className={`absolute w-6 h-6 border-sky-400 ${className}`} />
);

export default function Hero() {
    const [ref, visible] = useScrollReveal();

    return (
        <section
            id="top"
            ref={ref}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 py-16 md:py-24 min-h-[calc(100vh-4rem)] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
                <p className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium tracking-widest uppercase mb-4">
                    <span className="h-px w-6 bg-current inline-block" />
                    Hello, I&apos;m
                </p>

                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight font-extrabold text-gray-900 mb-4 leading-none">
                    Jeremy<br />
                    <span className="text-sky-500">Kenneth</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-5">
                    Full-Stack Developer
                </h2>

                <p className="text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0 mb-6 text-sm md:text-base">
                    Full-stack developer with 3+ years building production software for government
                    agencies, enterprises, and startups across Indonesia. I turn complex requirements
                    into scalable web and mobile applications — architecting reliable backends,
                    integrating APIs, and shipping interfaces people actually enjoy using.
                </p>

                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-8 mb-8">
                    {[
                        { value: '3+', label: 'Years Experience' },
                        { value: '20+', label: 'Projects Shipped' },
                        { value: '7+', label: 'Clients & Institutions' },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <p className="font-display text-3xl font-extrabold text-gray-900 leading-none mb-1">{stat.value}</p>
                            <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-white/60 backdrop-blur-md text-gray-600 rounded-full border border-gray-200 shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mb-8">
                    <Link
                        href="/cv"
                        className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        <HiDownload className="text-base group-hover:translate-y-0.5 transition-transform duration-300" />
                        View CV
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-3">
                    <a
                        href="mailto:jeremykenneth7@gmail.com"
                        className="p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
                        aria-label="Email"
                    >
                        <AiFillMail className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeremykenneth7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <AiFillLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://github.com/jeremykenneth7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
                        aria-label="GitHub"
                    >
                        <AiFillGithub className="text-xl" />
                    </a>
                </div>
            </div>

            {/* Profile Image with ornate corner frame */}
            <div className="flex-shrink-0">
                <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 p-3 rounded-3xl bg-white/50 backdrop-blur-xl border border-gray-200 shadow-xl">
                    <CornerBracket className="top-0 left-0 border-t-2 border-l-2" />
                    <CornerBracket className="top-0 right-0 border-t-2 border-r-2" />
                    <CornerBracket className="bottom-0 left-0 border-b-2 border-l-2" />
                    <CornerBracket className="bottom-0 right-0 border-b-2 border-r-2" />
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <Image src={deved} fill sizes="(max-width: 768px) 240px, 320px" className="object-cover" alt="Jeremy Kenneth" priority />
                    </div>
                </div>
            </div>
        </section>
    );
}
