import React from "react";
import {useState} from "react";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import CurricuInfo from "../components/CurricuInfo";
import More from "../components/More";
import { CV } from "../CV/CV";
const { infoProject, experience, languages } = CV;

const Home = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
      <CurricuInfo infoProject={infoProject} />
      <About infoProject={infoProject} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
      className="custom-btn btn-4"
      onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (<Education />) : (<Experience experience={experience}/>)}
      </div>
      <More
        languages={languages}
      />
    </>
  );
};

export default Home;
