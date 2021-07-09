import React from "react";
import Styles from './index.module.css';
import {parseAndAlign} from "./kural";
import {useHistory} from 'react-router-dom';

const KuralPage = ({kural}) => {
    let history=useHistory();

    return(
        <div onClick={()=>history.push(`/kural/${kural.Index}`)} className={Styles.kuralPage}>
            <div className={Styles.bottom}>{kural.Index}. {parseAndAlign(kural.Tamil, `1em`)}</div>
        </div>
    )
}

export default KuralPage;