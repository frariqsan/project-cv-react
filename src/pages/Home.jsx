import React from "react";
import CurricuInfo from "../components/CurricuInfo";
import { CV } from "../CV/CV";
const { infoProject } = CV;

const Home = () => {
  return (
    <>
      <CurricuInfo infoProject={infoProject} />
    </>
  );
};

export default Home;
