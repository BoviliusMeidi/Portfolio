import PropTypes from "prop-types";
import { useRef } from "react";
import MainLayout from "./MainLayout";
import Quote from "../common/Quote";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import ContactImage from "../../assets/icon/contact.svg";
import EyeIcon from "../../assets/icon/eye.svg";
import EmailIcon from "../../assets/icon/email.svg";
import GithubIcon from "../../assets/icon/github.svg";
import LinkedinIcon from "../../assets/icon/linkedin.svg";
import InstagramIcon from "../../assets/icon/instagram.svg";

const SOCIAL_MEDIA_URLS = {
  email: "mailto:boviliusbm@gmail.com",
  github: "https://github.com/BoviliusMeidi",
  linkedin: "https://linkedin.com/in/bovilius-meidi",
  instagram: "https://instagram.com/boviliusmeidi",
};

const Contact = ({ id }) => {
  const contactRef = useRef(null);
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });
  const backgroundColor = "bg-primary";
  return (
    <MainLayout backgroundColor={backgroundColor}>
      <div
        ref={contactRef}
        className={`relative bg-gradient-to-b from-[#6A1F3A] to-footer flex flex-col p-4 sm:p-0 py-28 md:py-0 md:justify-center items-center w-full gap-8 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-popin" : "opacity-0"
        }`}
        id={id}
      >
        <div className="flex flex-col justify-between sm:justify-normal sm:flex-row h-full gap-6 sm:gap-12">
          <div className="flex items-center mb-2 justify-center xl:justify-start w-full">
            <div className="z-10 flex flex-col gap-6 sm:gap-16 w-full">
              <div className="flex flex-col justify-end w-full group">
                <h1 className="text-6xl third-font md:text-7xl lg:text-9xl">
                  GET IN
                </h1>
                <h1 className="flex justify-end items-center text-6xl third-font md:text-7xl lg:text-9xl text-left gap-2 sm:gap-6">
                  <img
                    src={EyeIcon}
                    className="w-8 h-8 sm:w-24 sm:h-24 transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  />
                  TOUCH
                </h1>
              </div>
              <div className="flex flex-row third-font gap-2 sm:gap-12">
                <div>
                  <a
                    href={SOCIAL_MEDIA_URLS.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-start items-center px-2 py-3 gap-4 transition-transform duration-300 hover:-translate-y-2 "
                  >
                    <img src={EmailIcon} className="w-6 h-6 sm:w-12 sm:h-12" />
                    <p className="text-md md:text-lg lg:text-3xl letter-spacing-5">
                      Email
                    </p>
                  </a>
                  <a
                    href={SOCIAL_MEDIA_URLS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-start items-center px-2 py-3 gap-4 transition-transform duration-300 hover:-translate-y-2 "
                  >
                    <img src={GithubIcon} className="w-6 h-6 sm:w-12 sm:h-12" />
                    <p className="text-md md:text-lg lg:text-3xl letter-spacing-5">
                      GitHub
                    </p>
                  </a>
                </div>
                <div>
                  <a
                    href={SOCIAL_MEDIA_URLS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-start items-center px-2 py-3 gap-4 transition-transform duration-300 hover:-translate-y-2 "
                  >
                    <img
                      src={LinkedinIcon}
                      className="w-6 h-6 sm:w-12 sm:h-12"
                    />
                    <p className="text-md md:text-lg lg:text-3xl letter-spacing-5">
                      LinkedIn
                    </p>
                  </a>
                  <a
                    href={SOCIAL_MEDIA_URLS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-start items-center px-2 py-3 gap-4 "
                  >
                    <img
                      src={InstagramIcon}
                      className="w-6 h-6 sm:w-12 sm:h-12"
                    />
                    <p className="text-md md:text-lg lg:text-3xl letter-spacing-5">
                      Instagram
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={ContactImage}
              alt="Ilustration Contact"
              className="w-48 h-48 sm:w-full sm:h-full"
            />
          </div>
        </div>
        <Quote quote={"Simplicity is the soul of efficiency."} />
      </div>
    </MainLayout>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
};

export default Contact;
