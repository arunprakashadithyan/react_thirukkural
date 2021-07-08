import * as types from '../actions/actionTypes';
import initialState from './initialState';

const reducer =  (state = initialState, action) => {
    switch(action.type){
        case types.GET_SECTIONS_LIST:
            return {...state,sections:action.sections};
        case types.GET_CHAPTERS_LIST:
            return {...state,chapters:action.chapters};
        default:
            return state;
    }
};

export default reducer;