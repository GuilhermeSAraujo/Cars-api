const express = require('express');
const app = express();
const router = require('./routers/router.js');
const database = require('./db.js');

const port = 3000;

app.use(router);

app.listen(port, () => {
	console.log(`Ouvindo porta ${port}`)
});