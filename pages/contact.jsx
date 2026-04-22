import emailjs from "@emailjs/browser";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiCheckCircle, HiExclamationCircle, HiLocationMarker, HiMail, HiPaperAirplane } from "react-icons/hi";
import Footer from "../components/footer";
import { useLocalStorage } from "../components/localstorage";
import Navbar from "../components/navbar";

// ─── EmailJS config ──────────────────────────────────────────────────────────
// 1. Daftar di https://www.emailjs.com/ (gratis)
// 2. Buat Email Service + Email Template
// 3. Isi nilai di bawah (atau pakai .env.local)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
    {
        icon: HiMail,
        label: "Email",
        value: "jeremykenneth7@gmail.com",
        href: "mailto:jeremykenneth7@gmail.com",
    },
    {
        icon: HiLocationMarker,
        label: "Location",
        value: "Yogyakarta, Indonesia",
        href: null,
    },
];

const socialLinks = [
    {
        icon: AiFillLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jeremykenneth7/",
    },
    {
        icon: AiFillGithub,
        label: "GitHub",
        href: "https://github.com/jeremykenneth7",
    },
    {
        icon: AiFillMail,
        label: "Email",
        href: "mailto:jeremykenneth7@gmail.com",
    },
];

export default function Contact() {
    const [darkMode] = useLocalStorage("darkMode", false);
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (isDarkMode !== null) {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }, []);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
        if (!form.message.trim()) e.message = "Message is required";
        return e;
    };

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setStatus("sending");
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-lg border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-colors focus:ring-2 focus:ring-sky-500 focus:border-transparent ${errors[field]
            ? "border-red-400 dark:border-red-500"
            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
        }`;

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Contact • Jeremy Kenneth</title>
                <link rel="icon" href="/assets/developer.png" />
                <meta name="description" content="Get in touch with Jeremy Kenneth — Full Stack Developer available for freelance, collaboration, or full-time opportunities." />
                <meta property="og:title" content="Contact • Jeremy Kenneth" />
                <meta property="og:description" content="Get in touch with Jeremy Kenneth — Full Stack Developer." />
            </Head>
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Navbar />
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

                    {/* Section Header */}
                    <div className="py-12 md:py-16">
                        <p className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">
                            <span className="h-px w-6 bg-current inline-block" />
                            Get In Touch
                        </p>
                        <h1 className="font-burtons text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                            Contact
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
                            Have a project in mind, a question, or just want to say hi? My inbox is always open — I&apos;ll get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-5 gap-10 mb-16">

                        {/* Left — Info */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Contact info */}
                            <div className="space-y-4">
                                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center">
                                            <Icon className="text-sky-500 dark:text-sky-400 text-lg" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                                            {href ? (
                                                <a href={href} className="text-sm text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors font-medium">
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Availability badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                                </span>
                                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Available for opportunities</span>
                            </div>

                            {/* Social links */}
                            <div>
                                <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Find me on</p>
                                <div className="flex gap-3">
                                    {socialLinks.map(({ icon: Icon, label, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target={href.startsWith("mailto") ? undefined : "_blank"}
                                            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                            aria-label={label}
                                            className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 dark:hover:border-sky-500 transition-colors"
                                        >
                                            <Icon className="text-lg" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="md:col-span-3">
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700/50">
                                {status === "success" ? (
                                    <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                                        <HiCheckCircle className="text-5xl text-emerald-500" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Message sent!</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                                            Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-2 px-5 py-2 text-sm font-medium text-sky-500 border border-sky-300 dark:border-sky-700 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors"
                                        >
                                            Send another
                                        </button>
                                    </div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                                    Name <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className={inputClass("name")}
                                                />
                                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                            </div>
                                            {/* Email */}
                                            <div>
                                                <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                                    Email <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className={inputClass("email")}
                                                />
                                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder="Project collaboration, job opportunity..."
                                                className={inputClass("subject")}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
                                                Message <span className="text-red-400">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Tell me about your project or just say hello..."
                                                className={`${inputClass("message")} resize-none`}
                                            />
                                            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                        </div>

                                        {/* Error banner */}
                                        {status === "error" && (
                                            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                                                <HiExclamationCircle className="flex-shrink-0 text-lg" />
                                                Failed to send. Please try emailing directly at jeremykenneth7@gmail.com
                                            </div>
                                        )}

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-400 text-white text-sm font-medium rounded-lg transition-colors"
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                    </svg>
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    <HiPaperAirplane className="rotate-90" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        </div>
    );
}
