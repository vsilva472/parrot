'use strict';
const fs = require('fs');

exports.uploadFromBinary = ( data, filename, destination ) => {
    const imageData = data ? data.replace('data:image/png;base64,', '') : '';
    const buffer    = new Buffer( imageData, 'base64' );
    const filepath  = destination + filename;
      
    if ( imageData.length ) {
        fs.writeFile( filepath, buffer);
        return true;
    }
    
    return false;
};