import React from 'react'
import PokemonsCard from './pokemonsCard' ;
import {ContPoke} from '../../styles/home';
import  {  useSelector } from "react-redux";



export default function PokemonsCards({pokemon}) {

  let showMobileMenu = useSelector(state => state.showMobileMenu)

  return (
    <div> 
       <ContPoke open1={showMobileMenu}>
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


