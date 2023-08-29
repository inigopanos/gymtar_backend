const express = require('express');
// const saveSchema = require('./schema');

const TestSchema = require('./schema');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Ruta raíz alcanzada');
  res.send('Se ha enviado el esquema de prueba');
  TestSchema.save().then((savedData) => {
    console.log('Datos guardados:', savedData);
  }).catch((error) => {
    console.error('Error al guardar los datos:', error);
  });
});

module.exports = router;
