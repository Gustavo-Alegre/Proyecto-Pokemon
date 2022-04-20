const router = require('express').Router();
const functions = require('../functions')
const { Type } = require('../db');



router.get('/' , async (req , res) => {  
    try{ 
        const type = await functions.types() 
        const tipo = type.forEach(async(e) => { 
            await Type.findOrCreate({ 
                where: {
                    id: e.id, 
                    name: e.name,
                }
            })
    })  
    const allData = await Type.findAll() 
   
    res.json(allData.map(e => e.toJSON()))
    } 

    catch(err){ 
        console.log(err)
    }
   
}); 

module.exports = router