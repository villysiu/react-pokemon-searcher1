import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from './pokemonActions'
const PokemonForm =()=> {
    // const [name, setName] = useState("")
    // const [hp, setHp] = useState("")
    // const [frontUrl, setFrontUrl] = useState("")
    // const [backUrl, setBackUrl] = useState("")
    const [pokemon, setPokemon]=useState({
            name: '',
            hp: '',
            frontUrl: '',
            backUrl: ''
        }
    )
    const handleChange=e=>{
        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value
        })
    }
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
         e.preventDefault()
         addCard({ 
                name: pokemon.name, 
                hp: pokemon.hp, 
                sprites: {
                    front: pokemon.frontUrl, 
                    back: pokemon.backUrl
                } 
            }, 
            dispatch )
        setPokemon({
            name: "",
            hp: "",
            frontUrl: "",
            backUrl: "",
        }
        )
        // setName("")
        // setHp("")
        // setFrontUrl("")
        // setBackUrl("")
    }
    return (
        <div id="addPokemon">
            <h3>Add a Pokemon!</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col25">
                        <b>Name</b>
                        <input type="text" className="inputbox" placeholder="Name" name="name" value={pokemon.name} onChange={handleChange} />
                    </div>
                    <div className="col25">
                        <b>hp</b>
                        <input type="text"  className="inputbox" placeholder="hp" name="hp" value={pokemon.hp} onChange={handleChange} />
                    </div>
                    <div className="col25">
                        <b>Front Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="frontUrl" value={pokemon.frontUrl} onChange={handleChange} />
                    </div>
                    <div className="col25">
                        <b>Back Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="backUrl" value={pokemon.backUrl} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )

}

export default PokemonForm