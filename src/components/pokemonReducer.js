const initialState={
    pokemons: []
}
const pokemonReducer=(state=initialState, action)=>{
    console.log(action)

    switch (action.type) {
        case "addCards":
            return {
                ...state,
                pokemons: action.payload
            }
        case "addCard":
            return {
                ...state,
                pokemons: [...state.pokemons, 
                    action.payload
                ]
                
            }
            // case "searchCards":
            //     return {
            //         ...state,
            //         pokemons: action.payload
            //     }
        default:
            return state
    }

}
export default pokemonReducer