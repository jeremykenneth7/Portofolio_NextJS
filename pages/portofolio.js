import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { bangkit, bimbel, bookshelf, calorease, computershop, flask, gunung, onlineshop2, stopwatch, tsunami1, tsunami2 } from "../public/portofolio/index.js";

const SkeletonLoading = () => (
    <div className="basis-1/4 flex-1">
        <div className="rounded-lg overflow-hidden shadow-md">
            <div className="h-44 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            <div className="p-10 h-40">
                <div className="h-6 w-full mb-5 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="h-12 w-full bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            </div>
        </div>
    </div>
);

const TextSkeletonLoading = () => (
    <div className="pb-10 flex flex-col md:flex-row items-start md:items-center">
        <div className="w-full ">
            <div className="mb-3 h-4 w-full mt-12 md:mt-6 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="mb-3 h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="mb-3 h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="mb-10 h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded-md"></div>

            <div className="mt-10 mb-3 h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="mb-3 h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="mb-3 h-4 w-full bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            <div className="h-4 w-72 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
        </div>
    </div>
);

const ButtonSkeletonLoading = ({ buttons, className }) => (
    <div className={className}>
        {Array.from({ length: buttons }, (_, index) => (
            <div key={index} className={`mx-2 py-2 h-10 rounded-lg bg-gray-300 dark:bg-gray-600`}></div>
        ))}
    </div>
);

