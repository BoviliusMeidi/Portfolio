import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

const RightBar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-rightBar rightBar p-12 gap-8 flex flex-col justify-center items-center h-screen transform transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="/" className="group relative inline-block overflow-hidden">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          HOME
        </h1>
        <h1
          className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out absolute top-full left-0 group-hover:-translate-y-full"
          aria-hidden="true"
        >
          HOME
        </h1>
      </a>
      <a
        href="/projects"
        className="group relative inline-block overflow-hidden"
      >
        <h1 className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          PROJECTS
        </h1>
        <h1
          className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out absolute top-full left-0 group-hover:-translate-y-full"
          aria-hidden="true"
        >
          PROJECTS
        </h1>
      </a>
      <a href="/about" className="group relative inline-block overflow-hidden">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          ABOUT ME
        </h1>
        <h1
          className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out absolute top-full left-0 group-hover:-translate-y-full"
          aria-hidden="true"
        >
          ABOUT ME
        </h1>
      </a>
      <HashLink to="/#contact">
        <div className="group relative inline-block overflow-hidden">
          <h1 className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            CONTACT
          </h1>
          <h1
            className="text-5xl font-bold md:text-7xl lg:text-[7rem] transition-transform duration-500 ease-in-out absolute top-full left-0 group-hover:-translate-y-full"
            aria-hidden="true"
          >
            CONTACT
          </h1>
        </div>{" "}
      </HashLink>
    </div>
  );
};

RightBar.propTypes = {
  isOpen: PropTypes.bool,
};

export default RightBar;
