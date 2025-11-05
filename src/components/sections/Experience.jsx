import { useRef } from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import MainLayout from "../layout/MainLayout";
import Number from "../common/Number";

import Asdos1 from "../../assets/images/experience/Asdos-1.jpg";
import Asdos2 from "../../assets/images/experience/Asdos-2.jpg";
import WP1 from "../../assets/images/experience/WP-1.png";
import WP2 from "../../assets/images/experience/WP-2.png";
import KirabBudaya1 from "../../assets/images/experience/KirabBudaya-1.jpg";
import KirabBudaya2 from "../../assets/images/experience/KirabBudaya-2.jpg";
import { FaChalkboardTeacher, FaUsers, FaHandsHelping } from "react-icons/fa";

const experiences = [
  {
    image: <FaChalkboardTeacher />,
    title: "Assistant Lecturer",
    period: "August 2024 - June 2025",
    description:
      "Guided student lab sessions, prepared teaching materials, and assisted in grading assignments. This role enhanced my technical, communication, and leadership skills.",
    proofImages: [{ src: Asdos1 }, { src: Asdos2 }],
  },
  {
    image: <FaUsers />,
    title: "Mentor for Welcoming Party",
    period: "21 September 2024",
    description:
      "Participated as part of the organizing team, contributing to event coordination, fostering communication among students, and helping create a warm and collaborative atmosphere.",
    proofImages: [{ src: WP1 }, { src: WP2 }],
  },
  {
    image: <FaHandsHelping />,
    title: "Volunteer Cultural Procession",
    period: "21 June 2025",
    description:
      "Managed food and beverage distribution for the Kirab Budaya (Cultural Procession) and served as part of the ceremonial team, assisting in carrying the sacred deity palanquins.",
    proofImages: [{ src: KirabBudaya1 }, { src: KirabBudaya2 }],
  },
];

const Experience = ({ setIsModalOpen, setModalSlides }) => {
  const experienceRef = useRef(null);
  const isVisible3 = useIntersectionObserver(experienceRef, { threshold: 0.1 });

  return (
    <MainLayout
      backgroundColor={"bg-gradient-to-b from-gray-900 to-[#9B082B]"}
    >
      <div
        ref={experienceRef}
        id="experience"
        className={`w-full flex flex-col px-6 md:px-12 lg:px-48 items-center md:block transition-opacity duration-500 ease-in-out ${
          isVisible3 ? "animate-popout" : "opacity-50"
        }`}
      >
        <div className="flex justify-start w-full mt-20 md:mt-18 flex-col items-start gap-0 z-10">
          <div className="group relative inline-block overflow-hidden">
            <h1 className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              EXPERIENCE
            </h1>
            <h1
              className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out absolute top-full right-0 group-hover:-translate-y-full"
              aria-hidden="true"
            >
              EXPERIENCE
            </h1>
          </div>
        </div>
        <div className="w-full main-font flex flex-nowrap overflow-x-auto gap-6 z-10 mt-4 sm:mt-8 mb-12 md:grid md:grid-cols-3 md:overflow-visible scroll-snap-x mandatory">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-white/20 text-center cursor-pointer w-[80vw] flex-shrink-0 md:w-auto scroll-snap-align-start"
              onClick={() => {
                if (exp.proofImages.length > 0) {
                  setModalSlides(exp.proofImages);
                  setIsModalOpen(true);
                }
              }}
            >
              <div className="flex justify-center items-center text-red-600 text-6xl">
                {exp.image}
              </div>
              <h3 className="text-2xl text-white second-font-black">
                {exp.title}
              </h3>
              <p className="text-lg text-gray-300">{exp.period}</p>
              <p className="text-md text-gray-400">{exp.description}</p>
              {exp.proofImages.length > 0 && (
                <p className="text-sm text-red-500 main-font mt-2">
                  (Click to see gallery)
                </p>
              )}
            </div>
          ))}
        </div>
        <Number
          number={"03"}
          position={"right"}
          animation={`${isVisible3 ? "animate-popin" : "opacity-0"}`}
        />
      </div>
    </MainLayout>
  );
};

Experience.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  setModalSlides: PropTypes.func.isRequired,
};

export default Experience;