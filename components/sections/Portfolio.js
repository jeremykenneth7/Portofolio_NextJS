import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiX, HiChevronLeft, HiChevronRight, HiOutlineExternalLink, HiOutlineCalendar, HiOutlineOfficeBuilding } from "react-icons/hi";
import { useScrollReveal } from "../useScrollReveal";
import { projects } from "../../data/projects.js";

const featuredProjects = projects.filter((p) => p.featured);

const logos = [
    { name: "Direktorat Jenderal Imigrasi", src: "/logos/imigrasi.webp" },
    { name: "Paniradya Kaistimewaan", src: "/logos/kasil.png", bg: "bg-slate-800" },
    { name: "Dynamics Home Decor & Interior", src: "/logos/dynamics.png" },
    { name: "JMC Indonesia", src: "/logos/jmc.png" },
    { name: "Simetri Dev", src: "/logos/simetri.png" },
    { name: "Angkasa Tour and Travel", src: "/logos/angkasatour.webp" },
    { name: "Dinas Pariwisata Kabupaten Bantul", src: "/logos/bantul.png" },
    { name: "Bintang Nusantara", src: "/logos/bintangnusantara.svg" },
    { name: "Bintang Oli", src: "/logos/bintangoli.svg" },
    { name: "Koperasi Simpan Pinjam Artha Parama Berkembang", src: "/logos/kspartha.png" },
    { name: "Toko Emas Kembang", src: "/logos/tokoemas-admin.png" },
];

export default function Portfolio() {
    const [ref, visible] = useScrollReveal();
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <section
            id="portfolio"
            ref={ref}
            className={`py-16 md:py-20 scroll-mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
            <div className="mb-10 md:mb-12">
                <p className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium tracking-widest uppercase mb-3">
                    <span className="h-px w-6 bg-current inline-block" />
                    Fixtures
                </p>
                <h2 className="font-display text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 mb-4">
                    Portfolio
                </h2>
                <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
                    A few highlights from the web, mobile, and backend projects I&apos;ve shipped.
                </p>
            </div>

            {/* Companies & clients worked with — logo carousel, shown first */}
            <div className="mb-14">
                <p className="text-center text-xs font-medium tracking-widest uppercase text-gray-400 mb-6">
                    Trusted by teams &amp; institutions across Indonesia
                </p>
                <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex w-max gap-6 animate-marquee group-hover/marquee:[animation-play-state:paused]">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className={`relative flex-shrink-0 w-36 h-16 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center p-3 ${logo.bg || 'bg-white'}`}
                                title={logo.name}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    sizes="144px"
                                    className="object-contain p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredProjects.map((project, index) => (
                    <div
                        key={index}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        className={`group border border-gray-200 rounded-xl overflow-hidden hover:border-sky-300 hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white/60 backdrop-blur-md shadow-sm hover:shadow-xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        onClick={() => openModal(project)}
                    >
                        <div className="relative w-full h-48 overflow-hidden bg-white">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <p className="text-gray-900 font-semibold mb-2 text-sm leading-snug">{project.title}</p>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedProject && (
                <Modal
                    project={selectedProject}
                    closeModal={closeModal}
                    projects={featuredProjects}
                />
            )}
        </section>
    );
}

const Modal = ({ project, closeModal, projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentIndex((currentIndex + 1) % projects.length);
    };

    const handlePreviousProject = () => {
        setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        setCurrentIndex(projects.findIndex((p) => p.title === project.title));
    }, [project, projects]);

    const currentProject = projects[currentIndex];

    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) closeModal();
    };

    return createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900/70 backdrop-blur-md z-50 p-4" onClick={handleCloseModal}>
            <div className="relative bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 shadow-sm transition-colors"
                    aria-label="Close"
                >
                    <HiX className="text-lg" />
                </button>

                <div className="relative w-full bg-white rounded-t-2xl overflow-hidden">
                    <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        width={currentProject.imageWidth}
                        height={currentProject.imageHeight}
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="w-full h-auto"
                    />

                    {projects.length > 1 && (
                        <>
                            <button
                                onClick={handlePreviousProject}
                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-gray-600 hover:text-sky-600 shadow-sm transition-colors"
                                aria-label="Previous project"
                            >
                                <HiChevronLeft className="text-lg" />
                            </button>
                            <button
                                onClick={handleNextProject}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-gray-600 hover:text-sky-600 shadow-sm transition-colors"
                                aria-label="Next project"
                            >
                                <HiChevronRight className="text-lg" />
                            </button>
                        </>
                    )}
                </div>

                <div className="p-6 md:p-8">
                    <h3 className="text-gray-900 text-xl font-bold mb-2">{currentProject.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{currentProject.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {currentProject.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-sky-50 text-sky-700 rounded-full border border-sky-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <HiOutlineCalendar className="text-sm" />
                            {currentProject.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <HiOutlineOfficeBuilding className="text-sm" />
                            {currentProject.powered}
                        </span>
                    </div>

                    <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-accent hover:bg-sky-600 text-gray-900 rounded-lg transition-colors"
                    >
                        Visit the Project
                        <HiOutlineExternalLink />
                    </a>
                </div>
            </div>
        </div>,
        document.body
    );
};
