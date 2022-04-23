const router = require('express').Router();
const { Pokemon, Type } = require('../db')



router.post('/', async (req, res) => {



    //// VALIDACIONES ////


    try {
        const { name, hp, attack, defense, speed, height, weight, img, type, comida} = req.body

        let errorsResponse = {};

        //NAME

        if (!name) {

            errorsResponse.mesen = "debe contener name"
        }
        else if (!name.match(/^[a-zA-Z]+$/)) {
            errorsResponse.name = 'solo se admiten nombres simples'
        }

        if (!(Object.entries(errorsResponse).length === 0)) {

            return res.send(errorsResponse)
        }




        const pokemon = await Pokemon.create({
            name: (name[0].toLowerCase() + name.slice(1)), 
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            height: height,
            weight: weight,
            img: img,
            comida:comida
            
           
        })
        let typeDb = await Type.findAll({
            where: {
                name: type
            }
        })

        await pokemon.addType(typeDb)



        res.send("Pokemon cargaddo con éxito")
    } catch (err) {
        res.send(err)
    }
})

module.exports = router