const express = require('express');
const app = express();
const { connection, port } = require('./secret');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Users = require('./routes/Users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

connection.connect();

app.get(`/`, (req, res) => {
	res.status(200).send(`Welcome to server port ${port}`);
});
app.get('/getUsers', Users.getUsers);
app.post(`/registerUser`, Users.registerUsers);
app.put('/modifyUser/:id', Users.modifyUser);
app.delete('/deleteUser/:id', Users.deleteUser);

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is listening on ${port}`);
});
