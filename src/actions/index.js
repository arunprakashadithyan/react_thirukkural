import * as actionTypes from './actionTypes';
import Api from '../Api'

export function getAllSections(sections){
    return{type:actionTypes.GET_SECTIONS_LIST, sections};
}

export function getSections() {
    return function(dispatch){
        return Api.getSections(sections => dispatch(getAllSections(sections)));
    }
}