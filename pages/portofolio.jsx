import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import { angkasa_keuangan, angkasa_pemasaran, dataku, dirjenim, kasil, kediri, siap, bangkit, bimbel, bookshelf, calorease, computershop, flask, gunung, onlineshop2, stopwatch, storyku, tsunami1, oz, storyku2 } from "../public/portofolio/index.js";

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
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    const [currentCategory, setCurrentCategory] = useState('all');

    const webProjects = [
        {
            title: "Sistem Informasi Aduan Pelanggan - PT Air Minum Intan Banjar (Perseroda)",
            image: siap,
            description: "SIAP is a website created so that customers can file complaints to the company through the complaint form provided. The website also provide complaint tracking feature and sending complaint status.",
            date: "2024",
            link: "-",
            language: "Laravel + MySQL",
        },
        {
            title: "Kasil - Paniradya Kaistimewaan",
            image: kasil,
            description: "Kasil is a website created for the special funds of the Yogyakarta Palace. This website was created to provide a map of the distribution of the number of activity results in the Special Region of Yogyakarta. It also contains monitoring and activity results.",
            date: "2024",
            link: " https://kasil.jogjaprov.go.id/",
            language: "Laravel + MySQL",
        },
        // {
        //     title: "Website Dirjenim - Direktorat Jenderal Imigrasi Kementrian Hukum dan Ham",
        //     image: dirjenim,
        //     description: "The Dirjenim website is a website for the Directorate General of Immigration of Indonesia, which was created to provide visa and passport services for Indonesian and foreign citizens, in addition to residence permits, immigration and other services.",
        //     date: "2024",
        //     link: " https://www.imigrasi.go.id/",
        //     language: "Yii2 Framework + MySQL",

        // },
        {
            title: "Jogja Dataku - Bappeda DIY",
            image: dataku,
            description: "Dataku is a website created for Regional Development Planning Agency of the Special Region of Yogyakarta, Indonesia to provide data from the Yogyakarta region which contains infographics, master data, financial data, performance indicators and other data.",
            date: "2024",
            link: " https://bappeda.jogjaprov.go.id/dataku/",
            language: "Yii2 Framework + MySQL",
        },
        {
            title: "Satu Data Kota Kediri - Pemerintah Kota Kediri",
            image: kediri,
            description: "Satu Data Kota Kediri is a website created for Kediri City Goverment to provide data from the Kediri region which contains infographics, master data, financial data, performance indicators and other data.",
            date: "2024",
            link: " https://satudata.kedirikota.go.id/",
            language: "Yii2 Framework + MySQL",
        },
        {
            title: "Angkasa Penjualan - Angkasa Tour and Travel",
            image: angkasa_pemasaran,
            description: "Website for Angkasa Tour and Travel with features for Sales and Payment, Monitoring, Customer and Agent Services, User Management, Data Master for each project",
            date: "2024",
            link: " https://angkasatour.co.id/",
            language: "Yii2 Framework + MySQL"
        },
        // {
        //     title: "Angkasa Keuangan - Angkasa Tour and Travel",
        //     image: angkasa_keuangan,
        //     description: "Website for Angkasa Tour and Travel with feature for Loan and Payment, Automatic Journaling, Report for Balanced Sheet, Report for Profit and Loss, Report for Journaling Book of Wages and Travel Expenses",
        //     date: "2024",
        //     link: " https://angkasatour.co.id/",
        //     language: "Yii2 Framework + MySQL"
        // },
        {
            title: "Tsunami Warning Center",
            image: tsunami1,
            description: "Website for Tsunami Disaster and Warning Center with BMKG API on Realtime Earthquake data +5.0 Magnitudo and Realtime Maps with GeoJSON prevention Tsunami Warning in Indonesia",
            date: "2022",
            link: " https://github.com/jeremykenneth7/Tsunami-Warning-Center",
            language: "PHP + GeoJSON + My SQL"
        },
        {
            title: "Online e-Commerce Website",
            image: onlineshop2,
            description: "🥦 It is an eCommerce app inspired by Tokopedia Website 📱 built to demonstrate the use of web development tools Build and Developed with PHP with Bootstrap and using My SQL for the database ",
            link: " https://github.com/jeremykenneth7/Online-eCommerce-Website",
            language: "PHP + My SQL",
            date: "2021",
        },
        {
            title: "Storyku Management Website",
            image: storyku,
            description: "Story Management Web Application, For the frontend, powered by React and styled with Tailwind CSS, provides users with a seamless and visually pleasing experience.",
            link: " https://storyku.vercel.app/",
            language: "React JS + Firebase",
            date: "2024",
        },
        {
            title: "Volcano Eruption Prevention Website",
            image: gunung,
            description: "Website for Volcano Eruption Prevention Website in Indonesia with disaster mitigation and feature for searching missing person. The website also provide information about the volcano eruption in Indonesia",
            link: "https://github.com/jeremykenneth7/Volcano-Eruption-Prevention-Website",
            language: "PHP + My SQL",
            date: "2022",
        },
        {
            title: "Website Bimbel Online",
            image: bimbel,
            description: "Website for Online Learning named Belajar Online for helping Indonesia Student study from anywhere. The website also provide feature for online test and online learning",
            link: "",
            language: "PHP + My SQL",
            date: "2023",
        },
        {
            title: "Bookshelf Website",
            image: bookshelf,
            description: "A Frontend Development Website for Bookshelf that connect with Local Storage on Device. Build and Developed with JavaScript. The website also provide feature for adding, deleting and searching book",
            link: " https://github.com/jeremykenneth7/BookshelfApps-Frontend-LocalStorage",
            language: "JavaScript",
            date: "2023",
        },
    ];

    const mobileProjects = [
        {
            title: "OZ Loyalty - Australia",
            image: oz,
            description: "OZ Loyalty is a mobile application that provides a loyalty program for customers who shop at small grocery store in Australia. This application is built with Flutter and Firebase.",
            link: " https://www.figma.com/proto/zDXXHy4OeFufoogtGEhErP/OZ-Loyalty-UI?node-id=0-1&t=wSplowS8HFY6thRO-1bit.ly/OZLoyalty",
            language: "Flutter + Firebase",
            date: "2024",
        },
        {
            title: "Computer Shop Mobile Application",
            image: computershop,
            description: "A Mobile application that created to provide computer parts that can be purchased like e-commerce, users can put in the basket and check out the computer parts they want to buy.",
            link: " https://github.com/jeremykenneth7/Computer-Shop-MobileApps",
            language: "Flutter + SQLite",
            date: "2023",
        },
        {
            title: "Stopwatch + Recommended Places Mobile Application",
            image: stopwatch,
            description: "A Mobile Development Application for Computer Shop that connect with API and Database. Build and Developed with Flutter",
            link: " https://github.com/jeremykenneth7/StopwatchApp-Flutter",
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
            title: "Storyku Backend API Development",
            image: storyku2,
            description: "Story Management Web Application, Leveraging the versatility of Express JS and the real-time capabilities of Firebase on the backend, i ensure efficient data management and scalability.",
            link: "https://github.com/jeremykenneth7/StorykuAPI-Backend-ExpressJS",
            language: "ExpressJS + Firebase + Cloud Functions",
            date: "2024",
        },
        {
            title: "Image Prediction Model API Creation",
            image: flask,
            description: "API for Machine Learning Image Prediction Model in Calories Application using Flask as a REST-API and for the deployment using Docker and Google Cloud Run",
            link: "https://github.com/jeremykenneth7/CalorEase-API-2",
            language: "Flask Python + Google Cloud Storage + Docker + Cloud Run",
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
    ];

    const filteredProjects = currentCategory === 'web' ? webProjects :
        currentCategory === 'mobile' ? mobileProjects :
            currentCategory === 'backend' ? backendProjects :
                currentCategory === 'all' ? [...webProjects, ...mobileProjects, ...backendProjects] :
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
                            ) : (<div className="basis-1/4 flex-1">
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
                        height={450}
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
                {/* <button
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
                </button> */}
            </div>
        </div>
    );
};