function Validator () {
    var _errors = [];

    this.addError = function ( error ) {
        _errors.push( error );
    };

    this.hasErrors = function () {
        return _errors.length > 0;
    };

    this.getErrors = function () {
        return _errors;
    }

    this.clearErrors = function () {
        _errors = [];
    };
}

Validator.prototype.email = function ( field ) {
    console.log(field);
    if ( field.value.indexOf('@') === -1 ) {
        this.addError({
            field: field,
            message: 'Email inválido.'
        });
        return false
    }
    return true;
}

Validator.prototype.password = function ( field ) {
    const val = field.value.replace(/\s+/g, '');
    if ( val.length < 6 ) {
        this.addError({
            field: field,
            message: 'A senha deve conter pelo menos 6 caracteres'
        });
        return false;
    }
    return true;
}

Validator.prototype.name = function ( field ) {
    const val = field.value.replace(/\s+/g, '');
    if ( val.length < 3 ) {
        this.addError({
            field: field,
            message: 'Nome inválido.'
        });
        return false;
    }
    return true;
};

Validator.prototype.equals = function ( field, val ) {
    const fieldValue = $.trim(field.value);
    val = $.trim(val);

    if ( ( !fieldValue.length && !val.length ) || fieldValue != val  ) {
        this.addError({
            field: field,
            message: 'As senhas não coincidem'
        });
        return false;
    }
    return true;
}