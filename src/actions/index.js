import * as actionTypes from './actionTypes';
import Api from '../Api'

export function getAllSections(sections){
    return{type:actionTypes.GET_SECTIONS_LIST, sections};
}

export function getAllChapters(chapters){
    return{type:actionTypes.GET_CHAPTERS_LIST, chapters};
}

export function getAllKurals(kurals){
    return{type:actionTypes.GET_KURALS_LIST,kurals};
}

export function getBasicKural(kural){
    return{type:actionTypes.GET_ONE_KURAL,kural}
}

export function getAllComChapters(chapters){
    return{type:actionTypes.GET_ALL_CHAPTERS, chapters}
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

export function getKurals(index){
    return function(dispatch){
        return Api.getKurals(index, kurals => dispatch(getAllKurals(kurals)));
    }
}

export function getOneKural(index){
    return function(dispatch){
        return Api.getOneKural(index, kural => dispatch(getBasicKural(kural)));
    }
}

export function getComChapters(){
    return function(dispatch){
        return Api.getComChapters(chapters => dispatch(getAllComChapters(chapters)));
    }
}