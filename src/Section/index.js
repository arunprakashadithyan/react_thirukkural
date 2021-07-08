import { React } from "react";
import Styles from './index.module.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as apiActions from '../actions'
import { withRouter } from "react-router-dom";

 const Section = (props) => {
    const {sectionData, actions, history} = props;
    const goToChapter = (sectionData) => {
        actions.getChapters(sectionData.Index)
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

const mapDispatchToProps = (dispatch) =>{
    return{
        actions:bindActionCreators(apiActions,dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Section));