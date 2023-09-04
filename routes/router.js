const express = require('express');
// const saveSchema = require('./schema');
// const mongoose = require('mongoose');

const {
  // eslint-disable-next-line no-unused-vars
  TestSchema,
} = require('../models/schema');

const addJoint = require('../controllers/joint.controller');

const router = express.Router();

// router.get('/', (req, res) => {
//   console.log('Ruta raíz alcanzada');
//   res.send('Se ha enviado el esquema de prueba');

//   TestSchema.save().then((savedData) => {
//     mongoose.set('debug', true);
//     console.log('Datos guardados:', savedData);
//   }).catch((error) => {
//     console.error('Error al guardar los datos:', error);
//     res.status(500).send('Error al guardar los datos');
//   });
// });

router.post('/add', addJoint, (req) => {
  console.log('Se ha llamado a /joints/add');
  console.log('Req body: ', req.body);
});

module.exports = router;
