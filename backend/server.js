const express = require('express');
const app = express();
const {connection, port} = require('./secret');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
    if (!userName) return res.send("No userName");
    connection.query(`INSERT INTO users (userName) VALUES (?);`, userName, err => {
        if (err) throw err;
        console.log(`${userName} INSERTED`);
        res.send(`${userName} INSERTED`)  
    });
});

app.put('/modifyUser/:id', (req, res) => {
  const { id } = req.params;
  const newUserName = req.body.userName;
  if (!newUserName) return res.send("No new userName");
  connection.query('UPDATE users SET userName = ? WHERE id = ?', [newUserName, id], err => {
    if (err) throw err;
    console.log(`you changed userName to ${newUserName} in row number ${id}`);
  });
});

app.delete('/deleteUser/:id', (req, res) => {
  const { id } = req.params;
  if (!id) return res.send("No id");
  connection.query('DELETE FROM users WHERE id = ?', id, (err, rows, fields) => {
    if (err) throw err;
    console.log(`you delete row number: ${id}`);
  });
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is listening on ${port}`);
});