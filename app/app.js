var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var hbs = require('hbs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/client/index');
var about = require('./routes/client/about');
var services = require('./routes/client/services');
var projects = require('./routes/client/projects');
var price = require('./routes/client/price');
var sidebar = require('./routes/client/sidebar');
var contact = require('./routes/client/contact');
var notFound = require('./routes/client/notFound');
var app = express();
//sdfdsf

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// 运行hbs模块
app.engine('html', hbs.__express);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));


app.use('/', index);
app.use('/', about);
app.use('/', price);
app.use('/', projects);
app.use('/', services);
app.use('/', sidebar);
app.use('/', contact);
app.use('/', notFound);

// app.use(function(req,res,next){
//     res.send('Hello World');
// })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
