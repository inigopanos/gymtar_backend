/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<password>', process.env.DB_USER_PASS);

console.log('DB:', DB);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then((con) => {
  console.log(con.connections);
  console.log('DB connection succesful!');
}).catch((err) => {
  console.log('Error, ', err);
});

const app = express();
const port = 3600;

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => {
  console.log('Server listening in http://localhost:3600');
});
