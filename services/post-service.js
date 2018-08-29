'use strict';
const Entities = require('html-entities').XmlEntities;

exports.parseBody = ( content ) => {
    const entities  = new Entities();
    
    let post = content.substring(0, 240);
    post = entities.encode( post );
    post = post.replace(/(?:\r\n|\r|\n)/g, '<br>');
    
    return post;
};