var express = require('express');
var router = express.Router();
var DbService = require('../bin/service/dbService');
var db = DbService.db;
var _ = require('underscore');

router.get('/', function (req, res, next) {
    db.studii.find({}).toArray(function (err, items) {
        _.each(items, function (studiu) {
            studiu['value'] = studiu.text
        });

        res.json(items);
    });
});


module.exports = router;
