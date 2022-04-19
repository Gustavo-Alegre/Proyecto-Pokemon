const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemons = require('./pokemons');
const pokemonsPost = require('./pokemonPost');
const pokemonsType = require('./pokemonType');
const pokemonsId = require('./pokemonsId');
const pokemonsDelete = require('./pokemonDelete');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons' , pokemons);
router.use('/pokemons' ,  pokemonsPost)
router.use('/types' , pokemonsType)
router.use('/pokemons' , pokemonsId)
router.use('/pokemons/delete' , pokemonsDelete)

module.exports = router;

