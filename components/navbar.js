import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocalStorage } from '../components/localstorage';

export default function Navbar() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        document.documentElement.classList.toggle('dark', newMode);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);

    };

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (isDarkMode !== null) {
            setDarkMode(isDarkMode);
        }
    }, [setDarkMode]);

    return (
        <nav className="py-5 md:py-10 md:mb-2 flex flex-col md:flex-row dark:text-white">
            {/* Mobile View */}
            <div className="md:hidden flex flex-row justify-between">
                <Link href="/">
                    <a className="mr-4 font-burtons text-lg py-1 dark:text-white hover:border-teal-500">Jeremy</a>
                </Link>
                <div className="items-center flex flex-row gap-8 text-left"> <button
                    type="button"
                    onClick={toggleDarkMode}
                    className="cursor-pointer text-xl"
                >
                    {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                </button>
                    <button
                        onClick={toggleDropdown}
                        type="button"
                        className="font-burtons text-lg py-1 dark:text-white hover:border-teal-500"
                    >
                        <FaBars />
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
                                <Link href="./documents/CV-Jeremy-Kenneth.pdf">
                                    <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">CV</a>
                                </Link>
                                <Link href="./documents/Resume-Jeremy-Kenneth.pdf">
                                    <a className="block font-burtons px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Resume</a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex md:items-center md:flex-row md:flex-wrap justify-between w-full">
                <div className='flex flex-row gap-10 items-center'>
                    <Link href="/">
                        <a className="font-burtons text-xl py-1 dark:text-white hover:border-teal-500">Jeremy</a>
                    </Link>
                    <Link href="/experience">
                        <a className="font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Experience</a>
                    </Link>
                    <Link href="/portofolio">
                        <a className="font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Portfolio</a>
                    </Link>
                    <Link href="/certificates">
                        <a className="font-burtons text-3xl py-1 dark:text-white hover:border-teal-500">Certificates</a>
                    </Link>
                </div>
                <div className='flex items-center gap-10'>
                    {darkMode ? (
                        <BsFillSunFill
                            onClick={toggleDarkMode}
                            className="cursor-pointer text-2xl"
                        />
                    ) : (
                        <BsFillMoonStarsFill
                            onClick={toggleDarkMode}
                            className="cursor-pointer text-2xl"
                        />
                    )}
                    <a
                        className="bg-gradient-to-r from-blue-500 to-yellow-700 text-white px-4 py-2 border-none rounded-md"
                        href="./documents/CV-Jeremy-Kenneth.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                    </a>
                    <a
                        className="bg-gradient-to-r from-red-500 to-teal-700 text-white px-4 py-2 border-none rounded-md"
                        href="./documents/Resume-Jeremy-Kenneth.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>

        </nav>
    );
}
