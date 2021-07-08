import React from 'react';
import Styles from './index.module.css';
import { useHistory } from 'react-router-dom';

const Chapter = ({ chapter }) => {
    let history = useHistory();

    const goToKurals = (index) => {
        history.push(`/kurals/${index}`)
    }

    return (
        <div onClick={() => goToKurals(chapter.Index)} className={Styles.chapter}>
            <p>அதிகாரம்: {chapter.Index}</p>
            <p>Tamil: {chapter.Tamil}</p>
            <p>English: {chapter.English}</p>
            <p>Transliteration: {chapter.Transliteration}</p>
        </div>
    )
}

export default Chapter;