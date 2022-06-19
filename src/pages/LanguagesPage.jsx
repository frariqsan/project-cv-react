import React from 'react';
import Languages from "../components/Languages";
import { CV } from "../CV/CV";
const { languages } = CV;


const LanguagesPage = () => {
  return (
    <Languages Languages={languages} />
  )
}

export default LanguagesPage;