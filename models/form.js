const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String
});

module.exports = mongoose.model('Form', formSchema);  