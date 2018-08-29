'user strict';

const userRepository            = require( '../repositories/user-repository' );
const notificationRepository    = require( '../repositories/notification-repository' );

// Apenas via Ajax
exports.follow = async ( req, res, next ) => {
    try {
        /*
        * TODO 
        * ver como fazer transaction e como Relacionar os models
        * fazer query antes para ver se usuario ja seguiu
        * este usuario hoje e em caso positivo nao criar notificação !
        * Este caso se aplica qnd um usuario segue e nao segue mais o mesmo usuario no mesmo dia
        * pensar e "dia" é suficiente ou talvez "semana" para evitar spam na base de notificação e no tela do usuario
        */
        const myId      = req.session.user.id;
        const friendId  = req.body.user_id;

        notificationRepository.create( myId, friendId, 'Seguiu você' );
        userRepository.follow( myId, friendId );
        userRepository.incrementFollowedCount( friendId );
        userRepository.incrementFollowingCount( myId );

        res.json({ status: true });
    } 
    catch ( e ) {
        console.log( 'ERROR FOLLOW ################' );
        console.log( e.message );
        return res.status(500).json({ status: true });
    }

};

// Apenas via Ajax
exports.unfollow = async ( req, res, next ) => {
    // TODO ver como fazer transaction e como Relacionar os models
    try {
        const myId      = req.session.user.id;
        const friendId  = req.body.user_id;

        userRepository.unfollow( myId, friendId );
        userRepository.decrementFollowedCount( friendId );
        userRepository.decrementFollowingCount( myId );

        res.json({ status: true });
    } 
    catch ( e ) {
        console.log( 'ERROR FOLLOW ################' );
        console.log( e.message );
        return res.status(500).json({ status: true });
    }
};