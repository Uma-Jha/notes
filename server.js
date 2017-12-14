var express = require('express');
var app = express();
app.use(express.static(__dirname + '/teamManager/dist')); 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');
require('./server/config/mongoose_setup.js');
require('./server/config/routes.js')(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
})