import Head from "next/head";
import {
    AiFillMail,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import deved from "../public/profile.jpg";
import Image from "next/image";
import Navbar from "./navbar";


export default function Experience() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Experience • Jeremy Kenneth</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 min-h-screen">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="text-center p-10 py-10">
                   
                </div>
            </main>
        </div>
    );
}
