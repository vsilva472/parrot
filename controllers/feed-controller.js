'use strict';

const postService       = require( '../services/post-service' );
const ImageUploader     = require( '../services/image-uploader-service' );
const userRepository    = require( '../repositories/user-repository' );
const postRepository    = require( '../repositories/post-repository' );

exports.index = async (req, res, next) => {
    try {
        const user_id           = req.session.user.id;
        const feed              = await userRepository.getFeedData( user_id );
        const suggestions       = await userRepository.getFriendshipSuggestions( user_id, 3 );

        res.render( 'feed', { 
            user            : req.session.user, 
            posts           : feed, 
            title           : 'Feed', 
            isMyFeed        : true, 
            bodyClass       : 'feed', 
            whoToFollow     : suggestions, 
        }); 
    }
    catch ( e ) {       
        console.log( '##################################' );
        console.log( e.message );
        res.render( 'error500' );
    }
};


exports.create = async (req, res, next) => {
    try {
        const filename      = req.session.user.id + '_' + new Date().getTime() + '.png';
        const image         = ImageUploader.uploadFromBinary(req.body.image, filename, 'public/images/posts/');
        const postBody      = req.body.post;
        const user_id       = req.session.user.id;

        console.log( postBody );

        const post = await postRepository.create( user_id, postBody, image ? filename : false );
        await userRepository.incrementPostsCount( user_id );

        res.json({status: true, user: req.session.user, post: post.body});
    }
    catch ( e ) {
        console.log( 'ERROR POST ##############################' );
        console.log( e.message );
        res.status(500).json({ status: false });
    }
};