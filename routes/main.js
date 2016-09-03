var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/', function (req, res, next) {
    var pageObject = {
        username: "Ciprian",
        title: 'O intrebare pe saptamana'
    };

    res.render('main', pageObject);
});

module.exports = router;
