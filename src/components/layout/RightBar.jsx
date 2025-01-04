const RightBar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-rightBar rightBar p-12 flex flex-col justify-center items-center h-screen transform transition-transform duration-500 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="/">
        <h1>HOME</h1>
      </a>
      <a href="/projects">
        <h1>PROJECTS</h1>
      </a>
      <a href="/about">
        <h1>ABOUT ME</h1>
      </a>
      <a href="#contact">
        <h1>CONTACT</h1>
      </a>
    </div>
  );
};

export default RightBar;
