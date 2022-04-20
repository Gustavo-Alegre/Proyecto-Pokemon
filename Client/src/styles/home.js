
import { Link } from "react-router-dom";
import styled from "styled-components";


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

  width: 250px;
  height: 400px;
  object-fit: contain;
  border-radius: 20px 20px 20px 20px;
  border: 1px solid rgb(255,255, 255);
  box-shadow: 0 10px 30px white; 
 
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
`;

export const ContPoke = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;
  column-gap: 40px;
  row-gap: 30px;
  padding: 0 35px;;
  
  background-color: #350;
  border-radius: 75px;
  box-shadow: 0 10px 30px white; 

  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(20px);
  background-color: rgba(0,0,0,0.5) ;

  @media (max-width:600px) {
  
  /* position: absolute;
  top:50px;
  left: 300px; */
   /* display: none */
   margin-top: 450px;
   border-radius: 35px;
   
 }
`;





export const NavBar = styled.div`

  position: fixed;
  max-width: fit-content;
  background-color: black;
  top: 0;
  left: 0;
   box-shadow: 0 10px 30px #000; 
   height: 70px;

   @media (max-width:600px) {
  
  position: relative;
  margin-top: 10px;
  flex-direction:column;
  height: 225px;
  justify-content: center;
  max-width:none;
 


}

  
`;

export const SunNavBar = styled.div`

   max-width: 1850px;
   height: 70px;
   margin:0 auto;
   display: flex;
   justify-content: space-between;
   background-color: none;
   top: 0;
  left: 0;

  @media (max-width:600px) {
  

   margin-top: 10px;
   flex-direction:column;
   height: 300px;
   justify-content: flex-start;
   width: 100%;
   background-color: none;

 }
  
  
`;

export const NavBarGrupo1 = styled.div`
   
 
 display: flex;
 flex-direction: row;
 justify-content:space-around;
 align-items: center;
 width: 400x;
 box-sizing: content-box;

 
 @media (max-width:600px) {
  

 
  width: 100%;
  background-color: none;

}

`;

export const NavBarGrupo2 = styled.div`
display: flex;
 position: relative;
 background-color: none;
 width: 900px;
 padding-left: auto;
 padding-right: auto;

 align-items: center;

 @media (max-width:600px) {
  

 
  width: 100%;
  background-color: none;

}
 
`;

export const NavBarGrupo3 = styled.div`

  display: flex;
 flex-direction: row;
 justify-content:space-around;
 align-items: center;
 width: 900px;
 box-sizing: content-box;

 @media (max-width:600px) {
  
  flex-direction: column;
  
  background-color: none;
  position: relative;
  left: 0;
  top: -5px;
  width: 100%;
  align-items: center;
  

 }


 
`;


export const NavBarGrupo4 = styled.div`

     display:flex;
     flex-direction: row;
     box-sizing: content-box;
     justify-content: center;
     align-items: center;
    background-color: none;
    box-sizing: content-box;
    width: max-content;
    margin-left:20px;

     @media (max-width:600px) {
     
      margin-left:auto;
      margin-right:auto;
 } 
 

`;

export const FlechaBotonPaginas = styled.button`
height: 15px;
width:50px;
font-size: 20px;
  background: none;
  margin: 10px;
  border: none;
  display: flex;
  align-items: center;



  border: 1.5px solid white;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  font-family: "Poppins";


`;

export const FlechitaPaginas = styled.div`

height:10px;
width: 20px;
color: white;
margin: auto auto;
display: flex;
align-items: center;

`;


export const Paginado = styled.span`
 
  color: white;
  font-size: 13px;
  align-items: center;
  width: max-content;
`;


export const Boton = styled.button`
height: 25px;
width: 125px;
font-size: 13px;
  background: none;
  margin: 8px;
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


export const Select = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 45px;
  flex-grow: 1;
  margin-right: 15px;
  margin-left: 2rem;

  height: 15px;
  width: 70px;

  @media (max-width:600px) {
  
  margin-top: 60px;
  width: 70px;
 }
`;

export const SelectFiltros = styled.select`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 13px;
  font-family: "Poppins";
  font-weight: 40px;
  flex-grow: 1;
`;

export const FlechitaAbajo = styled.img`
  height: 15px;
`;


export const StyledLink = styled(Link)`
   color:white;
   text-decoration: none;
   &:hover {
     background-color: white;
     color: black;
     
   }
`;


// export const InputMenu= styled.input`
//  display: inline-block;
//   position:fixed;
//   left: calc(100% / 2);
//   top: 230px;
//   height: 25px;
//   cursor: pointer;
//   display: none;
   
  

//   @media (max-width:600px) {
 
//   display: block;
  
  
//   }

// `;




