import React from 'react';
import {connect} from 'react-redux';
import Chapter from './chapter';
import Styles from './index.module.css'


const Chapters = ({chapters}) =>{
    return (
        <div className={Styles.index}>
        {chapters.map(chapter => <Chapter key={chapter.Index} chapter={chapter} />)}
        </div>
        )
}

const mapStateToProps = (state) => {
    return{chapters:state.chapters};
}

export default connect(mapStateToProps)(Chapters);