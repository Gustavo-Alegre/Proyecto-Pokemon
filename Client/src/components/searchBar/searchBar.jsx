import React from 'react'

import Search from "../../activos/Search.svg";

import {
    ContSearch,
    FormSearch,
    InputLupa,
    InputSearch,
    Contenedor,
    Titulo,
    ContTitulo
   

  } from "../../styles/searchBar";

const SearchBar = ({search , input , name}) => { 
  return (
        <Contenedor >
     
             <ContTitulo>
                    <Titulo>Buscar</Titulo>
                    <Titulo>Pokemon</Titulo>

                    </ContTitulo>
          
                <FormSearch onSubmit={(e) => search(e)}>
                <ContSearch>
                    <InputSearch
                        type='text'
                        autoComplete='off'
                        value={name}
                        onChange={(e) => input(e)}
                        
                    />
                  <InputLupa src={Search} type="image" alt="lupa" />
                    </ContSearch>
                    
                   
                </FormSearch>
                
            </Contenedor>
            
    )
}

export default SearchBar