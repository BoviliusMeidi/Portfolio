const MainLayout = ({ children, backgroundColor, center }) => {
  return (
    <div
      className={`h-screen w-full relative ${backgroundColor} px-6 flex ${
        center ? "justify-center" : "justify-center lg:justify-normal"
      } lg:px-48 md:px-12 overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
