import React from "react";
import Styles from './index.module.css';
import {parseAndAlign} from "./kural";
import {useNavigate} from 'react-router-dom';

const KuralPage = ({kural}) => {
    let navigate=useNavigate();

    return(
        <div onClick={()=>navigate(`/kural/${kural.Index}`)} className={Styles.kuralPage}>
            <div className={Styles.bottom}>{kural.Index}. {parseAndAlign(kural.Tamil, `1em`)}</div>
        </div>
    )
}

export default KuralPage;