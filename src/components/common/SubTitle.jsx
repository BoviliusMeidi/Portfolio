const SubTitle = ({ subTitle, noMargin }) => {
    return (
      <h2 className={`text-md second-font-bold ${noMargin ? "mt-0 mb-0" :"mt-4 mb-8"} md:text-lg lg:text-3xl letter-spacing-5`}>
        {subTitle}
      </h2>
    );
  };
  export default SubTitle;