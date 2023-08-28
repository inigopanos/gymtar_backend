const express = require('express');

const saveSchema = require('./schema');

const router = express.Router();

const app = express();

app.get('/test').post((req, res) => {
  res.send('Se ha enviado el esquema de prueba');
  saveSchema();
});

module.exports = router;
