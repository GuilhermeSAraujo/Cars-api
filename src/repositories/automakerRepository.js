const db = require('../db');

const createAutomaker = (name) => {
	db.run(`INSERT INTO automaker (name) VALUES (${name})`);
}

module.exports = {
	createAutomaker,
}