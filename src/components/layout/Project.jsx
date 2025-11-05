import PropTypes from "prop-types";
import { useRef } from "react";
import MainLayout from "./MainLayout";
import Quote from "../common/Quote";
import { CarouselTransition } from "../common/Carousel";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import RotatingText from "../animation/RotatingText";
import MoreIcon from "../../assets/icon/more.svg";
import TitledLinkList from "../common/TitledLinkList";

const projectListData = [
  { name: "WayToRinjani", href: "#way-to-rinjani" },
  { name: "GoDec", href: "#godec" },
  { name: "PharmaCheck", href: "#pharmacheck" },
  { name: "Sudoku.Bovi", href: "#sudoku.bovi" },
  { name: "TicTacToe.Bovi", href: "#tictactoe.bovi" },
  { name: "InspireFlow", href: "#inspireflow" },
  { name: "Badminton Score", href: "#badminton-scoreboard" },
];

const Project = ({ imageSize, isHiddenLink, id }) => {
  const projectRef = useRef(null);
  const isVisible = useIntersectionObserver(projectRef, { threshold: 0.1 });
  const backgroundColor = "bg-primary";
  return (
    <MainLayout backgroundColor={backgroundColor}>
      <div
        ref={projectRef}
        className={`flex flex-col bg-gradient-to-b from-[#000] to-[#4A0E2E] px-6 md:px-12 lg:px-32 py-28 md:py-24 justify-normal md:justify-center items-center w-full gap-2 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-popin" : "opacity-0"
        }`}
        id={id}
      >
        <div className="flex flex-col items-start w-full mb-6">
          <a
            href="/projects"
            className="group relative inline-block overflow-hidden"
          >
            <h1 className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              PROJECTS
            </h1>
            <h1
              className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out absolute top-full left-0 group-hover:-translate-y-full"
              aria-hidden="true"
            >
              PROJECTS
            </h1>
          </a>
          <div className="flex flex-row justify-start items-center gap-4 text-md main-font md:text-lg lg:text-4xl letter-spacing-5">
            <h2>A Showcase of</h2>
            <RotatingText
              texts={["Dedication.", "Skill.", "Innovation."]}
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
        <div
          className={`${imageSize} flex flex-col sm:flex-row gap-6 justify-between ${
            isHiddenLink ? "items-start" : "items-end"
          }`}
        >
          <div className="flex justify-start items-start w-full sm:w-3/5 h-full ">
            <CarouselTransition />
          </div>
          <div className="flex justify-end mr-6 sm:mr-0">
            <a
              href="/projects"
              className={`flex justify-center text-base sm:text-2xl items-center gap-2 sm:gap-4 px-6 sm:px-12 py-3 sm:py-6 rounded-3xl cursor-pointer no-underline text-white second-font-black letter-spacing-5 transition-colors duration-400 bg-[#00473E] hover:bg-rightBar w-fit ${
                isHiddenLink ? "hidden" : "inline-flex"
              }`}
            >
              <span>Show Detail</span>
              <img
                src={MoreIcon}
                alt="Icon Download CV"
                className="w-6 sm:w-14"
              />
            </a>
            <TitledLinkList
              title="List Of Project"
              list={projectListData}
              isHidden={isHiddenLink}
            />
          </div>
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

Project.propTypes = {
  imageSize: PropTypes.string,
  isHiddenLink: PropTypes.string,
  id: PropTypes.string,
};

export default Project;
