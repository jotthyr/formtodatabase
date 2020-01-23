const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const Form = require('../models/form');


router.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../files')});

});

router.post('/', (req, res, next) => {

    const form = new Form({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname
    });
    form
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: "Handling POST requests to /form",
        createdForm: form
    });
});

module.exports = router;  