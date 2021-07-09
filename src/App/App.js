import './App.css';
import HomePage from '../Home'
import { React, Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chapters from '../Chapters';
import Kurals from '../Kurals';
import Kural from '../Kurals/kural';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sections:[]
    }
  }

  render() {
    return (
      <div className="App">
        <p style={{fontSize:'3em', fontWeight:'bold'}}>திருக்குறள்</p>
        <Router>
          <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/chapter/:sectionIndex'  component={Chapters} />
          <Route path='/kurals/:chapterIndex'  component={Kurals} />
          <Route path='/kural/:kuralIndex'  component={Kural} />
          </Switch>
        </Router>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    sections: state
  }
}

export default connect(mapStateToProps)(App);
