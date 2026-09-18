import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/sections/Hero";
import Experience from "../components/sections/Experience";
import Portfolio from "../components/sections/Portfolio";
import Certificates from "../components/sections/Certificates";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremy Kenneth • Full Stack Developer</title>
        <meta
          name="description"
          content="Jeremy Kenneth — Full-Stack Developer building scalable web and mobile applications for government agencies, enterprises, and startups across Indonesia. Explore my portfolio, experience, and certifications."
        />
        <link rel="icon" href="/assets/developer.png" />
        <link rel="canonical" href="https://jeremykenneth.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jeremykenneth.com/" />
        <meta property="og:title" content="Jeremy Kenneth • Full Stack Developer" />
        <meta
          property="og:description"
          content="Full-Stack Developer building scalable web and mobile applications for government agencies, enterprises, and startups across Indonesia."
        />
        <meta property="og:image" content="https://jeremykenneth.com/api/og" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jeremy Kenneth • Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Full-Stack Developer building scalable web and mobile applications for government agencies, enterprises, and startups across Indonesia."
        />
        <meta name="twitter:image" content="https://jeremykenneth.com/api/og" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jeremy Kenneth",
              jobTitle: "Full-Stack Developer",
              url: "https://jeremykenneth.com/",
              image: "https://jeremykenneth.com/api/og",
              sameAs: [
                "https://www.linkedin.com/in/jeremykenneth7/",
                "https://github.com/jeremykenneth7",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Simetri Dev",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yogyakarta",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </Head>
      <div className="relative bg-white min-h-screen overflow-hidden">
        {/* Ambient glow orbs for the glass surfaces to refract */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[32rem] h-[32rem] rounded-full bg-sky-200/50 blur-[120px] animate-float-slow" />
          <div className="absolute top-[20%] right-[-10%] w-[28rem] h-[28rem] rounded-full bg-sky-200/40 blur-[120px] animate-float-slower" />
          <div className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-rose-200/30 blur-[120px] animate-float-slowest" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <Portfolio />
            <Experience />
            <Certificates />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
