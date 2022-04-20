import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const Contenedor = styled.div`
 background-color:transparent;
 display: flex;
 flex-wrap: wrap;
 width: 100%;

 justify-content:center;
 align-items: center;




`;


export const Grupo1 = styled.div`
 background-color:transparent;
 margin-top: 25px;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;



`;



export const PokemonCard = styled.div`
  width: 100%;

  color: white;
  padding-top:  35px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
 

`;


export const PokemonImage = styled.img`

  width: 450px;
  height:650px;
  object-fit: contain;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid rgb(255,255, 255);
  box-shadow: 0 10px 30px white; 
  margin-top: 25px;

  @media (max-width:375px) {
  
    width: 225px;
    height:325px;
 
}
  

  
`;

export const ContPoke = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  margin: 5px;
  padding:10px;

 
  border-radius: 25px;
  box-shadow: 0 10px 30px white; 

  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(20px);
  background-color: rgba(0,0,0,0.5) ;

  
`;


export const BotonGoToHome = styled.button`
height: 20px;
font-size: 10px;
background: red;

  

  border: none;
  padding: 4px 12px;
  border: 1.5px solid white;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  font-family: "Poppins";

  &:hover {
    background: white;
    color: black;
  }
`;


export const BotonDelete = styled.button`
height: 35px;
width: 75px;
font-size: 17px;
  background: none;
  margin: 1em;
  border: none;
  padding: 4px 12px;
  border: 1.5px solid white;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  font-family: "Poppins";

  &:hover {
    background: white;
    color: black;
  }
`;


export const StyledLink = styled(Link)`
   color:white;
   text-decoration: none;
   &:hover {
     background-color: white;
     color: black;
     
   }
`;


export const Name = styled.h2`
   color: white;
   font-size:25px;
 

`;

export const NameType = styled.p`
   color: greenyellow;
   font-size:17px;
   margin: 1px 5px;
 

`;

export const DivType = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  top: -30px;
 

`;

export const SubtitulosLi = styled.li`

 margin-top: 10px;
 color: white;
 text-decoration: none;

`;


export const NumeroPokemon = styled.h2`

 margin-top: 10px;
 margin-bottom: 45px;
 font-family: "Poppins";
 color: greenyellow;
 font-size: 21px;


`;

export const SubtitulosUlErrores = styled.ul`


  font-family: "Poppins";
  font-size: 18px;


`;


