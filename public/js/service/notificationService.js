var Question = function Question(title, msg) {
    this.type = 'info';
    this.css = 'toast-top-right';
    this.title = title;
    this.msg = msg;
    this.show = function () {
        toastr.options = {
            closeButton: false,
            debug: false,
            progressBar: false,
            positionClass: this.css,
            onclick: null,
            showDuration: '7500',
            hideDuration: '1500',
            timeOut: '0',
            extendedTimeOut: '0',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut'
        };
        toastr[this.type](this.title, this.msg);
    }
};

var showQuestion = function (question) {
    var questionToast = new Question(question, "Intrebare");

    questionToast.show();
};