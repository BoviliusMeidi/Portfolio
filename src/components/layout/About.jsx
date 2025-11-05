import PropTypes from "prop-types";
import { useRef } from "react";
import MainLayout from "./MainLayout";
import Quote from "../common/Quote";
import LogoLoop from "../animation/LogoLoop";
import MoreIcon from "../../assets/icon/more.svg";
import RotatingText from "../animation/RotatingText";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import TitledLinkList from "../common/TitledLinkList";
import {
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiLaravel,
  SiPython,
  SiDart,
  SiFlutter,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiNodedotjs,
  SiGithub,
  SiVercel,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    ariaLabel: "React website",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
    ariaLabel: "Next.js website",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
    ariaLabel: "Bootstrap website",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS website",
  },

  {
    node: <SiLaravel />,
    title: "Laravel",
    href: "https://laravel.com",
    ariaLabel: "Laravel website",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
    ariaLabel: "Node.js website",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
    ariaLabel: "Python website",
  },

  {
    node: <SiDart />,
    title: "Dart",
    href: "https://dart.dev",
    ariaLabel: "Dart website",
  },
  {
    node: <SiFlutter />,
    title: "Flutter",
    href: "https://flutter.dev",
    ariaLabel: "Flutter website",
  },

  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    ariaLabel: "PostgreSQL website",
  },
  {
    node: <SiFirebase />,
    title: "Firebase",
    href: "https://firebase.google.com",
    ariaLabel: "Firebase website",
  },
  {
    node: <SiSupabase />,
    title: "Supabase",
    href: "https://supabase.com",
    ariaLabel: "Supabase website",
  },

  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
    ariaLabel: "GitHub website",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
    ariaLabel: "Figma website",
  },

  {
    node: <SiVercel />,
    title: "Vercel",
    href: "https://vercel.com",
    ariaLabel: "Vercel website",
  },
];

const contentList = [
  { name: "Who I Am", href: "#who-i-am" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

const About = ({ isHiddenLink, id }) => {
  const aboutRef = useRef(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });
  const backgroundColor = "bg-primary";

  const logoLoopRef = useRef(null);
  const isLogoLoopVisible = useIntersectionObserver(logoLoopRef, {
    threshold: 0.1,
  });

  const fadeOutBgColor = "#6A1F3A";

  return (
    <MainLayout backgroundColor={backgroundColor}>
      <div
        ref={aboutRef}
        className={`flex flex-col px-6 md:px-12 lg:px-32 py-28 md:py-24 md:justify-center items-center w-full gap-8 transition-opacity duration-500 ease-in-out gradient-and-dragonleft-bg ${
          isVisible ? "animate-popin" : "opacity-0"
        }`}
        id={id}
      >
        <div className="flex items-start justify-end text-right w-full h-full">
          <div className="flex flex-col w-full gap-6 sm:gap-16 h-full">
            <div className="flex flex-col">
              <a
                href="/about"
                className="group relative inline-block overflow-hidden"
              >
                <h1 className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  ABOUT ME
                </h1>
                <h1
                  className="text-6xl third-font md:text-7xl lg:text-9xl transition-transform duration-500 ease-in-out absolute top-full right-0 group-hover:-translate-y-full"
                  aria-hidden="true"
                >
                  ABOUT ME
                </h1>
              </a>
              <div className="flex flex-row justify-end items-center gap-4 text-md main-font md:text-lg lg:text-4xl letter-spacing-3 sm:letter-spacing-5">
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
            <div className="flex sm:justify-end">
              <TitledLinkList
                title="List Of Content"
                list={contentList}
                isHidden={isHiddenLink}
              />
            </div>
            <div className="">
              <a
                href="/about"
                className={`flex justify-center text-base sm:text-2xl items-center gap-2 sm:gap-4 px-6 sm:px-12 py-3 sm:py-6 rounded-3xl cursor-pointer no-underline text-white second-font-black letter-spacing-5 transition-colors duration-400 bg-[#00473E] hover:bg-rightBar w-fit ${
                  isHiddenLink ? "hidden" : "inline-flex"
                }`}
              >
                <span>Show More</span>
                <img
                  src={MoreIcon}
                  alt="Icon Download CV"
                  className="w-6 sm:w-14"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          ref={logoLoopRef}
          className="w-full"
          style={{ height: "100px", position: "relative" }}
        >
          {isLogoLoopVisible && (
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor={fadeOutBgColor}
              ariaLabel="Technology partners"
            />
          )}
        </div>

        <Quote quote={"Good code is its own best documentation."} />
      </div>
    </MainLayout>
  );
};

About.propTypes = {
  // 8. UBAH: Hapus 'imageSize' karena tidak digunakan
  // imageSize: PropTypes.string,
  isHiddenLink: PropTypes.string,
  id: PropTypes.string,
};

export default About;
