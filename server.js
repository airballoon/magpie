var express = require('express');
var logger = require('morgan');
var multer = require('multer')
var app = express();

app.engine('.html', require('ejs').__express)
app.set('views', __dirname + '/views');
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(multer({ dest: './uploads/'}))

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/upload', function(req, res) {
  res.send(req.files.swf.path);
});

if (!module.parent) {
  app.listen(3003);
  console.log('Express started on port 3003.');
}


