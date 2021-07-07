import React from 'react';
import Section from '../Section';
import Styles from './index.module.css'

const HomePage =  (props) => {
    return (
        <div className={Styles.homepage}>
            {props.sections && props.sections.map(sectionData => <Section key={sectionData.Index} sectionData = {sectionData} />
            )}
        </div>
    )
}

export default HomePage;