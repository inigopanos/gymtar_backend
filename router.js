const express = require('express');

const saveSchema = require('./schema');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Ruta raíz alcanzada');
  res.send('Se ha enviado el esquema de prueba');
  saveSchema();
});

module.exports = router;
