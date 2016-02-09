var express = require("express");
var app = express();
global.mesgArray = []; //Holds all messages. Make to a DB/Table if needed

app.set('views', __dirname +'/views');
app.use(express.static(__dirname +"/views"));
app.set('view engine', 'jade');

var main = require ('./routes/main');
var mesg = require ('./routes/mesg');
app.use('/', main);
app.use('/mesg', mesg);


app.use(function(req, res, next) {
    res.end("Unknown request");
});

var port = 8080  , ip = "127.0.0.1";
var server = app.listen(port, ip);
