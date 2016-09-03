var express = require('express');
var router = express.Router();
var DbService = require('../bin/service/dbService');
var MailService = require('../bin/service/mailService');
var db = DbService.db;

router.get('/', function (req, res, next) {
    res.render('forgotPassword', {title: 'Recuperare parola'});
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    db.users.find({email: email})
        .toArray(function (err, items) {
            if (items.length > 0) {
                var Email = new MailService.Email(email, "Resetare Parola", "recoverPassword", {email: email, password: 'qwerty'});
                Email.send(function (err, info) {
                    if (!err) {
                        res.render('login', {
                            class: "text-success",
                            message: "Parola a fost trimis&abreve; pe adresa de email " + email,
                            title: "O intrebare pe saptamana"
                        });
                    } else {
                        res.render('forgotPassword', {title: 'Recuperare parola'});
                    }
                });
            } else {
                res.render('forgotPassword', {
                    class: "text-danger",
                    message: "Adresa de email nu este asociat&abreve; niciunui cont",
                    title: "Recuperare parola"
                });
            }
        });
});


module.exports = router;
