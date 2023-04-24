var createError = require('http-errors');
var express = require('express');
const mongoose = require("mongoose");
var path = require('path');
var logger = require('morgan');
var nunjucks = require('nunjucks');
require('dotenv').config();

// Use ES6 native Promises as promise library
mongoose.Promise = global.Promise;
mongoose.set('bufferCommands', false);

var indexRouter = require('./routes/index');
var tripsRouter = require('./routes/trips');
var activitiesRouter = require('./routes/activities');
// require our api router module
var apiTripsRouter = require('./routes/api/api-trips');

var app = express();

// Connect to MongoDB
const mongoConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.iwb4mqe.mongodb.net/travelBlog?retryWrites=true&w=majority`,
      { family: 4 }
    )
  }
  catch (err) {
    return next(err);
  }
}
mongoConnect();

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trips', tripsRouter);
app.use('/activities', activitiesRouter);
app.use('/api/trips', apiTripsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', res.locals);
  console.log(err);
});

module.exports = app;
