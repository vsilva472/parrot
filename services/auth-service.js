'use strict';
const Entities = require('html-entities').XmlEntities;
const formatErrorResult = ( title, bodyClass, errorType, message ) => {
    return {
         title: title, 
         bodyClass: bodyClass, 
         alert: { 
             type: errorType, 
             message: message
         } 
     };
 };

exports.formatLoginError = ( errorType, credentials, message ) => {
    const error = formatErrorResult( 'Entrar', 'auth', errorType, message );
    error.data = credentials;
    
    return error;
};

exports.formatSignUpError = ( errorType, data, message ) => {
    const error = formatErrorResult( 'Cadastro', 'auth', errorType, message );
    error.data = data;
    
    return error;
}

exports.formatPasswordRecoverData = ( errorType, data, message ) => {
    const error = formatErrorResult( 'Cadastro', 'auth', errorType, message );
    error.data = data;
    
    return error;
}

exports.createSessionFor = ( user, req ) => {
    const entities = new Entities();
    req.session.user = { 
        id: user.id, 
        avatar: entities.encode(user.avatar),
        cover: entities.encode(user.cover),
        name: entities.encode(user.name), 
        username: entities.encode(user.username),
        following: user.following_count, 
        followers: user.followers_count
      };
}