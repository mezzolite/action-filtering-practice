import React, { Component } from 'react';
import './App.css';
import ActionContainer from './ActionContainer';
import Search from './Search';

class App extends Component {

  state = {
    actions: [],
    searchTerm: ''
  }

  componentDidMount(){

    fetch('https://efficacy-in-advocacy-quiz.herokuapp.com/advocacy_actions')
      .then(response => response.json())
      .then(actions => this.setState({actions}))
  }

  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
  }

  filterActions = () => {
    if(this.state.actions && this.state.searchTerm){
      return this.state.actions.filter(action => {
        return action.action_text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
    } else {
      return this.state.actions
    }
  }

  render(){

    return (
      <div className="App">
        <h1>Filtering Some Actions!</h1>
        <Search setSearchTerm={this.setSearchTerm}/>
        <ActionContainer actions={this.filterActions()} />
      </div>
    );
  }
}

export default App;
