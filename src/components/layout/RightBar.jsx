import { HashLink } from "react-router-hash-link";

const RightBar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-rightBar rightBar p-12 flex flex-col justify-center items-center h-screen transform transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="/">
        HOME
      </a>
      <a href="/projects">
        PROJECTS
      </a>
      <a href="/about">
        ABOUT ME
      </a>
      <HashLink to="/#contact"> CONTACT </HashLink>
    </div>
  );
};

export default RightBar;
