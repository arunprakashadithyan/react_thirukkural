import React, { useEffect } from 'react';
import Styles from './index.module.css';
import KuralPage from './kuralPage';
import {connect} from 'react-redux'
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import { useParams } from 'react-router-dom';


const Kurals = (props) => {

    const {kurals, actions} = props;
    let params = useParams();

    useEffect(()=>{actions.getKurals(params.chapterIndex)},[])

    return(
        <div className={Styles.index}>
            {kurals.map(kural => <KuralPage key={kural.Index} kural = {kural} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        kurals: state.kurals
    }
}

const mapDispatchToProps = dispatch => {
    return{
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kurals);