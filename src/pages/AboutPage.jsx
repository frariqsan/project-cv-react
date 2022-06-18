import React from 'react';
import About from "../components/About";
import { CV } from "../CV/CV";
const { infoProject } = CV;


const AboutPage = () => {
  return (
    <About infoProject={infoProject} />
  )
}

export default AboutPage