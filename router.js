const express = require('express');
// const saveSchema = require('./schema');
const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const TestSchema = require('./schema');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Ruta raíz alcanzada');
  res.send('Se ha enviado el esquema de prueba');
  TestSchema.save().then((savedData) => {
    mongoose.set('debug', true);
    console.log('Datos guardados:', savedData);
  }).catch((error) => {
    console.error('Error al guardar los datos:', error);
  });
});

module.exports = router;
