const express = require('express');
const app = express();
const {connection, port} = require('./secret');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

connection.connect();

app.get(`/`, (req, res) => {
    res.send('hi');
  });
  app.listen(port, err => {
    if (err) throw err;
    console.log(`Server is listening on ${port}`);
  });

  app.get('/getUsers',  (req, res) => {
    connection.query('SELECT * FROM users;', (err, rows, fields) => {
      if (err) throw err;
      res.status(200).send(rows);
    });
  });