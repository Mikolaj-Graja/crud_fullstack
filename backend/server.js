const express = require('express');
const app = express();
const {connection} = require('./secret');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
connection.connect();

app.get(`/`, (req, res) => {
    res.send('hi');
  });



  app.listen(port, err => {
    if (err) throw err;
    console.log(`Server is listening on ${port}`);
  });