import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTypes, postPokemon } from '../../redux/actions/actions'
import { Link, useHistory } from 'react-router-dom'
import { ContenedorTypes, } from '../../styles/newPokemon'

import {
  Grupo1,
  Grupo2,
  Boton,
  StyledLink,
  Titulo,
  Contenedor,
  InputForm,
  DivInputForm,
  Ffform,
  Subgrupo2A,
  BotonCreate,
  LabelCheck,
  InputCheck,
  Formulario,
  Errores,
  Subgrupo2B,
  Subtitulos,
  SubtitulosType,
  SubtitulosUlErrores,
  SubtitulosLiErrores
} from '../../styles/newPokemon'


export function validate(pokemon) {
  let errors = {}
  console.log(errors)


  // NOMBRE

  
  if (!pokemon.name) {
    errors.name = 'se requiere nombre'
  } else if (!pokemon.name.match(/^[a-zA-Z]+$/)) {
    errors.name = "solo se admiten nombres simples"
  }



  //VIDA
  if (!pokemon.hp) {
    errors.hp = 'Se requiere vida'
  }
  else if (!Number(pokemon.hp)) {
    errors.hp = 'El valor del la vida debe ser un numero'
    console.log(Number.isInteger(pokemon.hp))
  }

  else if (pokemon.hp < 10) {
    errors.hp = 'La vida tiene que ser como minimo 10'
  }


  //ATAQUE
  if (!pokemon.attack) {
    errors.attack = 'Se requiere fuerza '
  } else if (!Number(pokemon.attack)) {
    errors.attack = 'El valor del ataque debe ser un numero'
  } else if (pokemon.attack < 10) {
    errors.attack = 'El ataque tiene que ser como minimo 10'
  }

  //DEFENSA
  if (!pokemon.defense) {
    errors.defense = 'Se requiere defensa'
  } else if (!Number(pokemon.defense)) {
    errors.defense = 'El valor de la defensa debe ser un numero'
  } else if (pokemon.defense < 10) {
    errors.defense = 'La defensa tiene que ser como minimo 10'
  }

  //VELOCIDAD
  if (!pokemon.speed) {
    errors.speed = 'Se requiere velocidad'
  } else if (!Number(pokemon.speed)) {
    errors.speed = 'El valor de la velocidad debe ser un numero'
  } else if (pokemon.speed < 10) {
    errors.speed = 'La velocidad tiene que ser como minimo 10'
  }

  //ALTURA
  if (!pokemon.height) {
    errors.height = 'Se requiere altura'
  } else if (!Number(pokemon.height)) {
    errors.height = 'El valor de la altura debe ser un numero'
  } else if (pokemon.height < 35) {
    errors.height = 'La altura tiene que ser como minimo 35'
  }

  //PESO
  if (!pokemon.weight) {
    errors.weight = 'Se requiere peso'
  } else if (!Number(pokemon.weight)) {
    errors.weight = 'El valor del peso debe ser un numero'
  } else if (pokemon.weight < 35) {
    errors.weight = 'El peso tiene que ser como minimo 35'
  }


 

  return errors
}



