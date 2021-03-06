var express = require('express');
var stylus = require('stylus');
var connect = require('connect');
var bodyParser   = require('body-parser');
var morgan         = require('morgan'); // looger wird zu morgan

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));

app.use(express.static(__dirname + '/public'));


app.get('/',function(reg,res){
    res.render('index');
});


app.listen(3030);
console.log('Express app started on port %d', 3030);