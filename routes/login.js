var express = require('express');
var router = express.Router();
var DbService = require('../bin/service/dbService');
var db = DbService.db;
var pageObject = {title: "Intra intr-o intrebare pe saptamana"};

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login', pageObject);
});

router.post('/', function (req, res, next) {
    var email = req.body.email,
        password = req.body.password;

    db.users.find({email: email, password: password})
        .toArray(function (err, items) {
            if (items.length > 0) {
                req.session.email = email;
                res.redirect('main');
            } else {
                res.render('login', {
                    class: "text-danger",
                    message: "Email sau parol&abreve; gresit&abreve;",
                    title: "O intrebare pe saptamana"
                });
            }
        });
});


module.exports = router;
