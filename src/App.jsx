import './App.scss';
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import NewEducation from "./pages/NewEducation";
import EditEducation from "./pages/EditEducation";
import NewExperience from "./pages/NewExperience";
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';



function App() {
  return (
    <div className="app">
      <Router>
        <nav>
          <NavLink to="/"><button>Home</button></NavLink>
          <NavLink to="/newEducation"><button>New education</button></NavLink>
          <NavLink to="/newExperience"><button>New experience</button></NavLink>
          <NavLink to="/aboutPage"><button>About Me</button></NavLink>
          <NavLink to="/educationPage"><button>Education</button></NavLink>
          <NavLink to="/experiencePage"><button>Experience</button></NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/newEducation" element={<NewEducation/>} />
          <Route path="/editEducation/:id" element={<EditEducation/>}/>
          <Route path="/newExperience" element={<NewExperience/>}/>
          <Route path="/aboutPage" element={<AboutPage/>}/>
          <Route path="/educationPage" element={<EducationPage/>}/>
          <Route path="/experiencePage" element={<ExperiencePage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
