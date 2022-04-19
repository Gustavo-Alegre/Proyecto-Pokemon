import React from 'react'
import PokemonsCard from './pokemonsCard' ;
import {ContPoke} from '../../styles/home'



export default function PokemonsCards({pokemon}) {

  return (
    <div> 
       <ContPoke >
        {pokemon.map((poke)=> 
            <PokemonsCard  
            key={poke.id}  
            img={poke.img}  
            id={poke.id}
            name={poke.name}
            type={poke.type}
           
            />
        )}
        </ContPoke>
    </div>
  )
}


