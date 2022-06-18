import React from 'react';
import './About.scss';

const About = ({infoProject}) => {
  return (
    <div className="abouthero">
    {infoProject.about.map((item) =>{
        return(
            <div key={JSON.stringify(item)}>
                <p className="info">{item.info}</p>
            </div>
        )
    })}
</div>

  )
}

export default About