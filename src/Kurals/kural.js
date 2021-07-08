import React from 'react';
import Styles from './index.module.css';
import parse from 'html-react-parser';


const Kural = ({kural}) => {

    const parseAndAlign = content => parse(content.replace('<br />','<br /><span>'))

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

export default Kural;