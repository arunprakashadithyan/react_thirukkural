import { React } from "react";
import Styles from './index.module.css';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

 const Section = (props) => {
    const {sectionData, history} = props;
    const goToChapter = (sectionData) => {
        history.push(`/chapter/${sectionData.Index}`)
    }

    return (
    <div onClick = {()=>goToChapter(sectionData)} className={Styles.section}>
        <p>பால்: {sectionData.Index}</p>
        <p>Tamil: {sectionData.Tamil}</p>
        <p>English: {sectionData.English}</p>
        <p>Transliteration: {sectionData.Transliteration}</p>
    </div>
    );
}

const mapStateToProps = (state) => {
    return{chapters:state}
}

export default withRouter(connect(mapStateToProps)(Section));