import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteExperience } from '../redux/experience/experience.actions';

import './Experience.scss';


const Experience = () => {
  const {experience} = useSelector(state => state.experience);
  const dispatch = useDispatch();
  
    return (
    <div>
        <div className='experience card'>
          {experience.map((item, index)=>{
            return(
              <div key={index}>
                <p className='name'><strong>{item.name}</strong></p>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
              <div>
                <Link to={`/editexperience/${index}`}><button>Modificar</button></Link>
                <button onClick={() => {dispatch(deleteExperience(item))}}>Eliminar</button>
              </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Experience