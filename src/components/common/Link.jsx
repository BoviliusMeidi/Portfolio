const Link = ({ children, link, text, isHidden }) => {
  return (
    <a
      href={link}
      className={`${isHidden ? "hidden" : "inline-flex"} justify-center items-center gap-2 bg-white px-6 py-3 rounded-full cursor-pointer no-underline text-black second-font-black letter-spacing-5 transition-colors duration-400 hover:bg-rightBar hover:text-white`}
    >
      {children}
      <span>{text}</span>
    </a>
  );
};

export default Link;