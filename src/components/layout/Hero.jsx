import Link from "../common/Link";
import MainLayout from "./MainLayout";
import Title from "../common/Title";
import HeroImage from "../../assets/images/Hero-BoviliusMeidi.png";
import { TypeAnimation } from "react-type-animation";
import Quote from "../common/Quote";

const Hero = ({ id }) => {
  const backgroundColor = "bg-primary";
  return (
    <MainLayout backgroundColor={backgroundColor} center={true}>
      <div
        className="relative flex flex-col justify-center items-center "
        id={id}
      >
        <div
          className={`flex lg:flex-row justify-center items-center lg:gap-32 flex-col gap-3 w-full transition-opacity duration-500 ease-in-out animate-popin`}
        >
          <img
            src={HeroImage}
            alt="Bovilius Meidi"
            className="w-96 rounded-full "
          />
          <div className="md:text-left w-full">
            <TypeAnimation
              sequence={[
                "FrontEnd Developer",
                1000,
                "BackEnd Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="lg:text-4xl text-2xl md:text-3xl second-font-bold-italic letter-spacing-10"
              repeat={Infinity}
            />
            <a href="/about">
              <Title title={"BOVILIUS MEIDI"} />
            </a>
            <Link link={"/"} text={"Download CV"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                fill="#000000"
              >
                <path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z" />
              </svg>
            </Link>
          </div>
        </div>
        <Quote
          quote={"Code is like humor. When you have to explain it, it's bad."}
        />
      </div>
    </MainLayout>
  );
};

export default Hero;
