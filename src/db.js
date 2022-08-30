var sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./car.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
    } else if (err) {
        console.log("Getting error " + err);
        exit(1);
    }
    fillDb(db);
});


const fillDb = async (db) => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS automaker(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
            );`
        );
        db.run(`
            CREATE TABLE IF NOT EXISTS models(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            automaker_id INTEGER,
            FOREIGN KEY (automaker_id) REFERENCES automaker (id) 
            );`
        );
        db.all(`
           INSERT INTO automaker (name) VALUES ("Fiat");`
        );
        db.all(`
           INSERT INTO automaker (name) VALUES ("Ford");`
        );
        db.all(`
           INSERT INTO automaker (name) VALUES ("Chevrolet");`
        );
        db.all(`
            INSERT INTO models (name, automaker_id) VALUES ("Argo", 1);`
        );
        db.all(`
            INSERT INTO models (name, automaker_id) VALUES ("Fusion", 2);`
        );
        db.all(`
            INSERT INTO models (name, automaker_id) VALUES ("Prisma", 3);`
        );
    });
}

module.exports = db;