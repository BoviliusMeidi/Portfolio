const Quote = ({ quote }) => {
  return (
    <div className="absolute bottom-10 mb-12 lg:mb-0 lg:bottom-5">
      <p className="text-center align-bottom second-font-bold letter-spacing-5 text-md">
        {quote}
      </p>
    </div>
  );
}

export default Quote;