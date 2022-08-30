const db = require('../db');

class AutomakerRepository {
	static async listAllAutomaker() {
		const results = await new Promise((success, failure) => {
			db.all(`SELECT * FROM automaker`, (err, rows) => {
				success(rows);
			});
		});
		return results;
	}
}

module.exports = AutomakerRepository;