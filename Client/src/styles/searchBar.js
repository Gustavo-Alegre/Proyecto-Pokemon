import styled from "styled-components";

export const Contenedor = styled.div`
  width: max-content;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color:none;
  padding: 2px;

  @media (max-width:750px) {
  
  /* position: absolute;
  top:50px;
  left: 300px; */
   /* display: none */
   flex-direction:column;
   width: 100%;
   justify-items: center;
   align-items: center;
 }
`;

export const ContTitulo = styled.div`
display: flex;
justify-content: center;
width:250px;
margin-right: 25px;

@media (max-width:750px) {
  
  /* position: absolute;
  top:50px;
  left: 300px; */
   /* display: none */
   background-color: none;
   width: 100%;
   margin-top: 15px;
   margin-right: 0px;
  
 }
`;

     


export const ContSearch = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid greenyellow;
  padding: 7px 20px;
  border-radius: 45px;
  margin-left:10px;
  background-color: transparent;
  width: max-content;
  height: 25px;

  @media (max-width:750px) {
  
 
   background-color: none;
   margin-top: 15px;
   margin-left:auto;
   margin-right:auto;

 
 }
`;

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  flex-grow: 1;
  margin-right: 2rem;

  @media (max-width:750px) {
  
 
    margin-right: 0rem;
    width: 100%;


}
`;

export const InputSearch = styled.input`
  background-color: transparent;
  color: white;
  font-family: "Popins";
  font-style: normal;
  font-size: 25px;
  padding: 0;
  width: 150px;
  
  border: none;
  outline: none;
`;

export const InputLupa = styled.input`
  height: 19px;

`;



export const Titulo = styled.h2 `
margin: auto 5px ;
font-size:35px;
color: rgb(255, 255, 255);
font-family: "popins";
color: greenyellow;

`