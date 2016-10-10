var express = require('express');
var router = express.Router();
var DbService = require('../bin/service/dbService');
var db = DbService.db;
var _ = require('underscore');

router.get('/', function (req, res, next) {
    var email = req.session.email;

    if (email) {
        var user;
        db.users.find({email: email}).toArray(function (err, items) {
            if (items.length > 0) {
                user = items[0];
                res.render('main', _.extend({title: 'O intrebare pe saptamana'}, user));
            }
        });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
