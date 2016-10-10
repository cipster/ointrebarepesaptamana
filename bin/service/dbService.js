var session = require('express-session');
var _ = require('underscore');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;

var MongoStore = require('connect-mongo/es5')(session);

var db = new Db('tutor',
    new Server("localhost", 27017,
        {safe: true},
        {auto_reconnect: true},
        {})
);

db.open(function () {
    console.log("mongo db connection is opened");
    db.collection('users', function (error, users) {
        db.users = users;
    });
    db.collection('questions', function (error, questions) {
        db.questions = questions;
    });
    db.collection('cities', function (error, cities) {
        db.cities = cities;
    });
    db.collection('studii', function (error, studii) {
        db.studii = studii;
    });
});

module.exports = {
    db: db,
    ObjectID: ObjectID
};