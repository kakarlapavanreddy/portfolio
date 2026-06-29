import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skill";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
