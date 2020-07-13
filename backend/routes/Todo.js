const { connection } = require('../secret');

const getTodoList = (req, res) => {
	connection.query('SELECT * FROM todo;', (err, rows, fields) => {
		if (err) throw err;
		res.status(200).send(rows);
	});
};

const addTodo = (req, res) => {
	const item = req.body.item;
	console.log(item);
	if (!item) return res.send('uzupełnij puste pole');
	connection.query(`INSERT INTO todo (item) VALUES ('${item}');`, (err) => {
		if (err) throw err;
		console.log(`${item} INSERTED`);
		res.send(`${item} INSERTED`);
	});
};

const deleteTodo = (req, res) => {
	const { id } = req.params;
	if (!id) return res.send('No id');
	connection.query('DELETE FROM todo WHERE id = ?', id, (err, rows, fields) => {
		if (err) throw err;
		console.log(`you delete row number: ${id}`);
	});
};

const modifyTodo = (req, res) => {
	console.log(`id to ${req.params.id}, a nazwa to ${req.body.newItem} `);
	const id = req.params.id;
	const newItemName = req.body.newItem;
	if (!newItemName) return res.send('Nie wprowadzono zmian');
	connection.query(
		`UPDATE todo SET item = '${newItemName}' WHERE id = '${id}'`,
		(err) => {
			if (err) throw err;
			console.log(`zmieniłeś zadanie na ${newItemName} jego id to ${id}`);
		}
	);
};
module.exports = {
	getTodoList,
	addTodo,
	modifyTodo,
	deleteTodo,
};
