'use strict';

const models = require('../models');

exports.incrementPostsCount = async ( user_id ) => {
    const user = await models.User.update(
            { posts_count: models.Sequelize.literal( 'posts_count + 1' ) },
            { where: { id: user_id } }
        );

    return user;
};

exports.getFriendshipSuggestions = async ( user_id, suggestionsCount ) => {
    const suggestions = await models.sequelize.query(
        "SELECT a.id, a.name, a.username, a.avatar, a.bio, a.following_count, a.followers_count FROM Users a LEFT JOIN Followers b ON a.id = b.followed_user_id WHERE b.followed_user_id IS NULL AND a.id != ? ORDER BY RAND() LIMIT ?",
        { 
            replacements: [ user_id, suggestionsCount ],
            type: models.sequelize.QueryTypes.SELECT
        }
    );

    return suggestions;
};

exports.getFeedData = async ( user_id ) => {
    const feed = await models.sequelize.query(
        "SELECT u.id, u.avatar as owner_avatar, u.name as owner_name, u.username as owner_alias, u.following_count as owner_following, u.followers_count as owner_followers, p.body, p.createdAt FROM Followers as f, Posts as p, Users as u WHERE p.user_id = f.followed_user_id AND f.follower_user_id = ? AND u.id = f.followed_user_id ORDER BY p.createdAt DESC",
        { 
           replacements: [ user_id ],
           type: models.sequelize.QueryTypes.SELECT
        }
    );

    return feed;
};

exports.oneBy = async ( key, value ) => {
    const res = await models.User.findOne({
        where: { [key]: value }
    });

    return res;
}

exports.isUserFollowedByMe = async ( my_id, followed_id ) => {
    const res = await models.Follower.find({
        where: {
            follower_user_id: my_id,
            followed_user_id: followed_id
        }
    });

    return !!res;
};

exports.create = async ( user_data ) => {
    if ( user_data.id ) delete user_data.id;
    const user = await models.User.create( user_data );
    return user;
}

exports.update = async ( user_id, user_data ) => {
    if ( user_data.id ) delete user_data.id;
    const user = await models.User.update( user_data, { where: { id: user_id } } );
    return user;
}

exports.follow = async ( follower_user_id, followed_user_id ) => {
    await models.Follower.create({
        follower_user_id : follower_user_id,
        followed_user_id : parseInt( followed_user_id )
    });
}

exports.unfollow = async ( follower_user_id, followed_user_id ) => {
    await models.Follower.destroy({
        where: {
            follower_user_id : follower_user_id,
            followed_user_id : parseInt( followed_user_id )
        }
    });
}

exports.incrementFollowedCount = async ( user_id ) => {
    await models.User.update(
        { following_count: models.Sequelize.literal('following_count + 1') },
        { where: { id: user_id } }
    );
};

exports.incrementFollowingCount = async ( user_id ) => {
    await models.User.update(
        { followers_count: models.Sequelize.literal('followers_count + 1') },
        { where: { id: user_id } }
    );
};

exports.decrementFollowedCount = async ( user_id ) => {
    await models.User.update(
        { following_count: models.Sequelize.literal('following_count - 1') },
        { where: { id: user_id } }
    );
};

exports.decrementFollowingCount = async ( user_id ) => {
    await models.User.update(
        { followers_count: models.Sequelize.literal('followers_count - 1') },
        { where: { id: user_id } }
    );
};