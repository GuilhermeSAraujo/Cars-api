const db = require('../db');

class AutomakerRepository {
	static async listAllAutomaker() {
		const results = [];
		let retorno = await db.all(`SELECT * FROM automaker`, [], (err, rows) => {
			rows.forEach((row) => {
				console.log(row);
			});
		});
		console.log(retorno);
	}
}

module.exports = AutomakerRepository;