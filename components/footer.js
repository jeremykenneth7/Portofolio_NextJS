import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-16 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Jeremy Kenneth. Crafted with passion.
                </p>
                <div className="flex items-center gap-3">
                    <a
                        href="mailto:jeremykenneth7@gmail.com"
                        className="p-2 rounded-lg bg-white/60 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-amber-600 hover:border-amber-300 transition-colors"
                        aria-label="Email"
                    >
                        <AiFillMail className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeremykenneth7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/60 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-amber-600 hover:border-amber-300 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <AiFillLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://github.com/jeremykenneth7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/60 backdrop-blur-md border border-gray-200 text-gray-500 hover:text-amber-600 hover:border-amber-300 transition-colors"
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
