const express = require('express');
const app = express();
const {connection, port} = require('./secret');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

connection.connect();

app.get(`/`, (req, res) => {
    res.status(200).send('hi');
  });

  app.get('/getUsers',  (req, res) => {
    connection.query('SELECT * FROM users;', (err, rows, fields) => {
      if (err) throw err;
      res.status(200).send(rows);
    });
  });

  app.post(`/registerUser`, (req, res) => {
    const { userName } = req.body;
    if (!userName) return;
    connection.query(`INSERT INTO users (userName) VALUES (?);`, userName, err => {
        if (err) throw err;
        console.log(`${userName} INSERTED`);  
    });
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is listening on ${port}`);
});