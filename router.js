const express = require('express');
// const saveSchema = require('./schema');
const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const TestSchema = require('./schema');
const TestModel = require('./schema');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Ruta raíz alcanzada');
  res.send('Se ha enviado el esquema de prueba');

  TestSchema.save().then((savedData) => {
    mongoose.set('debug', true);
    console.log('Datos guardados:', savedData);
  }).catch((error) => {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('Error al guardar los datos');
  });
});

router.get('/prueba', async (req, res) => {
  try {
    const testData = TestSchema;

    const testInstance = new TestModel(testData);
    const savedData = await testInstance.save();

    console.log('Datos guardados:', savedData);
    res.send('Datos guardados exitosamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('Error al guardar los datos');
  }
});

module.exports = router;
