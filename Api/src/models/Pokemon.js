const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },



    id: {  
      allowNull: false, 
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,  
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    hp: { 
      type: DataTypes.INTEGER
    },
    attack: { 
      type: DataTypes.INTEGER
    }, 
    defense: { 
      type: DataTypes.INTEGER
    }, 
    speed: { 
      type: DataTypes.INTEGER
    }, 
    height: { 
      type: DataTypes.INTEGER
    }, 
    weight: { 
      type: DataTypes.INTEGER
    },
    img:{ 
      type: DataTypes.STRING
    },

   
   
  });
};