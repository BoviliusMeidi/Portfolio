import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Navigate, useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  return (
    <div className="h-screen mx-auto flex flex-col justify-center items-center text-center px-8 main-font bg-red-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="60px"
        viewBox="0 -960 960 960"
        width="60px"
        fill="#FFFFFF"
      >
        <path d="M479.98-280q14.02 0 23.52-9.48t9.5-23.5q0-14.02-9.48-23.52t-23.5-9.5q-14.02 0-23.52 9.48t-9.5 23.5q0 14.02 9.48 23.52t23.5 9.5ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
      </svg>
      <div>
        <Typography
          color="white"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl main-font-bold"
        >
          Error 404 <br /> It looks like something went wrong.
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-white main-font mx-auto md:max-w-md">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </div>
      <div className="flex gap-10">
        <Button
          color="white"
          className="main-font w-full md:w-[10rem]"
          onClick={() => navigate("/Portfolio/")}
        >
          home
        </Button>
        <Button
          color="white"
          className="main-font w-full md:w-[10rem]"
          onClick={() => navigate("/Portfolio/projects")}
        >
          projects
        </Button>
        <Button
          color="white"
          className="main-font w-full md:w-[10rem]"
          onClick={() => navigate("/Portfolio/about")}
        >
          about
        </Button>
      </div>
    </div>
  );
}

export default Error;
