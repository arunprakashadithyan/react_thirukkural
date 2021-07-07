import { React } from "react";
import Styles from './index.module.css'

 const Section = () => {
    return (
    <div className={Styles.section}>
        <p>Index: 1</p>
        <p>Tamil: அறத்துப்பால்</p>
        <p>English: Virtue</p>
        <p>Transliteration: Araththuppaal</p>
    </div>
    );
}

export default Section;