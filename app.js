const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/posts',postRoute);


app.get('/',(req, res) => {
    res.send('hello there!!');
})

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },() => {
    console.log('connected to db');
});
app.listen(5000);