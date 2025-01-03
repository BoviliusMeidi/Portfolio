import SocialMedia from "../common/SocialMedia";
import Logo from "../../assets/images/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-footer p-6 flex flex-col-reverse justify-between items-center gap-12 md:flex-row md:gap-0">
      <div className="ml-4 flex flex-col gap-16 md:ml-16">
        <div className="flex flex-col gap-4 main-font">
          <h1 className="text-3xl">Bovilius Meidi</h1>
          <p className="second-font-light letter-spacing-5">
            👋 Hi, I'm Bovilius Meidi — Crafting My Journey in Technology and
            Innovation.
          </p>
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="main-font-semibold letter-spacing-10">
            <a href="/">HOME</a> | <a href="/projects">PROJECTS</a> | <a href="/about">ABOUT</a>{" "}
            | <a href="#contact">CONTACT</a>
          </h2>
          <p className="second-font-light">
            <a href="">&copy; 2025 Bovilius Meidi.</a> All rights reserved
          </p>
        </div>
      </div>
      <div>
        <img
          src={Logo}
          alt="Logo Bovilius Meidi"
          className="w-64 sm:mr-4 md:mr-24 max-md:mt-6"
        />
      </div>
    </footer>
  );
};

export default Footer;
