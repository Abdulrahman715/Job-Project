require('dotenv').config();

const express = require('express');

const mongoose = require("mongoose");

const bodyParser = require('body-parser'); 

const httpStatusText = require('./utils/httpStatusText');

const app = express();

app.use(bodyParser.json());

const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
    console.log('mongodb server started');
})

const jopsRouter = require('./Routes/jops.router');
app.use('/api/jops', jopsRouter);

app.all('*', (req, res, next) => {
    res.status(400).json({
        status: httpStatusText.ERROR,
        data: null,
        message: "error in the url request",
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})