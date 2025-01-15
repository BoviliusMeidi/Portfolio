import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/about" element={<About/>} />
        <Route path="/Portfolio/projects" element={<Projects/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;