import React, { useRef } from "react";
import MainLayout from "./MainLayout";
import Quote from "../common/Quote";
import Title from "../common/Title";
import SocialMedia from "../common/SocialMedia";
import SubTitle from "../common/SubTitle";
import ContactImage from "../../assets/images/Contact-BoviliusMeidi.png"
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Contact = ({ id }) => {
  const contactRef = useRef(null);
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });
  const backgroundColor = "bg-secondary";
  return (
    <MainLayout backgroundColor={backgroundColor}>
      <div
        ref={contactRef}
        className={`relative flex flex-col justify-center items-center w-full gap-8 transition-opacity duration-500 ease-in-out ${
          isVisible ? "animate-popin" : "opacity-50"
        }`}
        id={id}
      >
        <div className="flex items-center justify-center xl:justify-start w-full">
          <div className="z-10">
            <Title title={"GET IN TOUCH"} />
            <a href="">
              <SubTitle subTitle={"boviliusbm@gmail.com"} />
            </a>
            <SocialMedia />
          </div>
        </div>
        <div className="xl:absolute xl:right-0">
          <img src={ContactImage} alt="" className="relative w-2/3 ml-auto mr-auto xl:mr-0"/>
        </div>
        <Quote quote={"Simplicity is the soul of efficiency."} />
      </div>
    </MainLayout>
  );
};

export default Contact;