import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actions from '../actions'
import Chapter from './chapter';
import Styles from './index.module.css'


const Chapters = ({chapters, actions}) =>{

    let params = useParams();
    useEffect(()=>{params.sectionIndex?actions.getChapters(params.sectionIndex):actions.getComChapters()},[]);

    return (
        <div className={Styles.index}>
        {chapters.map(chapter => <Chapter key={chapter.Index} chapter={chapter} />)}
        </div>
        )
}

const mapStateToProps = (state) => {
    return{chapters:state.chapters};
}
const mapDispatchToProps = (dispatch) => {
    return{
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chapters);