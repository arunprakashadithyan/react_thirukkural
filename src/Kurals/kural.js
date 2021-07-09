import React, {useEffect} from 'react';
import Styles from './index.module.css';
import parse from 'html-react-parser';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import * as actions from '../actions'


export const parseAndAlign = (content, width = '15em') => content?parse(content.replace('<br />',`<br /><span style="margin-left: ${width}">`)):null;

const Kural = ({kural,actions}) => {

    let params = useParams();
    useEffect(()=>{actions.getOneKural(params.kuralIndex)},[])
    
    return(
        <div className={Styles.kural}>
        <div className={Styles.bottom}><label>குறள்: </label> {kural.Index}</div>
        <div className={Styles.bottom}><label>Tamil: </label>{parseAndAlign(kural.Tamil)}</div>
        <div className={Styles.bottom}><label>KalaignarUrai: </label>{parseAndAlign(kural.KalaignarUrai)}</div>
        <div className={Styles.bottom}><label>MuVaUrai: </label>{parseAndAlign(kural.MuVaUrai)}</div>
        <div className={Styles.bottom}><label>SolomonPaapaiyaUrai: </label>{parseAndAlign(kural.SolomonPaapaiyaUrai)}</div>
        <div className={Styles.bottom}><label>English: </label>{parseAndAlign(kural.English)}</div>
        <div className={Styles.bottom}><label>EnglishMeaning: </label>{parseAndAlign(kural.EnglishMeaning)}</div>
        <div className={Styles.bottom}><label>TamilTransliteration: </label>{parseAndAlign(kural.TamilTransliteration)}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        kural:state.kural
    }
}

const mapDispatchToProps = state => {
    return{
        actions: bindActionCreators(actions,state)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Kural);