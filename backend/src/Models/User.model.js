const { Schema, model } = require('mongoose');

const userSchema =  new Schema({
    name: String,
    email: String,
    web: String,
    countrie: String,
}, {
    timestamps: true
});


module.exports = model('User', userSchema);