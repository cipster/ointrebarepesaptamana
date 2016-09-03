var nodemailer = require('nodemailer');
var smtpConfig = {
    host: 'server63.romania-webhosting.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'no-reply@rain-software.com',
        pass: 'Parola@123'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);
var path = require('path');

var options = {
    viewEngine: 'hbs',
    viewPath: path.join(__dirname, '../../views/email'),
    extName: '.hbs'
};

var hbs = require('nodemailer-express-handlebars');
//attach the plugin to the nodemailer transporter
transporter.use('compile', hbs(options));


var sendMail = function (data, callback) {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take your messages');
            transporter.sendMail(data, callback);
        }
    });
};

var Email = function Email(to, subject, template, context) {
    this.to = to;
    this.from = 'no-reply@rain-software.com';
    this.subject = subject;
    this.template = template;
    this.context = context;
    this.send = function (callback) {
        sendMail(this, callback);
    }
};

module.exports = {
    Email: Email
};