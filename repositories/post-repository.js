'user strict';

const models = require('../models');
const postService = require('../services/post-service');

exports.create = ( user_id, body, image ) => {
    const parsedBody = postService.parseBody( body );
    const content = image ? parsedBody + `<br /><img src="/images/posts/${image}" class="img-fluid rounded">` : parsedBody;

    const post = models.Post.create({ 
        user_id: user_id, 
        body: content
    });

    return post;
};

exports.getPostsByUserId = async ( user_id, limit = 15 ) => {
    const posts = await models.sequelize.query(
        "SELECT u.id as owner_id, u.avatar as owner_avatar, u.name as owner_name, u.username as owner_alias, u.following_count as owner_following, u.followers_count as owner_followers, p.id, p.body, p.createdAt FROM users u INNER JOIN posts p on p.user_id = ? and u.id = ? order by p.id DESC LIMIT ?",
        { 
           replacements: [ user_id, user_id, limit ],
           type: models.sequelize.QueryTypes.SELECT
        });    

    return posts;
};