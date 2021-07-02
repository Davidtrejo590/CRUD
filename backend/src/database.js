const mongoose = require('mongoose');

/* Create Database */
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test';

/* Connecting with mongo */
mongoose.connect( URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

/* Connection Succesfully */
connection.once('open', () => { console.log('Database is Conected') })