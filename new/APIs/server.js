const express = require('express');
const app = express();
const mongoose = require('./config/connection');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const userapis = require('./routes/user')


dotenv.config();

let port = process.env.PORT || 3000;
app.use(express.static("Public"));

app.use(bodyParser.json())
app.use('/user',userapis)
app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});
