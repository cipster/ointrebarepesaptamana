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
});

module.exports = {
    db: db,
    ObjectID: ObjectID
};