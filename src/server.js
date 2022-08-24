const express = require('express')
const app = express()
const router = require('./routers/user-rt');
const port = 3000

app.use(router);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})