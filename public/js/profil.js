$.fn.editable.defaults.mode = 'inline';

$(document).ready(function () {
    $('.profile-editable').editable({
        emptytext: 'Click pentru a ad&abreve;uga',
        savenochange: true,
        ajaxOptions: {
            type: 'put',
            dataType: 'json'
        },
        success: function (data, config) {
            if (data && data.id) {
                $(this).removeClass('editable-unsaved');
            }
        }
    });

    $('#aboutme').editable({
        emptytext: 'Click pentru a modifica',
        savenochange: true,
        ajaxOptions: {
            type: 'put',
            dataType: 'json'
        },
        success: function (data, config) {
            if (data && data.id) {
                $(this).removeClass('editable-unsaved');
            }
        }
    });
});