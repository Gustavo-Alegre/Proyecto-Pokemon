const router = require('express').Router();
const functions = require('../functions')


router.get('/', async (req, res) => {




  try {

    const { name } = req.query

 
    const allData = await functions.pokemonDb()
  
    let errorsResponse = {};

    if (name) {


      if (!name.match(/^[a-z]+$/)) {
          errorsResponse.name = ' solo se admiten nombres simples y en minúscula'
        }
      
        if (!(Object.entries(errorsResponse).length === 0)) {
          return res.send(errorsResponse)
        }

      let nameMayuscula=  name[0].toUpperCase() + name.slice(1)
      let dataName = allData.find(e => e.name === nameMayuscula)
      if (!dataName) return res.json(null)
      return res.json(dataName)
    }
    return res.json(allData)
  } catch (err) {
    console.log(err)
  }

});

module.exports = router