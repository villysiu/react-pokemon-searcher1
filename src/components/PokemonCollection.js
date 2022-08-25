import React, {  useEffect  } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getCards } from './pokemonActions'
import PokemonCard from './PokemonCard'

const PokemonCollection =()=> {
  const dispatch=useDispatch()
    useEffect(()=>{
      getCards(dispatch)
    }, [dispatch])
   
    const pokemonIds= useSelector(state=>state.pokemons.map(pokemon=> pokemon.id))
  // console.log(pokemonIds)
  
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <div className="row">
          { pokemonIds.map(pokemon_id=> <PokemonCard key={pokemon_id} id={pokemon_id} />) }
        
        </div>
      </div>
    )
}

export default PokemonCollection