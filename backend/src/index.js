const app = require('./app');
require('./database');

/* Initialize Sever */
async function main(){
    app.listen(app.get('port'));
    console.log(`Server Running on Port: ${app.get('port')}`);
}


/* Run Server */
main();