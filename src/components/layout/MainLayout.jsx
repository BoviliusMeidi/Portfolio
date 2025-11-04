import PropTypes from "prop-types"

const MainLayout = ({ children, backgroundColor, center }) => {
  return (
    <div
      className={`h-screen w-full relative ${backgroundColor} flex ${
        center ? "justify-center" : "justify-center lg:justify-normal"
      } overflow-hidden`}
    >
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children : PropTypes.node,
  backgroundColor : PropTypes.string,
  center : PropTypes.string
}

export default MainLayout;