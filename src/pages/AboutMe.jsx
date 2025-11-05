import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import About from "../components/layout/About";

import WhoIAm from "../components/sections/WhoIAm";
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSlides, setModalSlides] = useState([]);

  return (
    <>
      <Navbar />
      <About imageSize={"h-72 md:h-128"} isHiddenLink={true} />
      <WhoIAm />
      <TechStack />
      <Experience
        setIsModalOpen={setIsModalOpen}
        setModalSlides={setModalSlides}
      />
      <Education />
      <Footer />
      <Lightbox
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
        slides={modalSlides}
      />
    </>
  );
};

export default AboutMe;