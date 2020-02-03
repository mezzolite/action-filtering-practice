import React, { Component } from 'react'
import ActionCard from './ActionCard'

class ActionContainer extends Component {
    
    state = {
        sorted: false
    }
    
    showActions = () => {
        if(this.props.actions && !this.state.sorted){
            return this.props.actions.map(action => {
                return <ActionCard action={action} key={action.id}/>
            }) 
        } else {
            const actions = this.sortByRating()
            return actions.map(action => {
                return <ActionCard action={action} key={action.id}/>
            }) 
        }
    }

    sortByRating = () => {
        const ratingComparison = (a, b) => {
          const ratingA = a.rating
          const ratingB = b.rating
    
          let comparison = 0;
          if (ratingA > ratingB) {
            comparison = -1;
          } else if (ratingA < ratingB) {
            comparison = 1;
          }
          return comparison;
        }
    
        return this.props.actions.sort(ratingComparison)
    }

    handleClick = () => {
        this.setState({sorted: true})
    }
    
    render(){

        return(
            <div className="action-container">
                <button onClick={this.handleClick}>Sort By Effectiveness</button>
                {this.showActions()}
            </div>
        )
    }
}
export default ActionContainer