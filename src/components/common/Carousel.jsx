import { Carousel, IconButton } from "@material-tailwind/react";
import WayToRinjaniPicture from "../../assets/images/projects/WayToRinjaniPicture.png";
import GoDecPicture from "../../assets/images/projects/GoDecPicture.png";

export function CarouselTransition() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay={true}
      loop={true}
      prevArrow={() => <IconButton className="hidden"><span/></IconButton>}
      nextArrow={() => <IconButton className="hidden"><span/></IconButton>}
      className="rounded-xl relative z-0"
    >
      <img
        src={WayToRinjaniPicture}
        alt="image 1"
        className="w-full aspect-[16/9] object-cover opacity-65"
      />
      <img
        src={GoDecPicture}
        alt="image 2"
        className="w-full aspect-[16/9] object-cover opacity-65"
      />
    </Carousel>
  );
}
