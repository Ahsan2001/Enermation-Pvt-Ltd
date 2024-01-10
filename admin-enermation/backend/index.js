const express = require('express');
const router = require('./routes');
const { PORT } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const dbconnect = require('./config/database');




const app = express()

app.use(express.json());

dbconnect()

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`backend app running on port ${PORT}`)
})

