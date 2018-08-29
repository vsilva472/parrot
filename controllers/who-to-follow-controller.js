'use strict';

const userRepository = require( '../repositories/user-repository' );

exports.index = async ( req, res, next ) => {
    try {
        const user          = req.session.user;
        const suggestions   = await userRepository.getFriendshipSuggestions( user.id, 18 );
        const whoToFollow   = suggestions.splice( 15, 3 );

        res.render( 'who-to-follow', { 
            user        : user,
            title       : 'Quem Seguir', 
            content     : suggestions, 
            whoToFollow : whoToFollow
        });
    } 
    catch ( e ) {
        console.log( e.message );
        res.render( 'error500' );
    }
};