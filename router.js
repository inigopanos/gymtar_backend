const express = require('express');
// const saveSchema = require('./schema');
const mongoose = require('mongoose');

const {
  // eslint-disable-next-line no-unused-vars
  JointSchema,
  TestSchema,
  TestModel,
} = require('./schema');

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
    const testInstance = new TestModel(TestSchema);

    // Aquí convertimos el objeto TestSchema a un objeto plano usando toObject()
    const testObject = testInstance.toObject();

    console.log('Datos a guardar en /prueba:', testObject);

    const savedData = await TestModel.create(testObject);

    console.log('Datos guardados en /prueba:', savedData);
    res.send('Datos guardados exitosamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).send('Error al guardar los datos');
  }
});

module.exports = router;
