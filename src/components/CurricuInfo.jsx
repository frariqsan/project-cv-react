import React from 'react';
import './CurricuInfo.scss';

function CurricuInfo({infoProject}) {
  return (
    <div className='me'>
    <img src={infoProject.image} alt='pic'></img>
    <div className='cardname'>
    <h2>
        {infoProject.name} {infoProject.lastName}
    </h2>
    <p>{infoProject.city}</p>
    <p>{infoProject.birthDate}</p>
    <p>
        <a href={"mailto:" + infoProject.email}>
            frariqsan@gmail.com
        </a>
    </p>
    <p>{infoProject.phone}</p>
    <p><a href={infoProject.github}>GitHub</a></p>
    </div>
    </div>
  );
};

export default CurricuInfo