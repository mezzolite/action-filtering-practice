import React, { Component } from 'react';
import './App.css';
import ActionContainer from './ActionContainer';

class App extends Component {

  state = {
    actions: []
  }

  componentDidMount(){

    fetch('https://efficacy-in-advocacy-quiz.herokuapp.com/advocacy_actions')
      .then(response => response.json())
      .then(actions => this.setState({actions}))
  }

  render(){

    return (
      <div className="App">
        <h1>Filtering Some Actions!</h1>
        <ActionContainer actions={this.state.actions} />
      </div>
    );
  }
}

export default App;
