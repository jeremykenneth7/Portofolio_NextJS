import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { bangkit, bimbel, bookshelf, calorease, computershop, flask, gunung, onlineshop2, stopwatch, tsunami1, tsunami2 } from "../public/portofolio/index.js";

export default function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

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
                    <p className="font-mono text-md py-5 mb-8 leading-8 text-gray-800 dark:text-gray-200 md:text-lg text-justify">
                        &emsp; Crafting a compelling portfolio to showcase my extensive experience in Full-Stack Development + Mobile Development has been a rewarding journey. Through a dynamic blend of creativity and technical prowess, I have meticulously curated a collection of projects that encapsulate my proficiency in crafting seamless application and website.
                        < br />
                        < br />
                        &emsp; From responsive website that adapt flawlessly to diverse screen sizes to interactive interfaces that engage users intuitively. Each project stands as a testament to my mastery of Flutter, PHP, React JS, Next JS, Laravel and other cutting-edge technologies, which I seamlessly integrate to breathe life into my programming experience.
                    </p>
                </div>
                {/* Mobile view */}
                <div className="md:hidden flex flex-wrap justify-center md:justify-start mb-8">
                    <div className="w-full md:w-auto flex flex-wrap justify-center">
                        <button onClick={() => setCurrentCategory('all')} className={`mx-2 mb-2 px-[1.8rem] py-2 rounded-lg text-sm ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All Projects</button>
                        <button onClick={() => setCurrentCategory('web')} className={`mx-2 mb-2 px-[1.8rem] py-2 rounded-lg text-sm ${currentCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Web Projects</button>
                    </div>
                    <div className="w-full md:w-auto flex flex-wrap justify-center">
                        <button onClick={() => setCurrentCategory('mobile')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Mobile Projects</button>
                        <button onClick={() => setCurrentCategory('backend')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Backend Projects</button>
                    </div>
                </div>
                {/* Desktop view */}
                <div className="hidden md:flex justify-center mb-8">
                    <button onClick={() => setCurrentCategory('all')} className={`mx-2 px-6 py-2 rounded-lg ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All Projects</button>
                    <button onClick={() => setCurrentCategory('web')} className={`mx-2 px-6 py-2 rounded-lg ${currentCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Web Projects</button>
                    <button onClick={() => setCurrentCategory('mobile')} className={`mx-2 px-4 py-2 rounded-lg ${currentCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Mobile Projects</button>
                    <button onClick={() => setCurrentCategory('backend')} className={`mx-2 px-4 py-2 rounded-lg ${currentCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Backend Projects</button>
                </div>
                {/* Projects by Category */}
                <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="basis-1/4 flex-1">
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
                    ))}
                </div>
                {showModal && selectedProject && (
                    <Modal
                        project={selectedProject}
                        closeModal={closeModal}
                    />
                )}
                <Footer darkMode={darkMode} />
            </main>
        </div>
    );
}

const Modal = ({ project, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-gray-700 dark:text-gray-300 text-xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <p className="text-gray-700 dark:text-gray-300 text-xs mb-4">
                    Framework and Database : {project.language} <br />
                    Project Date : {project.date} <br />
                    Visit the Project :
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline"> {project.link}
                    </a>
                </p>
                <button onClick={closeModal} className="text-sm font-semibold py-2 px-4 rounded-lg bg-blue-500 text-white">Close</button>
            </div>
        </div>
    );
};