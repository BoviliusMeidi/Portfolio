import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import MainLayout from "../layout/MainLayout";
import Number from "../common/Number";

import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiNodedotjs, SiPhp, SiLaravel,
  SiPython, SiPostgresql, SiMongodb, SiFirebase, SiSupabase,
  SiGit, SiGithub, SiFigma, SiVercel, SiFlutter, SiCplusplus,
  SiDart, SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { IoBuildOutline } from "react-icons/io5";
import VSCodeIcon from "../../assets/techstack/VS-Code.svg";

const VscodeBrandLogo = () => (
  <img
    src={VSCodeIcon}
    alt="Visual Studio Code"
    className="w-8 h-8 sm:w-12 sm:h-12"
  />
);

const webDevLogos = [
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiBootstrap />, title: "Bootstrap" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPhp />, title: "PHP" },
  { node: <SiLaravel />, title: "Laravel" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiFirebase />, title: "Firebase" },
  { node: <SiSupabase />, title: "Supabase" },
];

const otherLangLogos = [
  { node: <SiPython />, title: "Python" },
  { node: <SiFlutter />, title: "Flutter" },
  { node: <SiDart />, title: "Dart" },
  { node: <SiCplusplus />, title: "C ++" },
  { node: <FaJava />, title: "Java" },
];

const toolsLogos = [
  { node: <VscodeBrandLogo />, title: "Visual Studio Code" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiFigma />, title: "Figma" },
  { node: <SiVercel />, title: "Vercel" },
];

const TechStack = () => {
  const skillRef = useRef(null);
  const isVisible2 = useIntersectionObserver(skillRef, { threshold: 0.1 });

  return (
    <MainLayout backgroundColor={"bg-gray-900"}>
      <div
        ref={skillRef}
        id="skills"
        className={`w-full flex flex-col px-6 md:px-12 lg:px-48 items-center transition-opacity duration-500 ease-in-out ${
          isVisible2 ? "animate-popout" : "opacity-50"
        }`}
      >
        <div className="flex justify-start w-full mt-20 md:mt-18 flex-col items-end gap-0 z-10">
          <div className="group relative inline-block overflow-hidden">
            <h1 className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              TECH STACK
            </h1>
            <h1
              className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out absolute top-full right-0 group-hover:-translate-y-full"
              aria-hidden="true"
            >
              TECH STACK
            </h1>
          </div>
        </div>

        <div className="w-full main-font grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 z-10 mt-4 sm:mt-12">
          {/* Kartu 1: Web Development */}
          <div className="flex flex-col gap-2 sm:gap-4 bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <SiReact className="text-3xl text-red-600" />
              <h3 className="text-2xl text-white ">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {webDevLogos.map((logo) => (
                <div
                  key={logo.title}
                  title={logo.title}
                  className="text-3xl sm:text-5xl text-gray-300 transition-transform duration-200 hover:scale-110 hover:text-white"
                >
                  {logo.node}
                </div>
              ))}
            </div>
          </div>

          {/* Kartu 2: Other Languages */}
          <div className="flex flex-col gap-2 sm:gap-4 bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <HiOutlineCode className="text-3xl text-red-600" />
              <h3 className="text-2xl text-white">Other Languages</h3>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {otherLangLogos.map((logo) => (
                <div
                  key={logo.title}
                  title={logo.title}
                  className="text-3xl sm:text-5xl text-gray-300 transition-transform duration-200 hover:scale-110 hover:text-white"
                >
                  {logo.node}
                </div>
              ))}
            </div>
          </div>

          {/* Kartu 3: Tools */}
          <div className="flex flex-col gap-2 sm:gap-4 bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <IoBuildOutline className="text-3xl text-red-600" />
              <h3 className="text-2xl text-white">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {toolsLogos.map((logo) => (
                <div
                  key={logo.title}
                  title={logo.title}
                  className="text-3xl sm:text-5xl text-gray-300 transition-transform duration-200 hover:scale-110 hover:text-white"
                >
                  {logo.node}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Number
          number={"02"}
          position={"left"}
          animation={`${isVisible2 ? "animate-popin" : "opacity-0"}`}
        />
      </div>
    </MainLayout>
  );
};

export default TechStack;