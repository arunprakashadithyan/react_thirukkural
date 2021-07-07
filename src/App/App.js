import './App.css';
import HomePage from '../Home'
import { React, Component } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

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
        <h1>திருக்குறள்</h1>
        <HomePage sections={this.props.sections} />
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
