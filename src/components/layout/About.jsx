import React, { useRef } from "react";
import MainLayout from "./MainLayout";
import Quote from "../common/Quote";
import Title from "../common/Title";
import Link from "../common/Link";
import SubTitle from "../common/SubTitle";
import SkillHome from "../../assets/images/SkillHome.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const About = ({ imageSize, isHiddenLink, id }) => {
  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const backgroundColor = "bg-primary";
  return (
    <MainLayout backgroundColor={backgroundColor}>
      <div
        ref={aboutRef}
        className={`relative flex flex-col justify-center items-center w-full gap-8 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-popin" : "opacity-50"
        }`}
        id={id}
      >
        <div className="xl:absolute xl:left-0 xl:w-3/5">
          <img
            src={SkillHome}
            alt="Skill Home"
            className={`${imageSize} object-cover`}
          />
        </div>
        <div className="flex items-center justify-end text-right w-full">
          <div className="z-10">
            <Title title={"ABOUT ME"} />
            <SubTitle
              subTitle={"Crafting My Journey in Technology and Innovation."}
            />
            <Link
              link={"/about"}
              text={"Show Me More"}
              isHidden={isHiddenLink}
            />
          </div>
        </div>
        <Quote quote={"Good code is its own best documentation."} />
      </div>
    </MainLayout>
  );
};

export default About;
