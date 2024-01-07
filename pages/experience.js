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
                <div className="text-center p-10 py-10">
                </div>
                <Footer darkMode={darkMode} />
            </main>
        </div>
    );
}
