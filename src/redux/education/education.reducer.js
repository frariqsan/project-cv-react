import {CV} from "../../CV/CV";
import * as actions from "./education.actions";

const {education} = CV;

const INITIAL_STATE = {
    education: education,
}

const educationReducer = (state = INITIAL_STATE, action) => {
    const {education} = state;
    switch (action.type) {
        case actions.ADD_EDUCATION:
            return {...state, education: [...education, action.payload]};
        case actions.DELETE_EDUCATION:
            const educationFiltered = education.filter(educ => educ !== action.payload);
            return {...state, education: [...educationFiltered]};
            case actions.EDIT_EDUCATION:
                const {id, editEducation} = action.payload;
                education[id] = editEducation;
                return state
            default: 
                return state;

    }
};

export default educationReducer;