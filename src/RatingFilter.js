import React from 'react'

const RatingFilter = ({setRatingSelection}) => {

    const handleSelect = (event) =>{
        setRatingSelection(Number(event.target.value))
    }

    return(
        <div className="rating-filter">
            <h2>Select Action Rating</h2>
            <select onChange={handleSelect} className="rating-dropdown">
              <option value="1">1</option>  
              <option value="2">2</option>  
              <option value="3">3</option>  
              <option value="4">4</option>  
              <option value="5">5</option>  
            </select>
        </div>
    )
}
export default RatingFilter