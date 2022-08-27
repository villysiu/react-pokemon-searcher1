import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from './pokemonActions'
const PokemonForm =()=> {
   
    // const nameRef=useRef();
    // const hpRef=useRef();
    // const frontUrlRef=useRef();
    // const backUrlRef=useRef();
    const formRef=useRef()
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
         e.preventDefault();
         const formData = new FormData(formRef.current);
         const data = Object.fromEntries(formData);
        //  console.log(data);
         addCard({ 
                name: data.name, 
                hp: data.hp,
                sprites: {
                    front: data.frontUrl, 
                    back: data.backUrlm 
                } 
                
            }, 
            dispatch )
            e.target.reset()
   
    }
    return (
        <div id="addPokemon">
            <h3>Add a Pokemon!</h3>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="row">
                    <div className="col25">
                        <b>Name</b>
                        <input type="text" className="inputbox" placeholder="Name" name="name" defaultValue="" />
                    </div>
                    <div className="col25">
                        <b>hp</b>
                        <input type="text"  className="inputbox" placeholder="hp" name="hp"   />
                    </div>
                    <div className="col25">
                        <b>Front Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="frontUrl"  />
                    </div>
                    <div className="col25">
                        <b>Back Image URL</b>
                        <input type="text"  className="inputbox" placeholder="url" name="backUrl" />
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