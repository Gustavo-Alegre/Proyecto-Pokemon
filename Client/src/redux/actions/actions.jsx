import axios from 'axios';


// export const getAllPokemons = () => {

//     return (dispatch) => {

//         fetch(`/pokemons`)
//         .then((res) => res.json())
//         .then((json) => {
//             dispatch({ type: "GET_POKEMONS", payload:json });
//         });
    
// }
// };


export function cambio(payload){ 
    return { type: "RESPONSIVE" , payload}
}



export function getAllPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`/pokemons`) 
        const payload = await response.data
        dispatch({type: "GET_POKEMONS" , payload })
    }
}


export function getDetailPokemons(id) {
    return async function (dispatch) {
        const response = await axios.get(`/pokemons/${id}`)
        const payload = await response.data
        dispatch({ type: "GET_DETAIL", payload })
    }
};

export function orders(payload) {
    console.log(payload)
    return { type: "ORDER_PK", payload }
}

export function filterType(payload) {
    return { type: "FILTER_TYPE", payload }

}


// export function getTypes() {
//     return (dispatch) =>
//     {
//          fetch(`/types`)
//          .then((res) =>  res.json())
//          .then((json) => {
//             dispatch({ type: "GET_TYPES", payload: json });
//         });
        
//     }
// }


export function getTypes(){ 
    return async function(dispatch){ 
        const response = await axios.get(`/types`) 
        const payload = await response.data
        dispatch({type: "GET_TYPES" , payload})
    }
} 




export function setLoading(payload){ 
    return { type: "LOADING_FALSE" , payload}
}

export function pokemonName(name){ 
   
    return async function(dispatch) { 
        try{ 
            dispatch({type: "LOADING"}) 
            let arr = [] 
            const response = await axios.get(`/pokemons?name=${name}`) 
            const payload = await response.data  
            arr.push(payload)
            console.log(arr)
            dispatch({type: "POKE_NAME" , payload: arr})            
        }catch{  
           alert('El nombre no es válido');
         
        }  
      
    }
}

export function postPokemon(pokemon){ 
    return async function(dispatch){ 
        await axios.post(`/pokemons` , pokemon) 
        dispatch({type: "POST_POKEMON "})
    }
} 

export function deletePokemon(id){  
    return async function(dispatch){ 
        await axios.post(`/pokemons/delete`, {id: id}) 
        dispatch({type: "DELETE_POKEMON ", payload: id })
    }
} 




