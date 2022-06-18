import React from 'react';
import Experience from "../components/Experience";
import { CV } from "../CV/CV";
const { experience } = CV;


const ExperiencePage = () => {
  return (
    <Experience Experience={experience} />
  )
}

export default ExperiencePage;