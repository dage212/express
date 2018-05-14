var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var hbs = require('hbs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/server/index');
var simple = require('./routes/server/simple');
var general = require('./routes/server/general');
var basic_form = require('./routes/server/basic_form');
var add = require('./routes/server/add');
var edit = require('./routes/server/edit');
var tip = require('./routes/server/tip');
var details = require('./routes/server/details');
var app = express();
hbs.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i <= to; i += incr)
        accum += block.fn(i);
    return accum;
});
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
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/', basic_form);
app.use('/', simple);
app.use('/', general);
app.use('/',add);
app.use('/',edit);
app.use('/',details);
app.use('/',tip);
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
