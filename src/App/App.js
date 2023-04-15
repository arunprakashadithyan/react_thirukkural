import './App.css';
import HomePage from '../Home'
import { React, Component } from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chapters from '../Chapters';
import Kurals from '../Kurals';
import Kural from '../Kurals/kural';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/all' element={<Chapters />} />
            <Route path='/chapter/:sectionIndex' element={<Chapters />} />
            <Route path='/kurals/:chapterIndex' element={<Kurals />} />
            <Route path='/kural/:kuralIndex' element={<Kural />} />
          </Routes>
        </Router>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    sections: state
  }
}

export default connect(mapStateToProps)(App);
