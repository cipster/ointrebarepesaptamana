var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var mainPage = require('./routes/main');
var login = require('./routes/login');
var logout = require('./routes/logout');
var forgotPassword = require('./routes/forgotPassword');
var register = require('./routes/register');
var profil = require('./routes/profil');
var cities = require('./routes/cities');
var studii = require('./routes/studii');
var session = require('express-session');
//var MongoStore = require('connect-mongo/es5')(session);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


var arrayContainsObject = function (obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (_.isEqual(list[i], obj)) {
            return true;
        }
    }

    return false;
};

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', '/img/raindrop-logo.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: "cucubau",
    name: "O-Intrebare-Pe-Saptamana",
    //store: MongoStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use('/', routes);
app.use('/main', mainPage);
app.use('/login', login);
app.use('/log-out', logout);
app.use('/forgot-password', forgotPassword);
app.use('/register', register);
app.use('/profil', profil);
app.use('/cities', cities);
app.use('/studii', studii);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
