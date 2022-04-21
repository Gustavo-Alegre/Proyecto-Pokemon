import React from 'react'
import { Link } from 'react-router-dom'
import {PokemonImage,DivType,NameType,Name,PokemonCard} from '../../styles/pokemonCard'


export default function PokemonsCard(props) {
  const { img, name, type, id } = props
  return (



      <PokemonCard >
      <Link key={id} to={`/detail/${id}`}>
        
        { img ? <PokemonImage src={img} /> : <PokemonImage src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/12b0bc18665823.562cd46c220a8.png"} alt='cargando..'/>}
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