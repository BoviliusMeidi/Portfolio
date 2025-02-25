import React, { useRef } from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Link from "../common/Link";
import MainLayout from "./MainLayout";
import Number from "../common/Number";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const MyProject = ({
  children,
  backgroundColor,
  title,
  category,
  number,
  positionNumber,
  position,
  description,
  noSite,
  linkSite,
  linkGithub,
  languagePicture,
}) => {
  const projectRef = useRef(null);
  const isVisible = useIntersectionObserver(projectRef, { threshold: 0.1 });
  return (
    <MainLayout className="justify-end" backgroundColor={backgroundColor}>
      <div
        ref={projectRef}
        className={`pt-24 pb-12 flex flex-col md:gap-10 gap-4 justify-start md:justify-around items-${position}`}
      >
        <div
          className={`z-10 transition-opacity ease-in-out ${
            isVisible ? "animate-popout" : "opacity-50"
          }`}
        >
          <div className={`flex flex-col gap-0 items-${position} z-10`}>
            <Title title={title} noMargin={true} />
            <SubTitle subTitle={category} />
          </div>
          <div
            className={`z-10 flex flex-row gap-4 justify-${position} items-center`}
          >
            <Link link={linkSite} text={"View Site"} isHidden={noSite}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.55556 50C4.02778 50 2.71991 49.456 1.63194 48.3681C0.543981 47.2801 0 45.9722 0 44.4444V5.55556C0 4.02778 0.543981 2.71991 1.63194 1.63194C2.71991 0.543981 4.02778 0 5.55556 0H25V5.55556H5.55556V44.4444H44.4444V25H50V44.4444C50 45.9722 49.456 47.2801 48.3681 48.3681C47.2801 49.456 45.9722 50 44.4444 50H5.55556ZM18.6111 35.2778L14.7222 31.3889L40.5556 5.55556H30.5556V0H50V19.4444H44.4444V9.44444L18.6111 35.2778Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link link={linkGithub} text={"GitHub"}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7238 40.2599C16.7238 40.4667 16.4919 40.6321 16.1996 40.6321C15.8669 40.6631 15.6351 40.4977 15.6351 40.2599C15.6351 40.0531 15.8669 39.8877 16.1593 39.8877C16.4617 39.8567 16.7238 40.0221 16.7238 40.2599ZM13.5887 39.7947C13.5181 40.0014 13.7198 40.2392 14.0222 40.3013C14.2843 40.4047 14.5867 40.3013 14.6472 40.0945C14.7077 39.8877 14.5161 39.6499 14.2137 39.5569C13.9516 39.4845 13.6593 39.5879 13.5887 39.7947ZM18.0444 39.6189C17.752 39.6913 17.5504 39.8877 17.5806 40.1255C17.6109 40.3323 17.873 40.4667 18.1754 40.3943C18.4677 40.322 18.6694 40.1255 18.6391 39.9187C18.6089 39.7223 18.3367 39.5879 18.0444 39.6189ZM24.6774 0C10.6956 0 0 10.8869 0 25.2271C0 36.693 7.03629 46.5047 17.0867 49.9579C18.377 50.1957 18.8306 49.3789 18.8306 48.7069C18.8306 48.0658 18.8004 44.5299 18.8004 42.3587C18.8004 42.3587 11.744 43.9096 10.2621 39.2777C10.2621 39.2777 9.1129 36.2691 7.45968 35.4937C7.45968 35.4937 5.15121 33.8704 7.62097 33.9015C7.62097 33.9015 10.131 34.1082 11.5121 36.5689C13.7198 40.5598 17.4194 39.4121 18.8609 38.7298C19.0927 37.0755 19.748 35.9279 20.4738 35.2455C14.8387 34.6045 9.15323 33.7671 9.15323 23.821C9.15323 20.9778 9.91936 19.551 11.5323 17.7313C11.2702 17.0593 10.4133 14.2884 11.7944 10.7112C13.9012 10.0391 18.75 13.5027 18.75 13.5027C20.7661 12.9237 22.9335 12.6239 25.0806 12.6239C27.2278 12.6239 29.3952 12.9237 31.4113 13.5027C31.4113 13.5027 36.2601 10.0288 38.3669 10.7112C39.748 14.2988 38.8911 17.0593 38.629 17.7313C40.2419 19.5613 41.2298 20.9881 41.2298 23.821C41.2298 33.7981 35.2923 34.5942 29.6573 35.2455C30.5847 36.0623 31.371 37.6131 31.371 40.0428C31.371 43.527 31.3407 47.8384 31.3407 48.6862C31.3407 49.3582 31.8044 50.175 33.0847 49.9372C43.1653 46.5047 50 36.693 50 25.2271C50 10.8869 38.6593 0 24.6774 0ZM9.79839 35.6591C9.66734 35.7625 9.69758 36.0003 9.86895 36.1967C10.0302 36.3621 10.2621 36.4345 10.3931 36.3001C10.5242 36.1967 10.494 35.9589 10.3226 35.7625C10.1613 35.597 9.92943 35.5247 9.79839 35.6591ZM8.70968 34.8216C8.63911 34.956 8.73992 35.1215 8.94153 35.2248C9.10282 35.3282 9.30444 35.2972 9.375 35.1525C9.44556 35.0181 9.34476 34.8526 9.14314 34.7493C8.94153 34.6872 8.78024 34.7182 8.70968 34.8216ZM11.9758 38.5023C11.8145 38.6367 11.875 38.9469 12.1069 39.1433C12.3387 39.3811 12.631 39.4121 12.7621 39.2467C12.8931 39.1123 12.8327 38.8021 12.631 38.6057C12.4093 38.3679 12.1069 38.3369 11.9758 38.5023ZM10.8266 36.9825C10.6653 37.0859 10.6653 37.3547 10.8266 37.5925C10.9879 37.8303 11.2601 37.9337 11.3911 37.8303C11.5524 37.6959 11.5524 37.427 11.3911 37.1893C11.25 36.9515 10.9879 36.8481 10.8266 36.9825Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div className={`flex justify-${position}`}>
            <p
              className={`z-10 mt-12 second-font-bold letter-spacing-5 md:w-1/3 text-xl text-${position}`}
            >
              {description}
            </p>
          </div>
        </div>
        <img
          src={languagePicture}
          alt="Programming Language Used"
          className={`z-10 transition-opacity ease-in-out ${
            isVisible ? "animate-popin" : "opacity-50"
          }`}
        />
        <div>{children}</div>
      </div>
      <Number
        number={number}
        position={positionNumber}
        animation={`${isVisible ? "animate-popin" : "opacity-0"}`}
      />
    </MainLayout>
  );
};
export default MyProject;
