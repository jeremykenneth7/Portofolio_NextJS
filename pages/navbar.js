import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);

    };
    return (
        <nav className="py-5 md:py-10 mb-4 md:mb-12 flex flex-col md:flex-row justify-between dark:text-white">
            <div className="md:flex md:items-center md:justify-between">
                <div className="relative">
                    {/* Mobile View */}
                    <div className="md:hidden">
                        {/* Home Link */}
                        <Link href="/">
                            <a className="mr-4 font-burtons text-lg py-1 dark:text-white hover:border-teal-500">Jeremy</a>
                        </Link>
                        <div className="absolute right-12 inline-block py-1 text-left"> <button
                            type="button"
                            onClick={toggleDarkMode}
                            className="cursor-pointer text-xl"
                        >
                            <BsFillMoonStarsFill />
                        </button></div>
                        <div className="absolute right-2 inline-block text-left">
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="font-burtons text-lg py-1 dark:text-white hover:border-teal-500"
                            >
                                <FaBars /> {/* Replace "Menu" text with the icon */}
                            </button>
                            {/* Dropdown content */}
                            {showDropdown && (
                                <div className="absolute top-14 right-0 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20">
                                    <div className="py-1">
                                        {/* Dropdown links */}
                                        <Link href="/portofolio">
                                            <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Portfolio</a>
                                        </Link>
                                        <Link href="/certificates">
                                            <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Certificates</a>
                                        </Link>
                                        <Link href="/experience">
                                            <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Experience</a>
                                        </Link>
                                        <Link href="CV-Jeremy-Kenneth.pdf">
                                            <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">CV</a>
                                        </Link>
                                        <Link href="Resume-Jeremy-Kenneth.pdf">
                                            <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Resume</a>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

               {/* Desktop View */}
            <div className="hidden md:flex md:items-center md:flex-row justify-between">
                {/* Home Link */}
                <Link href="/">
                    <a className="mr-4 font-burtons text-lg py-1 dark:text-white hover:border-teal-500">Jeremy</a>
                </Link>
                {/* Portfolio Link */}
                <Link href="/portofolio">
                    <a className="ml-8 font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Portfolio</a>
                </Link>
                {/* Certificates Link */}
                <Link href="/certificates">
                    <a className="ml-8 font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Certificates</a>
                </Link>
                {/* Experience Link */}
                <Link href="/experience">
                    <a className="ml-8 font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Experience</a>
                </Link>
                    <ul className="flex items-center absolute right-44 md:flex-row md:flex-column justify-between">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={toggleDarkMode}
                            className="cursor-pointer text-2xl"
                        />
                    </li>
                    <li>
                        <a
                            className="bg-gradient-to-r from-blue-500 text- to-yellow-700 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="CV-Jeremy-Kenneth.pdf"
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >CV</a>
                    </li>
                    <li>
                        <a
                            className="bg-gradient-to-r from-red-500 text- to-teal-700 text-white px-4 py-2 border-none rounded-md ml-8"
                            href="Resume-Jeremy-Kenneth.pdf"
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Resume</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
