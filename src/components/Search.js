import React from 'react'
import { useDispatch } from 'react-redux'
import { searchCards } from './pokemonActions'
const Search = props => {
  const dispatch=useDispatch()
  
  return (
    <div className="ui-search">
        <div className="input-icons">
            
            <input type="text" className="searchbox" onChange={e=>searchCards(e.target.value, dispatch)} />
            <i className="fa fa-search icon" />
        </div> 
    </div>
  )
}

export default Search