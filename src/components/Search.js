import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCards } from './pokemonActions'
const Search = props => {
  const dispatch=useDispatch()
  const handleChange= e => {
    // e.preventDefault()
    
    searchCards(e.target.value, dispatch)
  }
  return (

    <div className="ui-search">
        <div className="input-icons">
            
            <input type="text" className="searchbox" onChange={handleChange} />
            <i className="fa fa-search icon" />
        </div> 
    </div>
  )
}

export default Search