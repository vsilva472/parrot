var FormErrors = {
    show : function ( errorList ) {
        errorList.forEach(function (error) {
            $(error.field).addClass('is-invalid');
            $('<div />').addClass('invalid-feedback').text(error.message).insertAfter(error.field);
        });
    },

    clear: function () {
        $( '.is-invalid' ).removeClass('is-invalid');
        $( '.invalid-feedback' ).remove();
    }
};