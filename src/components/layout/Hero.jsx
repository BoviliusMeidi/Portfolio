import PropTypes from "prop-types";
import MainLayout from "./MainLayout";
import HeroImage from "../../assets/images/Hero-BoviliusMeidi.png";
import { TypeAnimation } from "react-type-animation";
import Quote from "../common/Quote";
import DownloadCVIcon from"../../assets/icon/download-cv.svg";

const Hero = ({ id }) => {
  const backgroundColor = "bg-primary";
  return (
    <MainLayout backgroundColor={backgroundColor} center={true}>
      <div
        className="flex flex-col py-28 w-full h-full md:py-0 md:justify-center items-center third-font gradient-and-dragonright-bg"
        id={id}
      >
        <div className="flex lg:flex-row justify-center items-center md:items-start lg:gap-12 flex-col gap-2 w-full transition-opacity duration-500 ease-in-out animate-popin">
          <a href="/about">
            <div className="group md:rounded-full overflow-hidden transition-all duration-300 ease-in-out cursor-pointer">
              <img
                src={HeroImage}
                alt="Bovilius Meidi"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          </a>
          <div className="flex flex-col justify-center w-full sm:w-fit md:h-full gap-2 sm:gap-16 md:text-left">
            <div className="flex flex-col justify-center items-center">
              <a
                href="/about"
                className="group relative inline-block overflow-hidden"
              >
                <h1 className="text-4xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  BOVILIUS MEIDI
                </h1>
                <h1
                  className="text-4xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out absolute top-full left-0 group-hover:-translate-y-full"
                  aria-hidden="true"
                >
                  BOVILIUS MEIDI
                </h1>
              </a>
              <TypeAnimation
                sequence={[
                  "FrontEnd Developer",
                  1000,
                  "BackEnd Developer",
                  1000,
                  "Website Developer",
                  1000,
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-xl md:text-4xl lg:text-6xl italic letter-spacing-10"
                repeat={Infinity}
              />
            </div>
            <div className="flex justify-end mr-6 sm:mr-0">
              <a
                href="/CV.pdf"
                className="flex justify-center text-base sm:text-2xl items-center gap-2 sm:gap-4 px-6 sm:px-12 py-3 sm:py-6 rounded-3xl cursor-pointer no-underline text-white second-font-black letter-spacing-5 transition-colors duration-400 bg-[#00473E] hover:bg-rightBar w-fit"
              >
                <span>Download CV</span>
                <img
                  src={DownloadCVIcon}
                  alt="Icon Download CV"
                  className="w-6 sm:w-14"
                />
              </a>
            </div>
          </div>
        </div>
        <Quote
          quote={"Code is like humor. When you have to explain it, it's bad."}
        />
      </div>
    </MainLayout>
  );
};

Hero.propTypes = {
  id: PropTypes.string,
};

export default Hero;
