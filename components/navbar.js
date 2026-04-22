import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import { useLocalStorage } from './localstorage';

export default function Navbar() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        document.documentElement.classList.toggle('dark', newMode);
    };

    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (isDarkMode !== null) {
            setDarkMode(isDarkMode);
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/experience', label: 'Experience' },
        { href: '/portofolio', label: 'Portfolio' },
        { href: '/certificates', label: 'Certificates' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (href) => router.pathname === href;

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800' : 'bg-white dark:bg-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="font-burtons text-xl text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                        Jeremy<span className="text-sky-500"></span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors relative group ${isActive(link.href)
                                ? 'text-sky-500 dark:text-sky-400'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}>
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-500 transition-all duration-200 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Controls */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <BsFillSunFill className="text-base" /> : <BsFillMoonStarsFill className="text-base" />}
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-gray-500 dark:text-gray-400"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
                        </button>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-2 rounded-lg text-gray-500 dark:text-gray-400"
                            aria-label="Toggle menu"
                        >
                            {showMenu ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {showMenu && (
                    <div className="md:hidden border-t border-gray-100 dark:border-gray-800 py-3 pb-4">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                className={`block px-3 py-2.5 text-sm font-medium rounded-lg mb-1 transition-colors ${isActive(link.href)
                                    ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-500'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                                onClick={() => setShowMenu(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
