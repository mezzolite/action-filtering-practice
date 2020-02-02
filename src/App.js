import React, { Component } from 'react';
import './App.css';
import ActionContainer from './ActionContainer';
import Search from './Search';
import RatingFilter from './RatingFilter';

class App extends Component {

  state = {
    actions: [],
    searchTerm: '',
    ratingSelection: null
  }

  componentDidMount(){

    fetch('https://efficacy-in-advocacy-quiz.herokuapp.com/advocacy_actions')
      .then(response => response.json())
      .then(actions => this.setState({actions}))
  }

  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm})
  }

  setRatingSelection = (ratingSelection) => {
    this.setState({ratingSelection})
  }

  filterActions = () => {
    if(this.state.searchTerm || this.state.ratingSelection){
      return this.state.actions.filter(action => {
        return action.rating === this.state.ratingSelection 
          || action.action_text.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
          
      })
    } else {
      return this.state.actions
    }
  }

  sortByRating = () => {
    const ratingComparison = (a, b) => {
      const ratingA = a.rating
      const ratingB = b.rating

      let comparison = 0;
      if (ratingA > ratingB) {
        comparison = 1;
      } else if (ratingA < ratingB) {
        comparison = -1;
      }
      return comparison;
    }

    return this.state.actions.sort(ratingComparison)
  }

  

  render(){

    return (
      <div className="App">
        <h1>Filtering Some Actions!</h1>
        <Search setSearchTerm={this.setSearchTerm}/>
        <RatingFilter setRatingSelection={this.setRatingSelection}/>
        <ActionContainer actions={this.sortByRating()} />
      </div>
    );
  }
}

export default App;
