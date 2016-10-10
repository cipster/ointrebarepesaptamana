var express = require('express');
var router = express.Router();
var DbService = require('../bin/service/dbService');
var db = DbService.db;

router.get('/', function (req, res, next) {
    db.cities.find({}).toArray(function (err, items) {
        _.each(items, function (city) {
            city['value'] = city.text
        });

        res.json(items);
    });
});


module.exports = router;
