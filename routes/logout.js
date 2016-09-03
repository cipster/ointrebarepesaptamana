var express = require('express');
var router = express.Router();
var pageObject = {
    title: "La revedere",
    message: "Ai ie&#x219;it cu succes, <br> Te mai a&#x219;tept&abreve;m pe la noi"
};

/* GET logout page. */
router.get('/', function (req, res, next) {
    res.render('logout', pageObject);
});

module.exports = router;
