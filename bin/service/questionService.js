var DbService = require('./dbService');
var db = DbService.db;

var Question = function Question(text, type) {
    this.text = text;
    this.type = type;
};

var getAllQuestionsForUser = function (email) {
    var user = {};
    db.users.find({email: email}).toArray(function (err, items) {
        if (items.length > 0) {
            user = items[0];
        }
    });

    return user;
};

module.exports = {
    Question: Question,
    getAllQuestionsForUser: getAllQuestionsForUser
};