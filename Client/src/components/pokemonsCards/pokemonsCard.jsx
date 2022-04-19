import React from 'react'
import { Link } from 'react-router-dom'
import {PokemonImage,DivType,NameType,Name,PokemonCard} from '../../styles/pokemonCard'


export default function PokemonsCard(props) {
  const { img, name, type, id } = props
  return (



      <PokemonCard >
      <Link key={id} to={`/detail/${id}`}>
        <PokemonImage src={img} alt='cargando..' />
        </Link>
        <Name>{name}</Name>
        <DivType>
          {type && type.map(e => (
            <NameType key={e}>{e}</NameType>
          ))}
        </DivType>
      </PokemonCard>
  


  )
}