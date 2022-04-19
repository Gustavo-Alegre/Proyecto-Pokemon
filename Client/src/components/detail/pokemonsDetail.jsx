import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailPokemons,deletePokemon,getAllPokemons,orders } from "../../redux/actions/actions";
import { SubtitulosLi,
  NumeroPokemon,
  SubtitulosUlErrores,
   ContPoke,
   BotonGoToHome,
   NameType,
    StyledLink,
    DivType,
    PokemonCard,
    PokemonImage,
    Grupo1,
    Contenedor,
    BotonDelete,
    Name } from '../../styles/pokemonDetail';
    
import { useParams,useHistory } from 'react-router-dom';
import Spin from '../spin/spin2';
import { FaTrash } from 'react-icons/fa'

export const PokemonsDetail = () => {


  let { id } = useParams()
  const dispatch = useDispatch();
  const history = useHistory()
  const state = useSelector(state => state.pokemonDetail)



  useEffect(() => {
    dispatch(getDetailPokemons(id))
    return function borrarDetalle() {
  
      dispatch(orders('vaciar'))
    }
  }, [id, dispatch])



  const deletePk = (id) => {
    dispatch(deletePokemon(id))
    dispatch(getAllPokemons())
    alert('se elimino tu pokemon')
    setTimeout(() => {
      history.push('/home')
    }, 1500);
  }



  return (

   

    <div> 
        {Object.keys(state).length === 0 ? <Spin/> :  
        
        <div>

         
         

         <Contenedor>
         <ContPoke  key={id}>  
         <Grupo1 > 
           <BotonGoToHome ><StyledLink to={`/home`}>Go to home</StyledLink></BotonGoToHome> 
           {typeof state.id === 'string' && <BotonDelete onClick={()=> deletePk(id)} id='delete'><FaTrash/></BotonDelete>}  
         </Grupo1> 
             <div> 
               <PokemonImage src={state.img} alt='cargando..' id='pokeimg' />  
             </div>
           <PokemonCard >  
             <Name>{ state.name}</Name>  
             <NumeroPokemon>Numero de pokemon: {state.id}</NumeroPokemon>
             <br />
             <DivType> 
             {state.type && state.type.map(e => ( 
               <NameType key={e}>{e}</NameType>
             ))}
             </DivType>
             <SubtitulosUlErrores > 
               <SubtitulosLi>hp:{state.hp}</SubtitulosLi>
               <SubtitulosLi>Attack: {state.attack}</SubtitulosLi>
               <SubtitulosLi>Defense: {state.defense}</SubtitulosLi>
               <SubtitulosLi>Speed: {state.speed}</SubtitulosLi>
             </SubtitulosUlErrores> 
 
             <SubtitulosUlErrores > 
               <SubtitulosLi>height:{state.height} </SubtitulosLi>
               <SubtitulosLi>weight:{state.weight}</SubtitulosLi>      
             </SubtitulosUlErrores>  
           </PokemonCard>  
         </ContPoke> 
         </Contenedor>          
      </div>
        }
     </div>

         )
}


        export default PokemonsDetail