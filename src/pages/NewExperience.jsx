import React from 'react';
import { useDispatch } from 'react-redux';
import {addExperience} from '../redux/experience/experience.actions';
import { useForm } from 'react-hook-form';


const NewExperience = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(addExperience(formData));
    }
  
   return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <span>name</span>
            <input type="text" name="name" {...register('name',{
                required: "Please, enter a name",
                pattern: {
                    value: /^[a-zA-Z]{4,10}$/,
                    message: "Please enter a valid name",
                }
            })}/>
            {errors.name && errors.name.type === 'required' && <span>{errors.name.message}</span>}
            {errors.name && errors.name.type === 'pattern' && <span>{errors.name.message}</span>}
        </label>
        <label>
            <span>date</span>
            <input type="text" name="date" {...register('date', {pattern: {
                value: /^(19[0-9]\d|20[0-2]\d)$/,
                message: "Please enter a valid date"
                }})}/>
            {errors.date && errors.date.type === 'pattern' && <span>{errors.date.message}</span>}
        </label>
        <label>
            <span>where</span>
            <input type="text" name="description" {...register('description')}/>
        </label>
        <button>addExperience</button>
    </form>
  )
}

export default NewExperience;