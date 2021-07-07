import * as types from '../actions/actionTypes';
import initialState from './initialState';

const reducer =  (state = initialState.sections, action) => {
    switch(action.type){
        case types.GET_SECTIONS_LIST:
            return action.sections;
        default:
            return state;
    }
};

export default reducer;