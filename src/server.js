const express = require('express');
const app = express();
const router = require('./routers/user-rt');
const database = require('./db.js');
	console.log(database.sync());

const port = 3000;

app.use(router);

app.listen(port, () => {
	console.log(`Ouvindo porta ${port}`)
});