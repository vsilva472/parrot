'use strict';

const userRepository            = require( '../repositories/user-repository' );
const notificationRepository    = require( '../repositories/notification-repository' );

exports.index = async ( req, res, next ) => {
    try {
        // TODO paginacao
        const userId            = req.session.user.id;
        const suggestions       = await userRepository.getFriendshipSuggestions( userId, 3 );
        const notifications     = await notificationRepository.getByUserId( userId ); 
        
        res.render('notifications', { 
            user            : req.session.user, 
            title           : 'Notificações', 
            bodyClass       : 'notifications', 
            whoToFollow     : suggestions,
            notifications   : notifications
        }); 
    }
    catch ( e ) {
        console.log( "ERROR NOTIFICATIONS ##############" );
        console.log( e.message );
        res.render( 'error500' );
    }
};