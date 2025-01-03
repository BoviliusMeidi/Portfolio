import { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import SocialMedia from "../common/SocialMedia";
import MenuBar from "../common/MenuBar";
import RightBar from "./RightBar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isHidden = true;
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header className="">
      <nav className="p-6 fixed w-full bg-transparent top-0 left-0 z-50 flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="Logo Bovilius Meidi" className="w-24 sm:ml-4 md:ml-16" />
        </a>
        <div className="flex flex-row gap-32 items-center sm:mr-4 md:mr-16">
          <SocialMedia isHidden={isHidden}/>
          <MenuBar isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
      <RightBar isOpen={isOpen}/>
    </header>
  );
};

export default Navbar;