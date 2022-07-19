'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        makeCaps (title) {
          let words = title.split(' ')
          for (let word of words){
            if (word[0] !== word[0].toUpperCase()){
              throw new Error("First letter must be capitalized")
            }
          }
          // words[0].toUpperCase()
        }
      },
      allowNull: false, 
      unique: true
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0,240]
      },
    },
    millimeters:{
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      },
      allowNull:false,

    },
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};