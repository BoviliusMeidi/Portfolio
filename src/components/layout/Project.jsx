import React, { useRef } from "react";
import MainLayout from "./MainLayout";
import Quote from "../common/Quote";
import Title from "../common/Title";
import Link from "../common/Link";
import SubTitle from "../common/SubTitle";
import { CarouselTransition } from "../common/Carousel";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Project = ({ imageSize, isHiddenLink, id }) => {
  const projectRef = useRef(null);
  const isVisible = useIntersectionObserver(projectRef, { threshold: 0.1 });
  const backgroundColor = "bg-secondary";
  return (
    <MainLayout backgroundColor={backgroundColor}>
      <div
        ref={projectRef}
        className={`relative flex flex-col justify-center items-center w-full gap-8 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-popin" : "opacity-0"
        }`}
        id={id}
      >
        <div className="flex items-center w-full">
          <div className="z-10">
            <Title title={"PROJECTS"} />
            <SubTitle
              subTitle={"A Showcase of Dedication, Skill, and Innovation."}
            />
            <Link
              link={"/Portfolio/projects"}
              text={"Show Me More"}
              isHidden={isHiddenLink}
            />
          </div>
        </div>
        <div className={`xl:absolute xl:right-0 ${imageSize}`}>
          <CarouselTransition />
        </div>
        <Quote
          quote={
            "The best way to get a project done faster is to start sooner."
          }
        />
      </div>
    </MainLayout>
  );
};

export default Project;
