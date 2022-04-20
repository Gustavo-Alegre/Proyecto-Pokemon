import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const Contenedor = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color: black;
  width: 100%;
  
  
  background-color: #350;
  border-radius: 25px;
  box-shadow: 0 10px 30px white; 

  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(20px);
  background-color: rgba(0,0,0,0.5) ;

`;



export const Grupo1 = styled.div`
margin-top: 25px;
display: flex;
flex-direction: row;
align-items: center;
   background-color: transparent;
   justify-content:center;
   width: 100%;
  

 

    
 
`;

export const Grupo2 = styled.div`

   display: flex;
   /* background-color: yellow; */
   justify-content: center;
   margin: 10px ;
   width:100%;
    
 
`;



export const Formulario = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background-color: gray; */
  flex-wrap: wrap;

 

`;


export const SubtitulosUlErrores = styled.ul`

  color: red;
  font-family: "Poppins";
  font-size: 20px;

  @media (max-width: 600px) {
    
    
    font-size: 10px;
 

  }

`;

export const SubtitulosLiErrores = styled.li`

 margin-top: 10px;
 color: red;

 @media (max-width: 600px) {
    
    
    font-size: 12px;
    font-family: "Poppins";
 

  }

`;


export const Subgrupo2A = styled.div`

  display: flex;
  flex-direction: row;
 
  justify-content: space-around;
  margin:10px;
  width:1500px;

  background-color: #350;
  border-radius: 75px;
  box-shadow: 0 10px 30px white; 

  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(20px);
  background-color: rgba(0,0,0,0.1) ;

  @media (max-width:600px) {
  
 
    border-radius: 20px;
    margin:5px;
    


}
  
`;

export const Subgrupo2B = styled.div`

  margin-top: 25px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  align-items: center;
  width: 100%;

`;




export const ContenedorTypes = styled.div`

   display: flex;
   flex-wrap: wrap;
   font-size: 12px;
   justify-content: center;
   padding: 20px;
   border-radius: 25px;
   /* background-color: aqua; */

   

   
   
`;


export const Boton = styled.button`

height: 35px;
font-size: 17px;
background: none;
margin-right: 45px;
  

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

  @media (max-width: 600px) {
    
    height: 25px;
    font-size: 10px;
    width: 125px;


  }
`;

export const BotonCreate = styled.button`

height: 35px;
width: 150px;
font-size: 17px;
  background: none;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 20px;
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

  @media (max-width: 600px) {
    
    height: 25px;
    font-size: 12px;
    width: 150px;

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

export const Titulo = styled.h2 `

font-size:35px;
color: rgb(255, 255, 255);
font-family: "popins";
color: greenyellow;
margin: 0 45px;

@media (max-width: 600px) {

  font-size:25px;
}



`;

export const InputForm = styled.input`
  width: 250px;
  background-color: transparent;
  color: #fff;
  font-size: 15px;
  font-family: "Poppins";
  /* font-style: normal;
  font-weight: 300; */
  border: none;
  outline: none;

  
  @media (max-width: 600px) {
    
    /* height: 25px; */
    font-size: 12px;
    width: 200px;
    background-color: none;
    height: 15px;
   

  }
`;


export const DivInputForm = styled.div`
  border: 1px solid #fff;
  padding: 13px 20px;
  border-radius: 45px;
  height:20px;
  

  
  @media (max-width: 600px) {
    
  border-radius: 40px;
  max-height:fit-content;
  background-color: none;
  padding: 0px 20px;
  line-height: 15px;

  


  }
 
`;


export const Ffform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
`;


export const LabelCheck = styled.label`

font-size: 1.5em;
color: white;
font-family: "Poppins";
margin-right: 15px;

@media (max-width: 600px) {
    
  font-size: 15px;
  background-color: none;
  width: 77px;
  margin-right: 10px;

  }






`;


export const InputCheck = styled.input `

cursor: pointer;
/* display: none; */

`;

export const Subtitulos = styled.label`

  color: white;
  font-family: "Poppins";
  font-size: 17px;

  @media (max-width: 600px) {
    
    font-size: 12px;


  }

`;

export const SubtitulosType = styled.label`

  color: white;
  font-family: "Poppins";
  font-size: 17px;

  @media (max-width: 600px) {
    
    font-size: 12px;


  }
`;