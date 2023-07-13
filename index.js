const express = require('express');

const app = express();
const port = 3600;

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => {
  console.log('Server listening in http://localhost:3600');
});
