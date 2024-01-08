import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Experience() {
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Experience • Jeremy Kenneth</title>
                <link rel="icon" href="/developer.png" />
            </Head>
            <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 min-h-screen">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="p-10 py-10 flex flex-col md:flex-row items-start md:items-center">
                    <div>
                        <a
                            href="https://grow.google/intl/id_id/bangkit/?tab=cloud-computing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:text-gray-200 hover:underline"
                        >
                            <h2 className="font-burtons text-2xl py-2 dark:text-white md:text-2xl">
                                Cloud Computing - Bangkit Academy 2023 by Google, GoTo, Traveloka
                            </h2>
                        </a>
                        <h2 className="font-mono text-base mb-2 dark:text-white md:text-base">
                            Aug 2023 - Jan 2024 
                        </h2>
                        <h2 className="font-mono text-base mb-4 dark:text-white md:text-base">
                            Bandung, Indonesia - Certified Independent Study (MSIB) - Remote
                        </h2>
                        <p className="font-mono text-md leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-lg">
                            •   Lead a team of 6 people from Machine Learning, Cloud Computing, and Android Development for Capstone Project making an Application (CalorEase: Fueling Wellness ‑ Your Personalized Path to Health and Vitality)
                            <br />
                            •   Actively participate and contribute in the meeting session and in the project initiatives
                            <br />
                            •   Built Application Programming Interface (API) using Express and Node.js for Capstone Project
                            <br />
                            •   Deploying API in Google Cloud Platform to become a web‑server
                        </p>
                    </div>
                </div>

                <div className="p-10 py-10 flex flex-col md:flex-row items-start md:items-center">
                    <div>
                        <a
                            href="https://www.dicoding.com/learningpaths/58"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:text-gray-200 hover:underline"
                        >
                            <h2 className="font-burtons text-2xl py-2 dark:text-white md:text-2xl">
                                React Developer - Indosat Ooredoo Hutchison Digital Camp
                            </h2>
                        </a>
                        <h2 className="font-mono text-base mb-2 dark:text-white md:text-base">
                            Sep 2023 - Jan 2024
                        </h2>
                        <h2 className="font-mono text-base mb-4 dark:text-white md:text-base">
                            Indonesia - Remote
                        </h2>
                        <p className="font-mono text-md leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-lg">
                            •   Developed web‑based application using React JSX for Dicoding & IDCamp
                            <br />
                            •   Completing all of the React Developer Courses in Dicoding Indonesia Platform
                        </p>
                    </div>
                </div>
                <Footer darkMode={darkMode} />
            </main>
        </div>
    );
}
