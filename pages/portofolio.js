import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import bimbel from "../public/bimbel.png";
import gunung from "../public/gunung.png";
import tsunami1 from "../public/tsunami1.png";
import tsunami2 from "../public/tsunami2.png";
import bangkit from "../public/bangkit.jpeg";
import flask from "../public/flask.jpg";
import onlineshop2 from "../public/onlineshop2.png";
import bookshelf from "../public/bookshelf.png";
import computershop from "../public/computershop.png";
import stopwatch from "../public/stopwatch.png";
import calorease from "../public/calorease.png";
import Navbar from './navbar';

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
    const [currentCategory, setCurrentCategory] = useState('all');

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const webProjects = [
        {
            title: "Tsunami Warning Center",
            image: tsunami1,
            description: "Website for Tsunami Disaster and Warning Center with BMKG API on Realtime Earthquake data +5.0 Magnitudo and Realtime Maps with GeoJSON prevention Tsunami Warning in Indonesia",
            link: "https://github.com/jeremykenneth7/Tsunami-Warning-Center"
        },
        {
            title: "Tsunami Warning Center 2",
            image: tsunami2,
            description: "Website for Tsunami Disaster and Warning Center with BMKG API on Realtime Earthquake data +5.0 Magnitudo and Realtime Maps with GeoJSON prevention Tsunami Warning in Indonesia",
            link: "https://github.com/jeremykenneth7/Tsunami-Warning-Center"
        },
        {
            title: "Online e-Commerce Website",
            image: onlineshop2,
            description: "🥦 It is an eCommerce app inspired by Tokopedia Website 📱 built to demonstrate the use of web development tools. Build and Developed with PHP, Bootstrap, My SQL",
            link: "https://github.com/jeremykenneth7/Online-eCommerce-Website"
        },

        {
            title: "Volcano Eruption Prevention Website",
            image: gunung,
            description: "Website for Volcano Eruption Prevention Website in Indonesia with disaster mitigation and feature for searching missing person.",
            link: "https://github.com/jeremykenneth7/Volcano-Eruption-Prevention-Website"
        },
        {
            title: "Website Bimbel Online",
            image: bimbel,
            description: "Website for Online Learning named Belajar Online for helping Indonesia Student study from anywhere",
            link: "#"
        },
        {
            title: "Bookshelf Website",
            image: bookshelf,
            description: "A Frontend Development Website for Bookshelf that connect with Local Storage on Device. Build and Developed with JavaScript",
            link: "https://github.com/jeremykenneth7/BookshelfApps-Frontend-LocalStorage"
        },
    ];

    const mobileProjects = [
        {
            title: "Computer Shop Mobile Application",
            image: computershop,
            description: "A Mobile Development Application for Recommended Places and Stopwatch inside of it. Build and Developed with Flutter",
            link: "https://github.com/jeremykenneth7/Computer-Shop-MobileApps"
        },
        {
            title: "Stopwatch + Recommended Places Mobile Application",
            image: stopwatch,
            description: "A Mobile Development Application for Computer Shop that connect with API and Database. Build and Developed with Flutter",
            link: "https://github.com/jeremykenneth7/StopwatchApp-Flutter"
        },
    ];

    const backendProjects = [
        {
            title: "CalorEase",
            image: calorease,
            description: "Application that focusing on helping people control the number of calories eaten each day by scanning the food image after that can get the nutrition",
            link: "https://github.com/orgs/CalorEase/repositories"
        },
        {
            title: "Application Database API Creation",
            image: bangkit,
            description: "API for Calories Application with Database using Express JS and Firebase. For the deployment using Google Cloud Functions",
            link: "https://github.com/CalorEase/CaloriesAPI"
        },
        {
            title: "Machine Learning Model API Creation",
            image: flask,
            description: "API for Machine Learning Model in Calories Application using Flask as a REST-API and for the deployment using Docker and Google Cloud Run",
            link: "https://github.com/jeremykenneth7/CalorEase-API-2"
        },
    ];

    const filteredProjects = currentCategory === 'web' ? webProjects :
        currentCategory === 'mobile' ? mobileProjects :
            currentCategory === 'backend' ? backendProjects :
                currentCategory === 'all' ? [...backendProjects, ...webProjects, ...mobileProjects] :
                    [];

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Jeremy Kenneth Portofolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div>
                    <p className="font-mono text-md py-5 mb-8 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
                        Crafting a compelling portfolio to showcase my extensive experience in Full-Stack Development + Mobile Development has been a rewarding journey. Through a dynamic blend of creativity and technical prowess, I have meticulously curated a collection of projects that encapsulate my proficiency in crafting seamless application and website. From responsive website that adapt flawlessly to diverse screen sizes to interactive interfaces that engage users intuitively. Each project stands as a testament to my mastery of Flutter, PHP, React JS, Next JS, Laravel and other cutting-edge technologies, which I seamlessly integrate to breathe life into my programming experience.
                    </p>
                </div>
                {/* For mobile view */}
                <div className="md:hidden flex flex-wrap justify-center md:justify-start mb-8">
                    <div className="w-full md:w-auto flex flex-wrap justify-center">
                        <button onClick={() => setCurrentCategory('all')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All Projects</button>
                        <button onClick={() => setCurrentCategory('web')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Web Projects</button>
                    </div>
                    <div className="w-full md:w-auto flex flex-wrap justify-center">
                        <button onClick={() => setCurrentCategory('mobile')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Mobile Projects</button>
                        <button onClick={() => setCurrentCategory('backend')} className={`mx-2 mb-2 px-4 py-2 rounded-lg text-sm ${currentCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Backend Projects</button>
                    </div>
                </div>
                {/* For desktop view */}
                <div className="hidden md:flex justify-center mb-8">
                    <button onClick={() => setCurrentCategory('all')} className={`mx-2 px-4 py-2 rounded-lg ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All Projects</button>
                    <button onClick={() => setCurrentCategory('web')} className={`mx-2 px-4 py-2 rounded-lg ${currentCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Web Projects</button>
                    <button onClick={() => setCurrentCategory('mobile')} className={`mx-2 px-4 py-2 rounded-lg ${currentCategory === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Mobile Projects</button>
                    <button onClick={() => setCurrentCategory('backend')} className={`mx-2 px-4 py-2 rounded-lg ${currentCategory === 'backend' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Backend Projects</button>
                </div>
                {/* Display projects based on the selected category */}
                <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="basis-1/4 flex-1">
                            <div className="rounded-lg overflow-hidden shadow-md">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        className="rounded-lg overflow-hidden shadow-md"
                                        width={"200%"}
                                        height={"110%"}
                                        layout="responsive"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </a>
                                <div className="p-5">
                                    <p className="text-center text-gray-700 dark:text-gray-300 mb-1">{project.title}</p>
                                    <p className="text-center text-gray-700 dark:text-gray-300 text-xs font-normal">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
