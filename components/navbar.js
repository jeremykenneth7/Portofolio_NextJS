import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
];

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const isActive = (href) => active === href;

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${scrolled ? 'bg-white/70 border-gray-200 shadow-sm' : 'bg-white/40 border-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="#top" className="font-display text-2xl tracking-tight font-bold text-gray-900 hover:text-amber-600 transition-colors">
                        Jeremy<span className="text-amber-500">.</span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`font-display text-lg tracking-tight font-bold transition-colors relative group ${isActive(link.href) ? 'text-amber-600' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-200 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="md:hidden p-2 rounded-lg text-gray-500"
                        aria-label="Toggle menu"
                    >
                        {showMenu ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {showMenu && (
                    <div className="md:hidden border-t border-gray-200 py-3 pb-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`block px-3 py-2.5 font-display text-lg tracking-tight font-bold rounded-lg mb-1 transition-colors ${isActive(link.href) ? 'bg-amber-50 text-amber-600' : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                onClick={() => setShowMenu(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
