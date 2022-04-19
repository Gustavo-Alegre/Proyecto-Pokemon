import './App.css';
import { Route } from 'react-router-dom';
import  Landing  from './components/landing/landing';
import  Inicio  from './components/inicio/inicio';
import  PokemonsDetail  from './components/detail/pokemonsDetail';
import  NewPokemon  from './components/newPokemon/newPokemon';


function App() {
  return (
    <> 

<Route exact path='/' component={Landing} /> 
<Route exact path='/home' component={Inicio} /> 
<Route exact path='/detail/:id' component={PokemonsDetail} />
<Route exact path='/create' component={NewPokemon} />


</>
 
  );
}

export default App;
