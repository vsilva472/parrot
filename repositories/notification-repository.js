'use strict';

const models = require( '../models' );

exports.create = async ( from_user_id, to_user_id, notification_text ) => {
    await models.Notification.create({
        user_id: parseInt( to_user_id ),
        from_user_id: from_user_id,
        notification: notification_text
    });
}

exports.getByUserId = async ( user_id, count = 15 ) => {
    const notifications = await models.sequelize.query(
        "SELECT a.id as user_id, a.name as user_name, a.username as user_alias, a.avatar as user_avatar, a.following_count as user_following_count, a.followers_count as user_followers_count, b.notification as body, b.createdAt FROM Users a, Notifications b WHERE a.id = b.from_user_id and b.user_id = ? LIMIT ?",
        { 
           replacements: [ user_id, count ],
           type: models.sequelize.QueryTypes.SELECT
        }
    );

    return notifications;
};