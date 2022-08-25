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
export const searchCards = async (searchterm, dispatch) =>{
    const url="http://localhost:3000/pokemon"
    const len=searchterm.length
    try {
        const response=await fetch(url)
        const data=await response.json()
        
        dispatch({type: "addCards", payload: data.filter(p=>p.name.slice(0,len)===searchterm)})
    } catch(error){
        console.log("error", error);
    
    }
}
export const deleteCard = async (id, dispatch)=>{
    const url=`http://localhost:3000/pokemon/${id}`
    try {
        const response=await fetch(url, { method: "DELETE"  })
        await response.json()

        dispatch({type: "deleteCard", payload: id})

    } catch(err) {
        console.log("error", err)
    }
}