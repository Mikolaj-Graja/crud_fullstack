const express = require('express');
const app = express();
const { connection, port } = require('./secret');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Users = require('./routes/Users');
const Todo = require('./routes/Todo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

connection.connect();

app.get(`/`, (req, res) => {
	res.status(200).send(`Welcome to server port ${port}`);
});

// Users
app.get('/getUsers', Users.getUsers);
app.post(`/registerUser`, Users.registerUsers);
app.put('/modifyUser/:id', Users.modifyUser);
app.delete('/deleteUser/:id', Users.deleteUser);

// Todo
app.get('/getTodoList', Todo.getTodoList);
app.post(`/addTodo`, Todo.addTodo);
app.put('/modifyTodo/:id', Todo.modifyTodo);
app.delete('/deleteTodo/:id', Todo.deleteTodo);

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server is listening on ${port}`);
});
