import PropTypes from "prop-types";

const Quote = ({ quote }) => {
  return (
    <div className="absolute bottom-10 mb-6 lg:mb-0 lg:bottom-5">
      <p className="text-center align-bottom second-font-bold letter-spacing-5 text-xs md:text-lg">
        {quote}
      </p>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string,
};

export default Quote;
