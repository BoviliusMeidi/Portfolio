import Hero from "../components/layout/Hero";
import Project from "../components/layout/Project";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <Project id="projects" isHiddenLink={false} />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default Home;
