// Import modul express dan body parser
const bodyParser = require('body-parser');
const express = require('express');

// var global express
const app = express()

// Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// panggil routes
var routes = require('./routes/route')
routes(app)

// Run server port
app.listen(3000, () => {
    console.log(`Server started on port`);
});