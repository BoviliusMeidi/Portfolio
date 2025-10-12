import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Project from "../components/layout/Project";
import MyProject from "../components/layout/MyProject";
import WayToRinjaniPicture from "../assets/images/projects/WayToRinjaniPicture.png";
import WayToRinjaniLanguage from "../assets/images/projects/WayToRinjaniLanguage.svg";
import GoDecPicture from "../assets/images/projects/GoDecPicture.png";
import GoDecLanguage from "../assets/images/projects/GoDecLanguage.svg";
import PharmaCheckPicture from "../assets/images/projects/PharmaCheckPicture.png";
import PharmaCheckLanguage from "../assets/images/projects/PharmaCheckLanguage.svg";
import SudokuBoviPicture from "../assets/images/projects/SudokuBoviPicture.png";
import SudokuBoviLanguage from "../assets/images/projects/SudokuBoviLanguage.svg";
import TicTacToeBoviPicture from "../assets/images/projects/TicTacToeBoviPicture.png";
import TicTacToeBoviLanguage from "../assets/images/projects/TicTacToeBoviLanguage.svg";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Project imageSize={"xl:w-2/3"} isHiddenLink={true} />
      <MyProject
        backgroundColor={"bg-primary"}
        title={"Way To Rinjani"}
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
        title={"GoDec"}
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
      <MyProject
        backgroundColor={"bg-primary"}
        title={"PharmaCheck"}
        category={"Software Development"}
        number={"03"}
        positionNumber={"right"}
        position={"start"}
        description={
          "PharmaCheck is a website that provides reliable information for healthcare professionals and students. It connects to the Indonesian Ministry of Health's BPOM API to validate and display data on legally distributed medicines and medical devices."
        }
        noSite={false}
        linkSite={"https://pharma-check-wheat.vercel.app/"}
        linkGithub={"https://github.com/BoviliusMeidi/PharmaCheck"}
        languagePicture={PharmaCheckLanguage}
      >
        <div className="absolute z-0 bottom-0 right-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={PharmaCheckPicture}
            alt="Screenshot of PharmaCheck"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <MyProject
        backgroundColor={"bg-secondary"}
        title={"Sudoku.Bovi"}
        category={"Web Development"}
        number={"04"}
        positionNumber={"left"}
        position={"end"}
        description={
          "Sudoku.Bovi is a web-based Sudoku game built with Next.js and Tailwind CSS, showcasing my skills in responsive design and interactive UI development. Deployed on Vercel, it offers a smooth puzzle experience across devices."
        }
        noSite={false}
        linkSite={"https://sudoku-web-psi.vercel.app/"}
        linkGithub={"https://github.com/BoviliusMeidi/sudoku-web"}
        languagePicture={SudokuBoviLanguage}
      >
        <div className="absolute z-0 bottom-0 left-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={SudokuBoviPicture}
            alt="Screenshot of SudokuBovi"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <MyProject
        backgroundColor={"bg-primary"}
        title={"TicTacToe.Bovi"}
        category={"Web Development"}
        number={"05"}
        positionNumber={"right"}
        position={"start"}
        description={
          "TicTacToe.Bovi is a web-based TicTacToe game built with Next.js and Tailwind CSS, showcasing my skills in responsive design and interactive UI development. Deployed on Vercel, it offers a smooth puzzle experience across devices."
        }
        noSite={false}
        linkSite={"https://tictactoe-web-nine.vercel.app/"}
        linkGithub={"https://github.com/BoviliusMeidi/tictactoe-web"}
        languagePicture={TicTacToeBoviLanguage}
      >
        <div className="absolute z-0 bottom-0 right-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={TicTacToeBoviPicture}
            alt="Screenshot of PharmaCheck"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <Footer />
    </>
  );
};

export default Projects;