export default function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1250);

        return () => clearTimeout(timer);
    }, []);
    const [currentCategory, setCurrentCategory] = useState('all');

    const webProjects = [
        {
            title: "Tsunami Warning Center",
            image: tsunami1,
            description: "Website for Tsunami Disaster and Warning Center with BMKG API on Realtime Earthquake data +5.0 Magnitudo and Realtime Maps with GeoJSON prevention Tsunami Warning in Indonesia",
            date: "2022",
            link: "https://github.com/jeremykenneth7/Tsunami-Warning-Center",
            language: "PHP + GeoJSON + My SQL + Bootstrap"
        },
        {
            title: "Tsunami Warning Center 2",
            image: tsunami2,
            description: "Website for Tsunami Disaster and Warning Center with BMKG API on Realtime Earthquake data +5.0 Magnitudo and Realtime Maps with GeoJSON prevention Tsunami Warning in Indonesia",
            link: "https://github.com/jeremykenneth7/Tsunami-Warning-Center",
            language: "PHP + GeoJSON + My SQL + Bootstrap",
            date: "2022",
        },
        {
            title: "Online e-Commerce Website",
            image: onlineshop2,
            description: "🥦 It is an eCommerce app inspired by Tokopedia Website 📱 built to demonstrate the use of web development tools. Build and Developed with PHP, Bootstrap, My SQL",
            link: "https://github.com/jeremykenneth7/Online-eCommerce-Website",
            language: "PHP + Bootstrap + My SQL",
            date: "2021",
        },

        {
            title: "Volcano Eruption Prevention Website",
            image: gunung,
            description: "Website for Volcano Eruption Prevention Website in Indonesia with disaster mitigation and feature for searching missing person.",
            link: "https://github.com/jeremykenneth7/Volcano-Eruption-Prevention-Website",
            language: "PHP + Bootstrap + My SQL",
            date: "2022",
        },
        {
            title: "Website Bimbel Online",
            image: bimbel,
            description: "Website for Online Learning named Belajar Online for helping Indonesia Student study from anywhere",
            link: "",
            language: "PHP + Bootstrap + My SQL",
            date: "2023",
        },
        {
            title: "Bookshelf Website",
            image: bookshelf,
            description: "A Frontend Development Website for Bookshelf that connect with Local Storage on Device. Build and Developed with JavaScript",
            link: "https://github.com/jeremykenneth7/BookshelfApps-Frontend-LocalStorage",
            language: "JavaScript",
            date: "2023",
        },
    ];

    const mobileProjects = [
        {
            title: "Computer Shop Mobile Application",
            image: computershop,
            description: "A Mobile Development Application for Recommended Places and Stopwatch inside of it. Build and Developed with Flutter",
            link: "https://github.com/jeremykenneth7/Computer-Shop-MobileApps",
            language: "Flutter",
            date: "2023",
        },
        {
            title: "Stopwatch + Recommended Places Mobile Application",
            image: stopwatch,
            description: "A Mobile Development Application for Computer Shop that connect with API and Database. Build and Developed with Flutter",
            link: "https://github.com/jeremykenneth7/StopwatchApp-Flutter",
            language: "Flutter",
            date: "2023",
        },
    ];

    const backendProjects = [
        {
            title: "CalorEase",
            image: calorease,
            description: "Application that focusing on helping people control the number of calories eaten each day by scanning the food image after that can get the nutrition",
            link: "https://github.com/orgs/CalorEase/repositories",
            language: "Google Cloud Storage , Cloud Run , Cloud Functions",
            date: "2023",
        },
        {
            title: "Application Database API Creation",
            image: bangkit,
            description: "API for Calories Application with Database using Express JS and Firebase. For the deployment using Google Cloud Functions",
            link: "https://github.com/CalorEase/CaloriesAPI",
            language: "Express JS + Firebase + Cloud Functions",
            date: "2023",
        },
        {
            title: "Machine Learning Model API Creation",
            image: flask,
            description: "API for Machine Learning Model in Calories Application using Flask as a REST-API and for the deployment using Docker and Google Cloud Run",
            link: "https://github.com/jeremykenneth7/CalorEase-API-2",
            language: "Flask API Python + Google Cloud Storage + Docker + Cloud Run",
            date: "2023",
        },
    ];

    const filteredProjects = currentCategory === 'web' ? webProjects :
        currentCategory === 'mobile' ? mobileProjects :
            currentCategory === 'backend' ? backendProjects :
                currentCategory === 'all' ? [...backendProjects, ...webProjects, ...mobileProjects] :
                    [];

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
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Portofolio • Jeremy Kenneth</title>
                <link rel="icon" href="/developer.png" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div>
                    {loading ? (
                        <TextSkeletonLoading lines={8} className="font-mono text-md py-5 mb-8 leading-8 text-gray-800 dark:text-gray-200 md:text-lg text-justify" />
                    ) : (
                    <p className="font-mono text-md py-5 mb-8 leading-8 text-gray-800 dark:text-gray-200 md:text-lg text-justify">
                        &emsp; Crafting a compelling portfolio to showcase my extensive experience in Full-Stack Development + Mobile Development has been a rewarding journey. Through a dynamic blend of creativity and technical prowess, I have meticulously curated a collection of projects that encapsulate my proficiency in crafting seamless application and website.
                        < br />
                        < br />
                        &emsp; From responsive website that adapt flawlessly to diverse screen sizes to interactive interfaces that engage users intuitively. Each project stands as a testament to my mastery of Flutter, PHP, React JS, Next JS, Laravel and other cutting-edge technologies, which I seamlessly integrate to breathe life into my programming experience.
                    </p>
                    )}
                </div>
                {/* Mobile view */}
                <div className="md:hidden flex flex-wrap justify-center md:justify-start mb-8">
                    {loading ? (
                        <ButtonSkeletonLoading buttons={2} className="w-full md:w-auto flex flex-wrap justify-center" />
                    ) : (
                    <div className="w-full md:w-auto flex flex-wrap justify-center">
                        <button onClick={() => setCurrentCategory('all')} className={`mx-2 mb-2 px-[1.8rem] py-2 rounded-lg text-sm ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All Projects</button>
                        <button onClick={() => setCurrentCategory('web')} className={`mx-2 mb-2 px-[1.8rem] py-2 rounded-lg text-sm ${currentCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Web Projects</button>
                    </div>
                    )}
                    {loading ? (
                        <ButtonSkeletonLoading buttons={2} className="w-full md:w-auto flex flex-wrap justify-center" />
                    ) : (
                    <div className="w-full md:w-auto flex flex-wrap justify-center">
                        <button onClick={() => setCurrentCategory('mobile')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Mobile Projects</button>
                        <button onClick={() => setCurrentCategory('backend')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Backend Projects</button>
                    </div>
                    )}
                </div>
                {/* Desktop view */}
                <div className="hidden md:flex justify-center gap-8 mb-10">
                    {loading ? (
                        <ButtonSkeletonLoading buttons={1} className="mx-2 w-44 h-10 py-2 rounded-lg" />
                    ) : (
                    <button onClick={() => setCurrentCategory('all')} className={`mx-2 px-8 py-2 rounded-lg ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All Projects</button>
                    )}
                    {loading ? (
                        <ButtonSkeletonLoading buttons={1} className="mx-2 w-44 py-2 rounded-lg" />
                    ) : (
                    <button onClick={() => setCurrentCategory('web')} className={`mx-2 px-8 py-2 rounded-lg ${currentCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Web Projects</button>
                    )}
                    {loading ? (
                        <ButtonSkeletonLoading buttons={1} className="mx-2 w-44 py-2 rounded-lg" />
                    ) : (
                    <button onClick={() => setCurrentCategory('mobile')} className={`mx-2 px-6 py-2 rounded-lg ${currentCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Mobile Projects</button>
                    )}
                    {loading ? (
                        <ButtonSkeletonLoading buttons={1} className="mx-2 w-44 py-2 rounded-lg" />
                    ) : (
                    <button onClick={() => setCurrentCategory('backend')} className={`mx-2 px-6 py-2 rounded-lg ${currentCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Backend Projects</button>
                    )}
                </div>
                {/* Projects by Category */}
                <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
                    {(loading ? Array.from({ length: 6 }) : filteredProjects).map((project, index) => (
                        <React.Fragment key={index}>
                            {loading ? (
                                <SkeletonLoading />
                            ) : ( <div className="basis-1/4 flex-1">
                            <div className="rounded-lg overflow-hidden shadow-md">
                                <div
                                    className="relative cursor-pointer"
                                    onClick={() => openModal(project)}
                                    onMouseEnter={(e) => e.currentTarget.style.cursor = "pointer"}
                                    onMouseLeave={(e) => e.currentTarget.style.cursor = "auto"}
                                >
                                    <Image
                                        className="rounded-lg overflow-hidden shadow-md"
                                        width={"200%"}
                                        height={"110%"}
                                        layout="responsive"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div className="p-5 h-40">
                                    <p className="text-center text-gray-700 dark:text-gray-300 mb-1">{project.title}</p>
                                    <p className="text-center py-2 px-5 text-gray-700 dark:text-gray-300 text-xs font-normal">{project.description}</p>
                                </div>
                            </div>
                            </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                {showModal && selectedProject && (
                    <Modal
                        project={selectedProject}
                        closeModal={closeModal}
                        projects={filteredProjects}
                    />
                )}
                <Footer darkMode={darkMode} />
            </main>
        </div>
    );
}

const Modal = ({ project, closeModal, projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextProject = () => {
        const nextIndex = (currentIndex + 1) % projects.length;
        setCurrentIndex(nextIndex);
    };

    const handlePreviousProject = () => {
        const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
        setCurrentIndex(previousIndex);
    };

    useEffect(() => {
        setCurrentIndex(projects.findIndex((p) => p.title === project.title));
    }, [project, projects]);

    const currentProject = projects[currentIndex];

    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50" onClick={handleCloseModal}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
                <div className="mb-4">
                    <Image
                        className="rounded-lg overflow-hidden shadow-md"
                        width={800}
                        height={400}
                        layout="responsive"
                        src={currentProject.image}
                        alt={currentProject.title}
                    />
                </div>
                <div className="mb-4 max-w-[700px]">
                    <h2 className="text-gray-700 dark:text-gray-300 text-xl font-bold mb-4">{currentProject.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{currentProject.description}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-xs mb-4">
                    Framework and Database : {currentProject.language} <br />
                    Project Date : {currentProject.date} <br />
                    Visit the Project :
                    <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {currentProject.link}
                    </a>
                </p>
                <button
                    className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-6xl cursor-pointer z-10"
                    onClick={handlePreviousProject}
                >
                    &#x2039;
                </button>
                <button
                    className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white text-6xl cursor-pointer z-10"
                    onClick={handleNextProject}
                >
                    &#x203A;
                </button>
                <button onClick={closeModal} className="text-sm font-semibold py-2 px-4 rounded-lg bg-blue-500 text-white absolute bottom-4 right-4">
                    Close
                </button>
            </div>
        </div>
    );
};