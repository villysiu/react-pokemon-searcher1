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
            case "deleteCard":
                return {
                    ...state,
                    pokemons: state.pokemons.filter(p=> p.id!==action.payload)
                }
        default:
            return state
    }

}
export default pokemonReducer