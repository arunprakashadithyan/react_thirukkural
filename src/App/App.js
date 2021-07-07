import './App.css';
import HomePage from '../Home'
import { React, Component } from 'react';
import Api from '../Api'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sections:[]
    }
  }

  componentDidMount(){
    Api.getSections(data => this.setState({sections:data}))
  }

  render() {
    return (
      <div className="App">
        <h1>திருக்குறள்</h1>
        <HomePage sections={this.state.sections} />
      </div>
    );
  }

}

export default App;
