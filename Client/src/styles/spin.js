
import styled, {keyframes} from "styled-components";


export const NameType = styled.p`
   color: greenyellow;
   font-size:30px;
   margin: 15px 5px;
 
   @media (max-width:750px) {
  
    font-size:15px;
   
  }

`;




export const ContLoading = styled.div`
 min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(20px);
  background-color: rgba(0,0,0,0.5) ;

  @media (max-width:750px) {
  
  /* z-index:0 ; */
  margin-top: 0px;
  position: absolute;
width: 100%;
top:0px;
height: 100%;



  
   
  }
`;

const spin = keyframes`
to {
  transform: rotate(360deg);
}


`;

export const Loading = styled.div`
  width: 10rem;
  height: 10rem;
  border: 3px solid #333;
  border-radius: 50%;
  border-top-color: #fff;
  animation: 1s ${spin} infinite ease-in-out;

  @media (max-width:750px) {
  
    width: 5rem;
  height: 5rem;
   
  }
`;

