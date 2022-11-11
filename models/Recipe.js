const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        recipeName: {
            type: DataTypes.STRING,
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
          ingSix: {
            type: DataTypes.STRING
          },
          ingSixOz: {
            type: DataTypes.STRING
          },
          ingSeven: {
            type: DataTypes.STRING
          },
          ingSevenOz: {
            type: DataTypes.STRING
          },
          ingEight: {
            type: DataTypes.STRING
          },
          ingEightOz: {
            type: DataTypes.STRING
          },
          ingNine: {
            type: DataTypes.STRING
          },
          ingNine: {
            type: DataTypes.STRING
          },   
          ingTen: {
            type: DataTypes.STRING
          },
          ingTenOz: {
            type: DataTypes.STRING
          },
          recipeNotes: {
            type: DataTypes.STRING
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        },
          
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'recipe',
        }
      );

      module.exports = Recipe;
