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

// const modifyTodo = (req, res) => {
// 	const { id } = req.params;
// 	const newUserName = req.body.userName;
// 	if (!newUserName) return res.send('No new userName');
// 	connection.query(
// 		'UPDATE users SET userName = ? WHERE id = ?',
// 		[newUserName, id],
// 		(err) => {
// 			if (err) throw err;
// 			console.log(`you changed userName to ${newUserName} in row number ${id}`);
// 		}
// 	);
// };

const deleteTodo = (req, res) => {
	const { id } = req.params;
	if (!id) return res.send('No id');
	connection.query('DELETE FROM todo WHERE id = ?', id, (err, rows, fields) => {
		if (err) throw err;
		console.log(`you delete row number: ${id}`);
	});
};

module.exports = {
	getTodoList,
	addTodo,
	// modifyTodo,
	deleteTodo,
};
