import PropTypes from "prop-types";

const SubTitle = ({ subTitle, noMargin }) => {
  return (
    <h2
      className={`text-md second-font-bold ${
        noMargin ? "mt-0 mb-0" : "mt-4 mb-6"
      } md:text-lg lg:text-3xl letter-spacing-5`}
    >
      {subTitle}
    </h2>
  );
};

SubTitle.propTypes = {
  subTitle : PropTypes.string,
  noMargin : PropTypes.string
}

export default SubTitle;