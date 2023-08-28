const express = require('express');

const saveSchema = require('./schema');

const app = express();

app.get('/test-schema').post((req, res) => {
  res.send(saveSchema);
});
