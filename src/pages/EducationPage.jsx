import React from 'react';
import Education from "../components/Education";
import { CV } from "../CV/CV";
const { education } = CV;


const EducationPage = () => {
  return (
    <Education Education={education} />
  )
}

export default EducationPage;