const { connection } = require('../secret');

const getUsers = (req, res) => {
	connection.query('SELECT * FROM users;', (err, rows, fields) => {
		if (err) throw err;
		res.status(200).send(rows);
	});
};

const registerUsers = (req, res) => {
	const userName = req.body.userName;
	const password = req.body.password;
	console.log(userName);
	console.log(password);

	if (!userName || !password) return res.send('No userName or password');
	connection.query(
		`INSERT INTO users (userName, password) VALUES ('${userName}', '${password}');`,
		(err) => {
			if (err) throw err;
			console.log(`${userName} INSERTED`);
			res.send(`${userName} INSERTED`);
		}
	);
};

const modifyUser = (req, res) => {
	const { id } = req.params;
	const newUserName = req.body.userName;
	if (!newUserName) return res.send('No new userName');
	connection.query(
		'UPDATE users SET userName = ? WHERE id = ?',
		[newUserName, id],
		(err) => {
			if (err) throw err;
			console.log(`you changed userName to ${newUserName} in row number ${id}`);
		}
	);
};

const deleteUser = (req, res) => {
	const { id } = req.params;
	if (!id) return res.send('No id');
	connection.query(
		'DELETE FROM users WHERE id = ?',
		id,
		(err, rows, fields) => {
			if (err) throw err;
			console.log(`you delete row number: ${id}`);
		}
	);
};

module.exports = {
	getUsers,
	registerUsers,
	modifyUser,
	deleteUser,
};
