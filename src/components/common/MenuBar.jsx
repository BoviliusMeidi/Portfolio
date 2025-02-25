const SizeSVG = 30;

const MenuBar = ({isOpen, toggleMenu}) => {
  return (
    <div>
      <button onClick={toggleMenu} className="flex justify-center items-center">
        {isOpen ? (
          <svg
            width={SizeSVG}
            height={SizeSVG}
            viewBox="0 0 50 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.3125 0H4.6875C2.09961 0 0 2.09961 0 4.6875V39.0625C0 41.6504 2.09961 43.75 4.6875 43.75H45.3125C47.9004 43.75 50 41.6504 50 39.0625V4.6875C50 2.09961 47.9004 0 45.3125 0ZM37.1484 28.3691C37.6172 28.8379 37.6172 29.5996 37.1484 30.0684L33.1934 34.0234C32.7246 34.4922 31.9629 34.4922 31.4941 34.0234L25 27.4707L18.5059 34.0234C18.0371 34.4922 17.2754 34.4922 16.8066 34.0234L12.8516 30.0684C12.3828 29.5996 12.3828 28.8379 12.8516 28.3691L19.4043 21.875L12.8516 15.3809C12.3828 14.9121 12.3828 14.1504 12.8516 13.6816L16.8066 9.72656C17.2754 9.25781 18.0371 9.25781 18.5059 9.72656L25 16.2793L31.4941 9.72656C31.9629 9.25781 32.7246 9.25781 33.1934 9.72656L37.1484 13.6816C37.6172 14.1504 37.6172 14.9121 37.1484 15.3809L30.5957 21.875L37.1484 28.3691Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width={SizeSVG}
            height={SizeSVG}
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.875 41.375H42.125V34.5H0.875V41.375ZM0.875 24.1875H42.125V17.3125H0.875V24.1875ZM0.875 0.125V7H42.125V0.125H0.875Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MenuBar;