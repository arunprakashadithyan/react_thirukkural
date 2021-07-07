import { React } from "react";
import Styles from './index.module.css'

 const Section = ({sectionData}) => {
    return (
    <div className={Styles.section}>
        <p>பால்: {sectionData.Index}</p>
        <p>Tamil: {sectionData.Tamil}</p>
        <p>English: {sectionData.English}</p>
        <p>Transliteration: {sectionData.Transliteration}</p>
    </div>
    );
}

export default Section;