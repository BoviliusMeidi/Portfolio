import { useRef } from "react";
import Navbar from '../components/layout/Navbar';
import Footer from "../components/layout/Footer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import About from "../components/layout/About";
import Number from "../components/common/Number";
import MainLayout from "../components/layout/MainLayout";
import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import AboutImage from "../assets/images/About-BoviliusMeidi.png";
import Skill from "../assets/images/Skill.svg";
import SkillLeft from "../assets/images/SkillLeft.svg";
import SkillRight from "../assets/images/SkillRight.svg";

const AboutMe = () => {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const isVisible2 = useIntersectionObserver(skillRef, { threshold: 0.1 });
  return (
    <>
    <Navbar/>
      <About imageSize={"h-72 md:h-128"} isHiddenLink={true}/>
      <MainLayout backgroundColor={"bg-secondary"}>
        <div ref={aboutRef}
        className={`flex justify-end md:justify-center px-6 md:px-12 lg:px-48 mb-32 md:mt-0 flex-col items-start gap-0 z-10 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-slideout" : "opacity-50"
        }`}>
          <Title title={"WHO I AM"} />
          <SubTitle subTitle={"I'M BOVILIUS MEIDI"} noMargin={true} />
          <SubTitle
            subTitle={"Crafting Journey in Technology and Innovation."}
          />
          <p className="second-font-bold text-xs md:text-xl w-full md:w-1/2">
            Born in 2005, I am currently in my fourth semester of the
            Informatics Engineering major. In addition to learning about
            technology, I also hobby of play badminton, which teaches me the
            value of accuracy, consistency and always focus. For me, coding is
            similar to writing, where each line of code I write gives me the
            opportunity to learn something new and create something original.
            Because every challenge is an opportunity to learn and get better, I
            also get excited when I have the drive to explain a certain aspect
            of it.
          </p>
        </div>
        <div className="absolute z-0 top-[-15%] right-[-35%] md:top-[-10%] md:right-[-15%] md:w-3/4 md:h-[110%] overflow-hidden">
          <img
            src={AboutImage}
            alt=""
            className="w-full h-full object-cover rounded-bl-full md:rounded-l-full opacity-45"
          />
        </div>
        <Number number={"01"} position={"right"} animation={`${isVisible ? "animate-popin" : "opacity-0"}`}/>
      </MainLayout>
      <MainLayout backgroundColor={"bg-primary"}>
        <div ref={skillRef}
        className={`w-full flex flex-col px-6 md:px-12 lg:px-48 items-center md:block transition-opacity duration-500 ease-in-out ${
          isVisible2 ? "animate-popout" : "opacity-50"
        }`}>
          <div className="flex justify-start w-full mt-20 md:mt-32 flex-col items-end gap-0 z-10">
            <Title title={"SKILLS"} />
          </div>
          <img
            src={SkillLeft}
            alt=""
            className="hidden md:block absolute top-16 w-96"
          />
          <p className="mb-5 md:absolute text-xl md:text-5xl md:w-1/2 md:top-80 md:left-1/2 md:transform md:-translate-x-1/3">
            I haven&apos;t mastered every skill yet, but I&apos;m committed to mastering
            them when needed.
          </p>
          <img src={Skill} alt="" className="md:hidden w-60 mt-12" />
          <img
            src={SkillRight}
            alt=""
            className="hidden md:block absolute right-0 lg:right-52 bottom-44 md:bottom-20 w-96"
          />
        </div>
        <Number number={"02"} position={"left"} animation={`${isVisible2 ? "animate-popin" : "opacity-0"}`}/>
      </MainLayout>
      <Footer/>
    </>
  );
};

export default AboutMe;
