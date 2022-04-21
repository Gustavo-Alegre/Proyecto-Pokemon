import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPokemons, orders, setLoading, filterType, getTypes, pokemonName, cambio } from "../../redux/actions/actions";
import PokemonsCards from '../pokemonsCards/pokemonsCards';
import SearchBar from '../searchBar/searchBar';
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";



import Spin from '../spin/spin'; 

import {
  NavBar,
  Boton,
  NavBarGrupo1,
  NavBarGrupo2,
  Select,
  SelectFiltros,
  FlechitaAbajo,
  NavBarGrupo3,
  StyledLink,
  Paginado,
  NavBarGrupo4,
  FlechaBotonPaginas,

  SunNavBar,
  MobileIcon,
  
} from '../../styles/home';
import flechabajo from "../../activos/chevron-down.svg";





  export const Inicio = () => {


  const dispatch = useDispatch()


  let state = useSelector(state => state.allPokemons);
  const type = useSelector(state => state.pokemonTypes)
  let loading = useSelector(state => state.loading)
  let showMobileMenu = useSelector(state => state.showMobileMenu)
  

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)
  const [alfa, setAlfa] = useState()
  const [name, setName] = React.useState('')

  


  useEffect(() => {
    dispatch(getTypes())
    setCurrentPage(1)
  }, [dispatch])



  const indexOfLastPage = currentPage * postsPerPage;          // 12
  const indexOfFirstPage = indexOfLastPage - postsPerPage;          //  0
  const filterPokemons = state.slice(indexOfFirstPage, indexOfLastPage)  //  0 , 12

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(state.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function handleOnChange(event) {
    dispatch(orders(event.target.value))
    setAlfa(event.target.value)
    setCurrentPage(1)
  }

  function handleOnfilter(event) {
    dispatch(filterType(event.target.value))
    setAlfa(event.target.value)
    setCurrentPage(1)
    console.log(alfa)
  }

 
  function handleSubmit(event) {
    event.preventDefault()
    setCurrentPage(1)
    if (name.length === 0) {
      return alert('No puedes buscar un pokemon si el input esta vacio')
    }

    if (!name.match(/^[a-z]+$/)) {
      setName('')
      return alert("solo se admiten nombres simples y en minúscula")
    }

    dispatch(pokemonName(name))
    setName('')
  }

  
  const handleInputChange = (event) => {
    setName(event.target.value)

  }

  function handlerLoading(){   
    dispatch(setLoading('loading'))
    dispatch(getAllPokemons()) 
    }

    function setMobileMenu(){   
      dispatch(cambio(!showMobileMenu))
      }
 
  
    

if (loading) {

return (

  <div>

    <NavBar>
    <SunNavBar>
      <NavBarGrupo1>

        <Boton id='refresh' onClick={handlerLoading}>Recargar</Boton>

        <MobileIcon onClick={() => setMobileMenu()}>
<FaBars />
</MobileIcon>

        <Boton><StyledLink to={`/create`}>Crear pokemon</StyledLink></Boton>

      </NavBarGrupo1>




      <NavBarGrupo2>
        <SearchBar
          search={handleSubmit}
          input={handleInputChange}
          name={name} />
      </NavBarGrupo2>


      <NavBarGrupo4>

        <FlechaBotonPaginas onClick={prevPage}>
      <FaArrowLeft/>
        </FlechaBotonPaginas>

        <Paginado>{state.length === 0 ? 0 : currentPage} de {state.length === 0 ? '0' : pageNumbers.length}</Paginado>

        <FlechaBotonPaginas onClick={nextPage}>
        <FaArrowRight/>
        </FlechaBotonPaginas>

      </NavBarGrupo4>


      <NavBarGrupo3 open={showMobileMenu}>
        <Select>

          <SelectFiltros  defaultValue='order' onChange={(e) => handleOnChange(e)}>
            <option disabled value='order'>Order</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
          </SelectFiltros>

          <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />

        </Select>

        <Select>
          <SelectFiltros defaultValue='Strong' onChange={(e) => handleOnChange(e)}>
            <option disabled value='Strong'>Strong</option>
            <option value='low'>Low-attack</option>
            <option value='hight'>Hight-attact</option>
          </SelectFiltros>
          <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
        </Select>

       

        <Select>
        <SelectFiltros defaultValue='order' onChange={(e) => handleOnChange(e)}> 
        <option disabled value='order'>API / DB</option>
        <option value='api'>Api</option> 
        <option value='db'>DB</option>  
        <option value='all'>All</option>
      </SelectFiltros> 
      <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
      </Select>



        <Select>
          <SelectFiltros defaultValue='Tipos' onChange={(e) => handleOnfilter(e)}>
            <option disabled value='Tipos'>Types</option>
            <option value='all'>All</option>

            {type.map(e => (
              <option key={e.id} value={e.name}>{e.name}</option>
            ))}
          </SelectFiltros>
          <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />

        </Select>
      </NavBarGrupo3>
      </SunNavBar>
    </NavBar>

    <div>
      <Spin />
    </div>

  </div>

)

}

else {

return (

  <div>

    <NavBar>
    <SunNavBar>
      <NavBarGrupo1>

        <Boton  onClick={ ()=> dispatch(getAllPokemons())}>Recargar</Boton>
        <MobileIcon onClick={() => setMobileMenu()}>
<FaBars />
</MobileIcon>
        <Boton><StyledLink to={`/create`}>Crear pokemon</StyledLink></Boton>

      </NavBarGrupo1>




      <NavBarGrupo2>
        <SearchBar
          search={handleSubmit}
          input={handleInputChange}
          name={name} />
      </NavBarGrupo2>

     

      <NavBarGrupo4>

        <FlechaBotonPaginas onClick={prevPage}>
        <FaArrowLeft/>
        </FlechaBotonPaginas>

        <Paginado>{state.length === 0 ? 0 : currentPage} de {state.length === 0 ? '0' : pageNumbers.length}</Paginado>

        <FlechaBotonPaginas onClick={nextPage}>
        <FaArrowRight/>
        </FlechaBotonPaginas>

      </NavBarGrupo4>

 

      <NavBarGrupo3 open={showMobileMenu}>
        
        <Select>
          <SelectFiltros id='order' defaultValue='order' onChange={(e) => handleOnChange(e)}>
            <option disabled value='order'>Order</option>
            <option value='az'>A-Z</option>
            <option value='za'>Z-A</option>
          </SelectFiltros>

          <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />

        </Select>


     


        <Select>
          <SelectFiltros defaultValue='Strong' onChange={(e) => handleOnChange(e)}>
            <option disabled value='Strong'>Strong</option>
            <option value='low'>Low-attack</option>
            <option value='hight'>Hight-attact</option>
          </SelectFiltros>
          <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
        </Select>

        <Select>
        <SelectFiltros id='apidb' defaultValue='order' onChange={(e) => handleOnChange(e)}> 
        <option disabled value='order'>API / DB</option>
        <option value='api'>Api</option> 
        <option value='db'>DB</option>  
        <option value='all'>All</option>
      </SelectFiltros> 
      <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />
      </Select>


        <Select>
          <SelectFiltros id='types' defaultValue='Tipos' onChange={(e) => handleOnfilter(e)}>
            <option disabled value='Tipos'>Types</option>
            <option value='all'>All</option>

            {type.map(e => (
              <option key={e.id} value={e.name}>{e.name}</option>
            ))}
          </SelectFiltros>
          <FlechitaAbajo src={flechabajo} alt="flecha-abajo" />

        </Select>
      </NavBarGrupo3>
     
      </SunNavBar>
    </NavBar>


    <div>
      {state.length === 0 ? <Spin /> : <PokemonsCards pokemon={filterPokemons} />}
    </div>

  </div>

)



}


};

export default Inicio