const express = require('express');
const cors = require('cors');

/* Create Express instance */
const app = express();


/* Server settings */
app.set('port', process.env.PORT || 4000);


/* Server Middlewares */
app.use(cors());
app.use(express.json());


/* Server Routes */
app.use('/api/users', require('./Routes/user.route'));


/* Export express instance  */
module.exports = app;