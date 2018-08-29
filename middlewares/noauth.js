function noauth (req, res, next) {
    if (req.session && req.session.user) {
        return res.redirect('/feed');
    }
    return next();
}

module.exports = noauth;