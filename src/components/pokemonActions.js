export const  getCards= async (dispatch) => {
    const url="http://localhost:3000/pokemon"
    
    try{
        const response=await fetch(url)
        const data=await response.json()
        dispatch({type: 'addCards', payload: data})
    } catch (error) {
        console.log("error", error);
    }
    
}

export const addCard=async (card, dispatch)=>{
    const url="http://localhost:3000/pokemon"
    
    try{
        const response=await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(card)

        })
        const data=await response.json()
        dispatch({type: 'addCard', payload: data})
    } catch(error){
        console.log("error", error);
    }
}