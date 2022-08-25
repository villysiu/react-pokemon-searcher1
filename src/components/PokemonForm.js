import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from './pokemonActions'
const PokemonForm =()=> {
    const [name, setName] = useState("")
    const [hp, setHp] = useState("")
    const [frontUrl, setFrontUrl] = useState("")
    const [backUrl, setBackUrl] = useState("")
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
         addCard({ name:name, hp:hp, sprites: {front:frontUrl, back:backUrl} }, dispatch)
        setName("")
        setHp("")
        setFrontUrl("")
        setBackUrl("")
    }
    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="column">
                        <b>Name</b>
                        <input type="text" className="inputbox" placeholder="Name" name="name" value={name} onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className="column">
                        <b>hp</b>
                        <input type="text"  className="inputbox" placeholder="hp" name="hp" value={hp} onChange={e=>setHp(e.target.value)}/>
                    </div>
                    <div className="column">
                        <b>Front Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="frontUrl" value={frontUrl} onChange={e=>setFrontUrl(e.target.value)} />
                    </div>
                    <div className="column">
                        <b>Back Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="backUrl" value={backUrl} onChange={e=>setBackUrl(e.target.value)} />
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