import React, {useEffect , useState}  from 'react' 
import {Loading,ContLoading,NameType} from '../../styles/spin';



export default function Spin() {

  const [cargando, setCargando] = useState('Cargando pokemons...')

  useEffect(() => { 
    const cambiarpoball = async() =>{ 
      setTimeout(() => {
        setCargando('No se encontro pokemon')
      }, 15000);
    }  
    return cambiarpoball()
  }, [])
  
  return (
  

        
        <ContLoading>
        <NameType>{cargando}</NameType> 
          <Loading />
        </ContLoading>

    
  )
}

