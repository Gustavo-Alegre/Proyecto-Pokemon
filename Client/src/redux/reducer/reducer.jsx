


const initialState = {
  allPokemons: [],
  pokemonDetail: {},
  pokemonTypes: [],
  auxPokemons: [],
  loading: false,
  


}

export function reducer(state = initialState, actions) {

  switch (actions.type) {

    

    case "GET_POKEMONS": {
      return {
        ...state,
        allPokemons: actions.payload,
        auxPokemons: actions.payload
      }
    }

   

    case "ORDER_PK": {

      if (actions.payload === 'all') {
        return { ...state, allPokemons: state.auxPokemons, loading: false }
      }

      if (actions.payload === 'az') {
        const az = state.auxPokemons.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0
        })
        return { ...state, allPokemons: az, loading: false }
      }
      if (actions.payload === 'za') {
        const za = state.auxPokemons.sort((a, b) => {
          if (a.name < b.name) {
            return 1
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0
        })
        return { ...state, allPokemons: za, loading: false }
      }

      if (actions.payload === 'low') {
        const low = state.auxPokemons.sort((a, b) => {
          if (a.attack > b.attack) {
            return 1
          }
          if (a.attack < b.attack) {
            return -1;
          }
          return 0
        })
        return { ...state, allPokemons: low, loading: false }
      }
      if (actions.payload === 'hight') {
        const hight = state.auxPokemons.sort((a, b) => {
          if (a.attack < b.attack) {
            return 1
          }
          if (a.attack > b.attack) {
            return -1;
          }
          return 0
        })
        return { ...state, allPokemons: hight, loading: false }
      }
      if(actions.payload === 'api'){ 
        let arr = [] 
        state.auxPokemons.map((e)=> { 
            if(typeof e.id === 'number'){ 
               arr.push(e)
            } 
            return e 
        }) 
        return {...state , allPokemons: arr , loading:false}
      }
      if(actions.payload === 'db'){ 
        let arr2 = [] 
        state.auxPokemons.map(e=> { 
            if(typeof e.id === 'string'){ 
              arr2.push(e)
          } 
          return e
        })
        
        return {...state , allPokemons: arr2 }
      } 
      if(actions.payload === 'vaciar'){ 
          state.pokemonDetail = {} 
          return {...state }
      }
      break;        
    } 


    case "FILTER_TYPE": {
      if (actions.payload) {
        if (actions.payload === 'all') {
          return { ...state, allPokemons: state.auxPokemons, loading: false }
        }
        let arr = []
        state.auxPokemons.map((e) => {
          if (e.type[0] === actions.payload || e.type[1] === actions.payload) {
            arr.push(e)
          }
        })
        return { ...state, allPokemons: arr, loading: false }
      }
      break;
    }

    case "GET_TYPES": {
      return { ...state, pokemonTypes: actions.payload }
    }

    case "GET_DETAIL":  { 
      return { ...state, pokemonDetail: actions.payload }
  } 


  case "POKE_NAME": {  
    console.log(actions.payload[0].name) 
    if(actions.payload[0]){  
        let arr = []
        state.auxPokemons.map((e)=> {  
            if(e.name.toLowerCase() === actions.payload[0].name || e.name === actions.payload[0].name){ 
               return arr.push(e)
            } 
            return e
        }) 
        return { ...state , allPokemons: arr , loading: false}
    }else if(actions.payload[0] === null){ 
        return  { ...state , allPokemons: state.auxPokemons , loading: false}
    }
    break;
}

case "DELETE_POKEMON": {
  return { ...state ,  allPokemons: state.allPokemons.filter(e=> e.id === actions.payload)}
}  


case "LOADING": { 
  return { ...state , loading: true}
} 

case "LOADING_FALSE": {
  if (actions.payload === 'loading') {
    return { ...state, loading: false }
  }
  break
}

case "POST_POKEMON ": { 
  return { ...state }
} 
  

  default: return state;


}
}

