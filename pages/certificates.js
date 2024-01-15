import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { web, js, cloud, backend, software, logic, github, preparing, bits, sysmin, dart, react, frontend, proyek, data } from "../public/certificate/index.js";
import { LuExternalLink, LuZoomIn } from "react-icons/lu";

const SkeletonLoading = () => (
    <div className="animate-pulse bg-gray-300 rounded-lg overflow-hidden shadow-md">
        <div className="h-48 md:h-56 bg-gray-400"></div>
    </div>
);


export default function Certificates() {
    const [darkMode, setDarkMode] = useState(false);
    const [isHoveredArray, setIsHoveredArray] = useState(Array(20).fill(false));
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);
    const [zoomedIndex, setZoomedIndex] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleHover = (index, isHovered) => {
        const updatedHoverArray = isHoveredArray.map((item, idx) => idx === index ? isHovered : false);
        setIsHoveredArray(updatedHoverArray);
    };

    const handleZoom = (imageSrc) => {
        setIsZoomed(true);
        setZoomedImage(imageSrc);
    };

    const handleCloseZoom = () => {
        setIsZoomed(false);
        setZoomedImage(null);
    };

    const handleActivateZoom = (imageSrc) => {
        if (!isZoomed) {
            handleZoom(imageSrc);
        }
    };

    const originalWidth = 800;
    const originalHeight = 600;

    const handleNextImage = () => {
        const nextIndex = (zoomedIndex + 1) % images.length;
        setZoomedImage(images[nextIndex].src);
        setZoomedIndex(nextIndex);
    };

    const handlePreviousImage = () => {
        const previousIndex = zoomedIndex === 0 ? images.length - 1 : zoomedIndex - 1;
        setZoomedImage(images[previousIndex].src);
        setZoomedIndex(previousIndex);
    };

    const images = [
        { link: "  https://coursera.org/share/9e4673e59337bc071397c37e0a3a2671", src: preparing, alt: "preparing", description: "Coursera - Cloud Security Engineer" },
        { link: "  https://coursera.org/share/122c87baf0ad5961654cf058510f82ae", src: bits, alt: "bits", description: "Coursera - The Bits and Bytes of Computer Networking" },
        { link: "  https://coursera.org/share/63e902db5f6180058c884b70ff020496", src: sysmin, alt: "sysmin", description: "Coursera - System Administration and IT Infrastructure Service" },
        { link: "https://www.dicoding.com/certificates/0LZ0Q7O1NZ65", src: react, alt: "react", description: "Dicoding - Membuat Aplikasi Web dengan React" },
        { link: "https://www.dicoding.com/certificates/4EXG44N5GPRL", src: frontend, alt: "frontend", description: "Dicoding - Belajar Membuat Front-End Web" },
        { link: "https://www.dicoding.com/certificates/53XE4N95RZRN", src: js, alt: "js", description: "Dicoding - Belajar Dasar Pemrograman JavaScript" },
        { link: "https://www.dicoding.com/certificates/0LZ0QD0NNZ65", src: web, alt: "web", description: "Dicoding - Belajar Dasar Pemrograman Web" },
        { link: "https://www.dicoding.com/certificates/98XWV1NMJPM3", src: cloud, alt: "cloud", description: "Dicoding - Menjadi Google Cloud Engineer" },
        { link: "https://www.dicoding.com/certificates/GRX52O6J2X0M", src: backend, alt: "backend", description: "Dicoding - Belajar Membuat Aplikasi Back-End dengan Google Cloud" },
        { link: "https://www.dicoding.com/certificates/L4PQGVWVOZO1", src: software, alt: "software", description: "Dicoding - Memulai Menjadi Pengembang Software" },
        { link: "https://www.dicoding.com/certificates/0LZ097MOKZ65", src: logic, alt: "logic", description: "Dicoding - Programming Logic" },
        { link: "  https://www.dicoding.com/certificates/N9ZO6VG2DXG5", src: github, alt: "github", description: "Dicoding - Belajar Github" },
        { link: "  https://www.dicoding.com/certificates/81P2VVWQYPOY", src: dart, alt: "dart", description: "Dicoding - Memulai Pemrograman dengan Dart" },
        { link: "  https://www.dicoding.com/certificates/NVP77Q3MWPR0", src: proyek, alt: "proyek", description: "Dicoding - Manajemen Proyek" },
        { link: "  https://www.dicoding.com/certificates/53XEYQ04VPRN", src: data, alt: "data", description: "Dicoding - Data Science" },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Certificates • Jeremy Kenneth</title>
                <link rel="icon" href="/developer.png" />
            </Head>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 min-h-screen">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                    {loading ? (
                        // Display skeleton loading when loading is true
                        Array.from({ length: images.length }, (_, index) => (
                            <div key={index} className="basis-1/4 flex-1 relative">
                                <SkeletonLoading />
                            </div>
                        ))
                    ) : (
                        // Display content when loading is false
                        images.map((image, index) => (
                            <div key={index} className="basis-1/4 flex-1 relative">
                                <a
                                    onMouseEnter={() => handleHover(index, true)}
                                    onMouseLeave={() => handleHover(index, false)}
                                    style={{ position: "relative" }}
                                >
                                    <Image
                                        className={`rounded-lg overflow-hidden shadow-md ${isHoveredArray[index] ? "filter blur-2" : ""}`}
                                        width={600}
                                        height={400}
                                        layout="responsive"
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                    {isHoveredArray[index] && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 text-white text-center rounded-lg gap-1 ">
                                            <p className="py-2 px-4 ">{image.description}</p>
                                            <div className="flex items-center">
                                                <button
                                                    className="bg-transparent border-none outline-none focus:outline-none mr-5"
                                                    onClick={() => handleActivateZoom(image.src, index)}
                                                >
                                                    <span className="text-white text-3xl cursor-pointer"><LuZoomIn className=" text-white hover:text-blue-500" /></span>
                                                </button>
                                                <a
                                                    className="text-white text-3xl cursor-pointer"
                                                    href={image.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <LuExternalLink className="transition duration-300 ease-in-out text-white hover:text-blue-500" />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </a>
                            </div>
                        ))
                    )}
                </div>
                <Footer darkMode={darkMode} />
            </main>

            {isZoomed && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
                    <button
                        className="absolute top-5 right-8 text-white text-4xl cursor-pointer z-10"
                        onClick={handleCloseZoom}
                    >
                        &#10006;
                    </button>
                    <div className="relative w-full max-w-screen-lg">
                        {/* Zoomed image */}
                        <div className="p-4">
                            <Image
                                className="rounded-lg overflow-hidden shadow-md"
                                width={originalWidth} 
                                height={originalHeight} 
                                layout="responsive"
                                src={zoomedImage}
                                alt="Zoomed Image"
                                onMouseEnter={() => handleHover(zoomedIndex, true)}
                                onMouseLeave={() => handleHover(zoomedIndex, false)}
                            />
                        </div>
                    </div>
                    {/* Navigation buttons */}
                    <button
                        className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-6xl cursor-pointer z-10"
                        onClick={handlePreviousImage}
                    >
                        &#x2039;
                    </button>
                    <button
                        className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white text-6xl cursor-pointer z-10"
                        onClick={handleNextImage}
                    >
                        &#x203A;
                    </button>
                </div>
            )}

        </div>
    );
}
