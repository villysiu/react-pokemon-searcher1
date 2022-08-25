import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const PokemonCard =(props) => {
  const {name, hp, sprites }=useSelector(state=>state.pokemons.find(p=>p.id===props.id))
  const {front, back}=sprites


  const [image, setImage] = useState(front)
  
    return (
      
      <div className="cardCol">
        <div className='card' >
          <div className="image" onMouseOver={()=>setImage(back)} onMouseOut={()=>setImage(front)}>
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="fa fa-heart red-heart" />
              {hp} hp
            </span>
          </div>
        </div>
      </div>
      
    )
  
}

export default PokemonCard