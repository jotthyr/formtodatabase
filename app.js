const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kneeidle:' + process.env.MONGO_ATLAS_PW + '@cluster0-2lyop.mongodb.net/test?retryWrites=true&w=majority');

const formRouter = require('./routes/form');

app.use('/form', formRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 