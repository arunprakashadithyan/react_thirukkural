import React from 'react';
import Styles from './index.module.css';

const Chapter = ({chapter}) =>{
    return(
        <div className={Styles.chapter}>
        <p>பால்: {chapter.Index}</p>
        <p>Tamil: {chapter.Tamil}</p>
        <p>English: {chapter.English}</p>
        <p>Transliteration: {chapter.Transliteration}</p>
        </div>
    )
}

export default Chapter;