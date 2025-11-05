import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import MainLayout from "../layout/MainLayout";
import Number from "../common/Number";
import AboutImage from "../../assets/images/About-BoviliusMeidi.png";
import RotatingText from "../animation/RotatingText";

const WhoIAm = () => {
  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

  return (
    <MainLayout backgroundColor={"bg-gradient-to-b from-[#6a1f3a] to-gray-900"}>
      <div
        ref={aboutRef}
        id="who-i-am"
        className={`flex justify-end md:justify-between px-6 md:px-12 lg:px-48 md:py-24 mb-32 md:mt-0 flex-col items-start gap-0 z-10 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-slideout" : "opacity-50"
        }`}
      >
        <div>
          <div className="group relative inline-block overflow-hidden">
            <h1 className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              WHO I AM ?
            </h1>
            <h1
              className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out absolute top-full right-0 group-hover:-translate-y-full"
              aria-hidden="true"
            >
              WHO I AM ?
            </h1>
          </div>
        </div>
        <div className="mb-4 sm:mt-8">
          <div className="flex flex-row justify-start items-center gap-4 main-font text-2xl lg:text-5xl letter-spacing-3 sm:letter-spacing-5">
            <h2>I&apos;m BOVILIUS MEIDI</h2>
          </div>
          <div className="flex flex-row justify-start items-center gap-4 main-font text-lg lg:text-3xl letter-spacing-3 sm:letter-spacing-5">
            <h2>Crafting My Journey In</h2>
            <RotatingText
              texts={["Technology.", "Creativity.", "Innovation."]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-red-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
        <p className="second-font-bold text-md md:text-2xl w-full md:w-1/2">
          Born in 2005, I am currently in my fifth semester of the Informatics
          Engineering major. In addition to learning about technology, I also
          hobby of play badminton, which teaches me the value of accuracy,
          consistency and always focus. For me, coding is similar to writing,
          where each line of code I write gives me the opportunity to learn
          something new and create something original. Because every challenge
          is an opportunity to learn and get better, I also get excited when I
          have the drive to explain a certain aspect of it.
        </p>
      </div>
      <div className="absolute z-0 top-[-15%] right-[-35%] md:top-[-10%] md:right-[-15%] md:w-3/4 md:h-[110%] overflow-hidden">
        <img
          src={AboutImage}
          alt=""
          className="w-full h-full object-cover rounded-bl-full md:rounded-l-full opacity-45"
        />
      </div>
      <Number
        number={"01"}
        position={"right"}
        animation={`${isVisible ? "animate-popin" : "opacity-0"}`}
      />
    </MainLayout>
  );
};

export default WhoIAm;