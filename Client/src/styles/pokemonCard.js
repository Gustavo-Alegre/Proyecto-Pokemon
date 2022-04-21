import styled from 'styled-components';


export const PokemonCard = styled.div`
  color: white;
  padding-top:  35px;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
   
  }

`;


export const PokemonImage = styled.img`

  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid rgb(255,255, 255);
  box-shadow: 0 10px 30px white; 
 
  /* transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
  } */
`;




export const Name = styled.h2`
   color: greenyellow;
   font-size:25px;
 

`;

export const NameType = styled.p`
   color: greenyellow;
   font-size:15px;
   margin: 1px 5px;
 

`;

export const DivType = styled.div`
  display: flex;
  flex-direction:column;
align-items:center;
  position: relative;
  top: -15px;
 
 

`;