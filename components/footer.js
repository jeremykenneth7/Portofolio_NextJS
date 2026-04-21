import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400 dark:text-gray-500">
                    &copy; {new Date().getFullYear()} Jeremy Kenneth. Crafted with passion.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="mailto:jeremykenneth7@gmail.com"
                        className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        aria-label="Email"
                    >
                        <AiFillMail className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeremykenneth7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <AiFillLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://github.com/jeremykenneth7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <AiFillGithub className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

