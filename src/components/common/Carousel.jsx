import { Carousel, IconButton } from "@material-tailwind/react";
import WayToRinjaniPicture from "../../assets/images/projects/WayToRinjaniPicture.png";
import GoDecPicture from "../../assets/images/projects/GoDecPicture.png";
import PharmaCheckPicture from "../../assets/images/projects/PharmaCheckPicture.png"
import SudokuBoviPicture from "../../assets/images/projects/SudokuBoviPicture.png";
import TicTacToeBoviPicture from "../../assets/images/projects/TicTacToeBoviPicture.png";
import InspireFlowPicture from "../../assets/images/projects/InspireFlowPicture.png";
import BadmintonScorePicture from "../../assets/images/projects/BadmintonScorePicture.png";

export function CarouselTransition() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay={true}
      loop={true}
      prevArrow={() => <IconButton className="hidden"><span/></IconButton>}
      nextArrow={() => <IconButton className="hidden"><span/></IconButton>}
      className="w-full h-full"
    >
      <img
        src={WayToRinjaniPicture}
        alt="Way To Rinjani Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
      <img
        src={GoDecPicture}
        alt="GoDec Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
      <img
        src={PharmaCheckPicture}
        alt="PharmaCheck Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
      <img
        src={SudokuBoviPicture}
        alt="SudokuBovi Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
      <img
        src={TicTacToeBoviPicture}
        alt="TicTacToeBovi Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
      <img
        src={InspireFlowPicture}
        alt="Inspire Flow Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
      <img
        src={BadmintonScorePicture}
        alt="Badminton Score Picture"
        className="w-full aspect-[16/9] object-contain opacity-75"
      />
    </Carousel>
  );
}
