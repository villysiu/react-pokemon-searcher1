import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from './pokemonActions'
const PokemonForm =()=> {
   
    const nameRef=useRef();
    const hpRef=useRef();
    const frontUrlRef=useRef();
    const backUrlRef=useRef();

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
         e.preventDefault();

         addCard({ 
                name: nameRef.current.value, 
                hp: hpRef.current.value,
                sprites: {
                    front: frontUrlRef.current.value, 
                    back: backUrlRef.current.value 
                } 
            }, 
            dispatch )

        nameRef.current.value = '';
        hpRef.current.value='';
        frontUrlRef.current.value='';
        backUrlRef.current.value='';

   
    }
    return (
        <div id="addPokemon">
            <h3>Add a Pokemon!</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col25">
                        <b>Name</b>
                        <input type="text" className="inputbox" placeholder="Name" name="name" ref={nameRef} />
                    </div>
                    <div className="col25">
                        <b>hp</b>
                        <input type="text"  className="inputbox" placeholder="hp" name="hp" ref={hpRef}  />
                    </div>
                    <div className="col25">
                        <b>Front Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="frontUrl" ref={frontUrlRef}  />
                    </div>
                    <div className="col25">
                        <b>Back Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="backUrl" ref={backUrlRef} />
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