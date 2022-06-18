import React from "react";
import Experience from "../components/Experience";
import CurricuInfo from "../components/CurricuInfo";
import More from "../components/More";
import { CV } from "../CV/CV";
const { infoProject, experience, languages } = CV;

const Home = () => {
  return (
    <>
      <CurricuInfo infoProject={infoProject} />
      {/* <button
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
      /> */}
    </>
  );
};

export default Home;
