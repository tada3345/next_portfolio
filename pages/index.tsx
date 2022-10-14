import type { NextPage } from 'next';
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
    <div className="scroll-smooth bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
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
    </div>
  );
};

export default Home;