export default function NewPokemon() {

  const state = useSelector(state => state.pokemonTypes)
  const dispatch = useDispatch()
  const history = useHistory()
  const [select, setSelect] = React.useState([])
  const [errors, setErrors] = React.useState({})
  const [pokemon, setPokemon] = React.useState({
    name: '',
    img: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: [],
   
    
  })

  const handleInputChange = function (e) {

    console.log(e);

    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...pokemon,
      [e.target.name]: e.target.value
    }))
  }
  const handleSelectChange = (event) => {
    if (!select.find(e => e === event.target.value)) {
      setSelect([
        ...select,
        event.target.value
      ])
    } else {
      setSelect(select.filter(e => e !== event.target.value))
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0) {
      alert('Debes rellenar todos los campos')
    } else {
      if (select.length === 0) {
        return alert('Tienes que agregar un tipo antes crear un pokemon')
      } else {
        if (select.length > 0) select.map(e => pokemon.type.push(e))
        if (pokemon.hp !== 0 || pokemon.attack !== 0 || pokemon.defense !== 0 || pokemon.speed !== 0 || pokemon.height !== 0 || pokemon.weight !== 0) {
          dispatch(postPokemon(pokemon))
          alert('Pokemon creado correctamente!')
          dispatch(getAllPokemons())
          setTimeout(() => {
            history.push('/home')
          }, 1000);
        } else {
          alert('Debes rellenar todos los campos antes de enviar')
        }
      }
    }
  }

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])


  // console.log(state)

  return (
    <Contenedor>


      <Grupo1>
        <Titulo>Add Pokemon</Titulo>
        <Boton><StyledLink to={`/home`}>Go to home</StyledLink></Boton>
      </Grupo1>


      <Subgrupo2A>

        <Formulario>
          <Ffform onSubmit={(e) => handleOnSubmit(e)}>

            <br></br>
            <Subtitulos>Name</Subtitulos>
            <DivInputForm>
              <InputForm type='text' placeholder='Ingrese el nombre del pokemon'
                onChange={handleInputChange} name='name' value={pokemon.name} />
            </DivInputForm>
            {errors.name && <SubtitulosLiErrores>-{errors.name}</SubtitulosLiErrores>}

            <br></br>
            <Subtitulos>Image</Subtitulos>
            <DivInputForm>
              <InputForm type='text' placeholder='Imagen..'
                onChange={handleInputChange} name='img' value={pokemon.img} />
            </DivInputForm>
          

            <br></br>
            <Subtitulos>Hp</Subtitulos>
            <DivInputForm>
              <InputForm placeholder='Hp..' name='hp' autoComplete='off' onChange={handleInputChange} value={pokemon.hp} />
            </DivInputForm>

            {errors.hp && <SubtitulosLiErrores>-{errors.hp}</SubtitulosLiErrores>}

            <br></br>
            <Subtitulos>Attack</Subtitulos>
            <DivInputForm>
              <InputForm placeholder='attack..' name='attack' onChange={handleInputChange} value={pokemon.attack} />
            </DivInputForm>
            {errors.attack && <SubtitulosLiErrores>-{errors.attack}</SubtitulosLiErrores>}

            <br></br>
            <Subtitulos>Defense</Subtitulos>

            <DivInputForm>
              <InputForm placeholder='defense..' name='defense' onChange={handleInputChange} value={pokemon.defense} />
            </DivInputForm>
            {errors.defense && <SubtitulosLiErrores>-{errors.defense}</SubtitulosLiErrores>}

            <br></br>
            <Subtitulos>Speed</Subtitulos>
            <DivInputForm>
              <InputForm placeholder='speed..' name='speed' onChange={handleInputChange} value={pokemon.speed} />
            </DivInputForm>
            {errors.speed && <SubtitulosLiErrores>-{errors.speed}</SubtitulosLiErrores>}

            <br></br>
            <Subtitulos>Weight</Subtitulos>
            <DivInputForm>
              <InputForm placeholder='weight..' name='weight' onChange={handleInputChange} value={pokemon.weight} />
            </DivInputForm>
            {errors.weight && <SubtitulosLiErrores>-{errors.weight}</SubtitulosLiErrores>}

            <br></br>
            <Subtitulos>Height</Subtitulos>
            <DivInputForm>
              <InputForm placeholder='height..' name='height' onChange={handleInputChange} value={pokemon.height} />
            </DivInputForm>
            {errors.height && <SubtitulosLiErrores>-{errors.height}</SubtitulosLiErrores>}

        


            <Subgrupo2B>

              <SubtitulosType>Tipos</SubtitulosType>

              <ContenedorTypes>
                {state && state.map((e) => (
                  <LabelCheck key={e.id} htmlFor={e.name}><InputCheck
                    type='checkbox'
                    id={e.name}
                    name={e.name}
                    value={e.name}
                    onChange={handleSelectChange}
                  />{e.name}</LabelCheck>
                ))}
              </ContenedorTypes>
              


            </Subgrupo2B>
             
            {errors.type && <SubtitulosLiErrores>-{errors.type}</SubtitulosLiErrores>}
            {select.length === 0 && <SubtitulosLiErrores>-Debes seleccionar un tipo como mínimo</SubtitulosLiErrores>}


            <div>
              <BotonCreate type='submit' >Crear pokemon</BotonCreate>
            </div>

          </Ffform>

        </Formulario>


       

      </Subgrupo2A>

 



    </Contenedor>

  )
}