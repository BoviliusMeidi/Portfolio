import PropTypes from "prop-types";

const TitledLinkList = ({ title, list, isHidden }) => {
  return (
    <div
      className={`flex-col items-start gap-1 sm:gap-3 ${
        isHidden ? "flex" : "hidden"
      }`}
    >
      <h2 className="text-2xl md:text-3xl main-font text-white letter-spacing-5 sm:mb-2">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-x-6 sm:gap-y-2">
        {list.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="flex items-center gap-2 text-lg md:text-xl second-font-black text-white transition-all duration-300 hover:text-rightBar hover:translate-x-2"
          >
            <span className="text-red-600 text-2xl">&rsaquo;</span>
            {project.name}
          </a>
        ))}
      </div>
    </div>
  );
};

TitledLinkList.propTypes = {
  title: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TitledLinkList;