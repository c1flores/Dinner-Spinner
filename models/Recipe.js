const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        recipeName: {
            type: DataTypes.String,
            allowNull: false,
        },
        ingOne: {
            type: DataTypes.STRING, 
            allowNull: false,
          },
          ingOneOz: {
            type: DataTypes.STRING,
            allowNull: false,
          }, 
          ingTwo: {
            type: DataTypes.STRING
          }, 
          ingTwoOz: {
            type: DataTypes.STRING
          }, 
          ingThree: {
            type: DataTypes.STRING
          }, 
          ingThreeOz: {
            type: DataTypes.STRING
          }, 
          ingFour: {
            type: DataTypes.STRING
          }, 
          ingFourOz: {
            type: DataTypes.STRING
          }, 
          ingFive: {
            type: DataTypes.STRING
          }, 
          ingFiveOz: {
            type: DataTypes.STRING
          }, 
          recipeNotes: {
            type: DataTypes.STRING
          }},
       
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'Recipe',
        }
      );

      module.exports = Recipe;
