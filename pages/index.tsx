import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth bg-[rgb(225,138,7)] text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>ポーフォリオ</title>
      </Head>

      {/* header */}
      <Header />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="intro" className="snap-center">
        <About />
      </section>

      {/* experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://github.com/tada3345/react_dev/blob/main/src/assets/img/yasuda.png?raw=true"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
