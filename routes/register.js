var express = require('express');
var router = express.Router();
var DbService = require('../bin/service/dbService');
var db = DbService.db;

router.get('/', function (req, res, next) {
    res.render('register', {title: 'Cont nou'});
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    db.users.find({email: email})
        .toArray(function (err, items) {
            if (items.length > 0) {
                res.render('register', {
                    class: "text-danger",
                    message: "Adresa de email este deja folosit&abreve;",
                    title: "Cont nou"
                });
            } else {
                db.users.insert(req.body, function () {
                    res.redirect('/login');
                });
            }
        });
});

module.exports = router;
