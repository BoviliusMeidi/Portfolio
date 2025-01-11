import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Project from "../components/layout/Project";
import MyProject from "../components/layout/MyProject";
import WayToRinjaniLanguage from "../assets/images/projects/WayToRinjaniLanguage.svg";
import GoDecLanguage from "../assets/images/projects/GoDecLanguage.svg";
import WayToRinjaniPicture from "../assets/images/projects/WayToRinjaniPicture.png";
import GoDecPicture from "../assets/images/projects/GoDecPicture.png";

const Projects = () => {
  return (
    <>
    <Navbar/>
      <Project imageSize={"xl:w-2/3"} isHiddenLink={true}/>
      <MyProject
      backgroundColor={"bg-primary"}
        title={"WAY TO RINJANI"}
        category={"Web Development | Front End"}
        number={"01"}
        positionNumber={"right"}
        position={"start"}
        description={
          "Way to Rinjani's website makes it easy to book trekking tours to Mount Rinjani in Lombok. It offers clear information on packages, guides, and essential services like meals and equipment. The site is user-friendly, helping you plan your adventure with ease for a safe and enjoyable trek."
        }
        noSite={false}
        linkSite={"https://waytorinjani.com"}
        linkGithub={"https://github.com/hanseehhh/waytorinjani"}
        languagePicture={WayToRinjaniLanguage}
      >
        <div className="absolute z-0 bottom-0 right-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={WayToRinjaniPicture}
            alt="Screenshot of Way to Rinjani"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <MyProject
      backgroundColor={"bg-secondary"}
        title={"GODEC"}
        category={"Mobile Development"}
        number={"02"}
        positionNumber={"left"}
        position={"end"}
        description={
          "GoDec is a mobile platform for booking public transportation, including cars and motorcycles. Users can act as customers or drivers, with comprehensive features for an efficient and enjoyable booking experience."
        }
        noSite={true}
        linkGithub={"https://github.com/HengkyLaurencio/GoDec"}
        languagePicture={GoDecLanguage}
      >
        <div className="absolute z-0 bottom-0 left-0 md:w-2/3 overflow-hidden">
          <img
            src={GoDecPicture}
            alt="Screenshot of GoDec"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <Footer/>
    </>
  );
};

export default Projects;
