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
        instruction: {
            type: DataTypes.STRING, 
            allowNull: false,
          },
        ingreadiants: {
            type: DataTypes.STRING,
          },
          date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
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
