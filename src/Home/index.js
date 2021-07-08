import React from 'react';
import Section from '../Section';
import Styles from './index.module.css'
import {connect} from 'react-redux';

const HomePage =  (props) => {
    return (
        <div className={Styles.homepage}>
            {props.sections && props.sections.map(sectionData => <Section key={sectionData.Index} sectionData = {sectionData} />
            )}
        </div>
    )
}

function mapStateToProps(state){
    return {
      sections: state.sections
    }
  }

export default connect(mapStateToProps)(HomePage);