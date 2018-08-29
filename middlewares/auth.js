function auth (req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    return res.redirect('/?redirect=' + encodeURIComponent(req.originalUrl) );
}

module.exports = auth;