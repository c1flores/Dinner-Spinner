const {Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

Shopper.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            outoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1],
            }
        },
        description: {
            type: DataTypes.STRING,

        },
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
              try {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
              } catch (err) {
                console.log(err);
                return err;
              }
            },
            beforeUpdate: async (updatedUser) => {
              try {
                updatedUser.password = await bcrypt.hash(
                  updatedUser.password,
                  10
                );
                return updatedUser;
              } catch (err) {
                console.log(err);
                return err;
              }
            },
          },
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'user',
        }
      );

      module.exports = User;
