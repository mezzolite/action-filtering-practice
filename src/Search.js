import React from 'react'

const Search = ({setSearchTerm}) => {

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return(
        <input type="text" placeholder="Search Here" onChange={handleChange}/>
    )
}
export default Search