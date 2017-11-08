/**
 * Autos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

// Name table in database
  tableName: 'autos',

  // attributes: types, validations ans defaults values
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    marca: {
      type: 'string',
      required: true,
      size: 20
    },
    nombre: {
      type: 'string',
      required: true,
      size: 45
    },
    ano: {
      type: 'integer',
      unique: true,
      required: true
    }
  }
};

