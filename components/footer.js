import Link from 'next/link';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`text-center py-4 mt-10 ${darkMode ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Jeremy Kenneth. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
