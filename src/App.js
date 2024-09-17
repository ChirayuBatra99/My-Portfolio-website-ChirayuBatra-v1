import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/Navbar';
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills'
import Resume from './Pages/Resume'
import Project from './Pages/Project';
import BasicProjects from './Pages/ProjectPages/BasicProjects'
import IntermediateProjects from './Pages/ProjectPages/IntermediateProjects'
import AdvancedProjects from './Pages/ProjectPages/AdvancedProjects'
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="mainContainer">
      {/* <BrowserRouter> */}
        <div className='navbar'><NavBar /></div>
        <div className='mainContent'>
          <Routes class='mainContent'>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/projects/basic" element={<BasicProjects/>} />
            <Route path="/projects/intermediate" element={<IntermediateProjects/>} />
            <Route path="/projects/advance" element={<AdvancedProjects/>} />

          </Routes>
        </div>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
