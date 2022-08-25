import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard } from './pokemonActions'

const PokemonCard =(props) => {
  const {name, hp, sprites }=useSelector(state=>state.pokemons.find(p=>p.id===props.id))
  const {front, back}=sprites


  const [image, setImage] = useState(front)
  const dispatch = useDispatch()
  const handleClick=e=>{
    e.preventDefault()
    deleteCard(props.id, dispatch)
  }
  
    return (
      
      <div className="col16">
        <div className='card' >
          <div className="row">
          <div className="col80">
            <div className="image">
              <img src={image} alt={name}   onMouseOver={()=>setImage(back)} onMouseOut={()=>setImage(front)} />
            </div>
          </div>
          <div className="col20">
            
            <i className="fa fa-close close-icon" onClick={handleClick} />
          </div>
          </div>

          <div className="content">
            <div className="header">{name}</div>
          </div>

          <div className="extra content">
            <span>
              <i className="fa fa-heartbeat red-heart-icon" />
              {hp} hp
            </span>
          </div>
        </div>
      </div>
      
    )
  
}

export default PokemonCard