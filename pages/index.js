import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import deved from "../public/profile.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jeremy Kenneth • Full Stack Developer</title>
        <link rel="icon" href="/developer.png" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="text-center p-10 py-10">
          <h2 className="font-mono text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-2xl">
            Hi, I’m Jeremy and I’m a
          </h2>
          <h3 className="font-burtons text-5xl py-2 dark:text-white md:text-5xl">
            Full-Stack Developer.
          </h3>
          <p className="font-mono text-md pt-2 pb-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            My expertise includes leveraging modern frameworks like React and Node.js to develop scalable and efficient solutions. Combining my knowledge of front-end design principles with robust back-end architecture.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="mailto: jeremykenneth7@gmail.com"><AiFillMail /> </a>
            <a href="https://www.linkedin.com/in/jeremykenneth7/"><AiFillLinkedin /></a>
            <a href="https://github.com/jeremykenneth7"><AiFillGithub /></a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-72 md:w-72">
            <Image src={deved} layout="fill" objectFit="cover" alt="deved" />
          </div>
        </div>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}
