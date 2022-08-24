const db = require('../db');

class AutomakerRepository {
	static async createAutomaker(name) {
		await db.run(`INSERT INTO automaker (name) VALUES ("${name}");`);
	}
}

module.exports = AutomakerRepository;