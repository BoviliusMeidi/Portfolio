import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import MainLayout from "../layout/MainLayout";
import Number from "../common/Number";
import UntarLogo from "../../assets/images/Logo-Untar.png";

const Education = () => {
  const educationRef = useRef(null);
  const isVisible4 = useIntersectionObserver(educationRef, { threshold: 0.1 });
  const UNTAR_URL = "https://untar.ac.id/";

  return (
    <MainLayout backgroundColor={"bg-gradient-to-b from-[#9B082B] to-gray-900"}>
      <div
        ref={educationRef}
        id="education"
        className={`w-full flex flex-col px-6 md:px-12 lg:px-48 items-center md:block transition-opacity duration-500 ease-in-out ${
          isVisible4 ? "animate-popout" : "opacity-50"
        }`}
      >
        <div className="flex justify-start w-full mt-20 md:mt-18 flex-col items-end gap-0 z-10">
          <div className="group relative inline-block overflow-hidden">
            <h1 className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              EDUCATION
            </h1>
            <h1
              className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out absolute top-full right-0 group-hover:-translate-y-full"
              aria-hidden="true"
            >
              EDUCATION
            </h1>
          </div>
        </div>
        <div className="w-full justify-center flex items-center">
          <div className="w-fit z-10 mt-12 mb-12 flex flex-col md:flex-row justify-center items-center gap-6 bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-white/20">
            <div className="flex-shrink-0">
              <div className="text-6xl lg:text-8xl text-red-600">
                <a href={UNTAR_URL} target="_blank" rel="noopener noreferrer">
                  <img
                    src={UntarLogo}
                    className="w-40 sm:w-48"
                    alt="University Tarumanagara Logo"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <a
                href={UNTAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <h3 className="text-2xl lg:text-3xl text-white second-font-black transition-colors duration-300 hover:text-rightBar">
                  Tarumanagara University
                </h3>
              </a>
              <p className="text-lg text-gray-300 main-font">
                Informatics Engineering (2023 - Present)
              </p>
              <p className="text-md text-gray-400 main-font">
                Pursuing a Bachelor&apos;s degree in Informatics Engineering at
                Tarumanagara University
              </p>
            </div>
          </div>
        </div>

        <Number
          number={"04"}
          position={"left"}
          animation={`${isVisible4 ? "animate-popin" : "opacity-0"}`}
        />
      </div>
    </MainLayout>
  );
};

export default Education;
