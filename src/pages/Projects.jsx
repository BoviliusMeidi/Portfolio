// Components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Project from "../components/layout/Project";
import MyProject from "../components/layout/MyProject";
// Language
import HTMLCSSJS from "../assets/images/projects/HTML-CSS-JS.svg";
import DartFlutterFirebase from "../assets/images/projects/Dart-Flutter-Firebase.svg";
import NextJSSupabaseVercel from "../assets/images/projects/NextJS-Supabase-Vercel.svg";
import NextJSTailwindVercel from "../assets/images/projects/NextJS-Tailwind-Vercel.svg";
// Preview
import WayToRinjaniPicture from "../assets/images/projects/WayToRinjaniPicture.png";
import GoDecPicture from "../assets/images/projects/GoDecPicture.png";
import PharmaCheckPicture from "../assets/images/projects/PharmaCheckPicture.png";
import SudokuBoviPicture from "../assets/images/projects/SudokuBoviPicture.png";
import TicTacToeBoviPicture from "../assets/images/projects/TicTacToeBoviPicture.png";
import InspireFlowPicture from "../assets/images/projects/InspireFlowPicture.png";
import BadmintonScorePicture from "../assets/images/projects/BadmintonScorePicture.png";

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
        languagePicture={HTMLCSSJS}
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
        languagePicture={DartFlutterFirebase}
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
        languagePicture={NextJSSupabaseVercel}
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
        languagePicture={NextJSTailwindVercel}
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
        languagePicture={NextJSTailwindVercel}
      >
        <div className="absolute z-0 bottom-0 right-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={TicTacToeBoviPicture}
            alt="Screenshot of TicTacToe.Bovi"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <MyProject
        backgroundColor={"bg-secondary"}
        title={"InspireFlow"}
        category={"Web Development"}
        number={"06"}
        positionNumber={"left"}
        position={"end"}
        description={
          "InspireFlow Web is a minimalist and elegant web application that displays daily and random inspirational quotes to brighten your day.Built with Next.js, and Tailwind CSS, it offers a smooth, responsive experience designed to motivate and uplift users with every visit."
        }
        noSite={false}
        linkSite={"https://inspireflow-web.vercel.app/"}
        linkGithub={"https://github.com/BoviliusMeidi/inspireflow-web"}
        languagePicture={NextJSTailwindVercel}
      >
        <div className="absolute z-0 bottom-0 left-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={InspireFlowPicture}
            alt="Screenshot of InspireFlow"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <MyProject
        backgroundColor={"bg-primary"}
        title={"Badminton Scoreboard"}
        category={"Web Development"}
        number={"07"}
        positionNumber={"right"}
        position={"start"}
        description={
          "A modern badminton scoreboard website (singles/doubles) using Next.js/Tailwind, deployed on Vercel. Features accurate BWF rules, live stats, point history, undo, and match summaries."
        }
        noSite={false}
        linkSite={"https://badmintonscore-web.vercel.app/"}
        linkGithub={"https://github.com/BoviliusMeidi/badmintonscore-web"}
        languagePicture={NextJSTailwindVercel}
      >
        <div className="absolute z-0 bottom-0 right-[-18%] md:w-2/3 overflow-hidden">
          <img
            src={BadmintonScorePicture}
            alt="Screenshot of Badminton Score"
            className="h-1/2 md:h-screen object-cover opacity-55"
          />
        </div>
      </MyProject>
      <Footer />
    </>
  );
};

export default Projects;
