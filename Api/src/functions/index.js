const { Pokemon, Type } = require('../db');

const axios = require('axios').default; 


async function pokemonDb(){ 
    try{ 
       const data = await pokemonsApi()

       const PokemonDb = await Pokemon.findAll({ 
           include:{ 
               model: Type,  
               attributes: ["name"] ,  
               through: {  
                   attributes: [], 
                } 
            } 
        })  

        
        
   
       let jss = PokemonDb.map(e => e.toJSON()) 
       
       jss = jss.map(e=> {  
            return { 
                id: e.id, 
                name: (e.name[0].toUpperCase() + e.name.slice(1)), 
                hp: e.hp, 
                attack: e.attack, 
                defense: e.defense, 
                speed: e.speed, 
                height: e.height, 
                weight: e.weight, 
                img: e.img, 
                type: e.types.map(e=> e.name),
              
               
              
        }
    }) 
    jss.forEach(e=> data.push(e))
    return data  
    }catch(err){ 
        console.log(err)
    }

}

async function pokemonsApi(){  

        const pokemons20 = await axios.get('https://pokeapi.co/api/v2/pokemon') 
        const pokemonsOtros20 = await axios.get(pokemons20.data.next) 
        const pokemonsTodos = pokemons20.data.results.concat(pokemonsOtros20.data.results)

        let result = pokemonsTodos.map(async(e) => { 
            return await axios.get(e.url) 
        })  
        
        let promesaConcluida = (await Promise.all(result))

        let pokemon = promesaConcluida.map(e => e.data)
    
        const todoPokemons = pokemon.map(e => { 
            return { 
            name: (e.name[0].toUpperCase() + e.name.slice(1)), 
            id: e.id, 
            weight: e.weight,  
            height: e.height, 
            hp: e.stats[0].base_stat, 
            attack: e.stats[1].base_stat, 
            defense: e.stats[2].base_stat, 
            speed: e.stats[5].base_stat, 
            type: e.types.map(e=> e.type.name),  
            img: e.sprites.other.home.front_shiny,
            
            
            
          
            }   
          }) 
          
        return todoPokemons 
    } 

async function types(){ 
        const tipos = await axios.get('https://pokeapi.co/api/v2/type') 
       
        const tipo =  await tipos.data.results.map(e => e) 
    
        let result = tipo.map(async(e) => { 
            return await axios.get(e.url)
        })  

        let promesaConcluida = (await Promise.all(result)) 
       
        let typoDato = promesaConcluida.map(e => e.data) 
        const allTypes = typoDato.map(e => { 
        return { 
        id: e.id, 
        name: e.name, 
        }   
      })    
        return allTypes
    }

   

module.exports = { pokemonsApi , types , pokemonDb }