var express = require('express');
var stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

app.set('views', __dirname + '/server/views');


// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

app.set(express.logger('dev'));
app.use(express.bodyParser());

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile

}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/public'));

app.get('/',function(reg,res){
    res.render('index');
});


app.listen(3030);
console.log('Express app started on port %d', 3030);