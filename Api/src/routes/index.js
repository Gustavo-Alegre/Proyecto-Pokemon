const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemons = require('./pokemons');
const pokemonspost = require('./pokemonpost');
const pokemonstype = require('./pokemontype');
const pokemonsid = require('./pokemonsid');
const pokemonsdelete = require('./pokemondelete');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons' , pokemons);
router.use('/pokemons' ,  pokemonspost)
router.use('/types' , pokemonstype)
router.use('/pokemons' , pokemonsid)
router.use('/pokemons/delete' , pokemonsdelete)

module.exports = router;

