var express = require('express');
var router = express.Router();
var _ = require('underscore');
var DbService = require('../bin/service/dbService');
var db = DbService.db;
var ObjectID = DbService.ObjectID;

router.get('/', function (req, res, next) {
    var email = req.session.email;

    if (email) {
        var user;
        db.users.find({email: email}).toArray(function (err, items) {
            if (items.length > 0) {
                user = items[0];
                res.render('profil', _.extend({title: 'O intrebare pe saptamana'}, user));
            }
        });
    } else {
        res.redirect('/login');
    }
});

router.put('/', function (req, res, next) {
    var user = {},
        reqBody = req.body,
        id = new ObjectID(reqBody.pk);

    user[reqBody.name] = reqBody.value;

    db.users.update({_id: id}, {$set: user}, function () {
        res.json({});
    });
});

module.exports = router;
