import * as actionTypes from './actionTypes';
import Api from '../Api'

export function getAllSections(sections){
    return{type:actionTypes.GET_SECTIONS_LIST, sections};
}

export function getAllChapters(chapters){
    return{type:actionTypes.GET_CHAPTERS_LIST, chapters}
}

export function getSections() {
    return function(dispatch){
        return Api.getSections(sections => dispatch(getAllSections(sections)));
    }
}

export function getChapters(index){
    return function(dispatch){
        return Api.getChapters(index,chapters => dispatch(getAllChapters(chapters)));
    }
}