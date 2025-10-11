import PropTypes from "prop-types";

const Title = ({ title, noMargin }) => {
  return (
    <h1
      className={`text-4xl main-font-bold ${
        noMargin ? "mt-0 mb-0" : "mt-4 mb-6"
      } md:text-5xl lg:text-7xl`}
    >
      {title}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  noMargin: PropTypes.string,
};

export default Title;
