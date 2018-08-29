const express       = require( 'express' );
const router        = express.Router();

const auth          = require( '../middlewares/auth' );
const controller    = require( '../controllers/profile-controller' );

router.get( '/',    auth, ( req, res, next ) => res.redirect( '/profile/' + res.session.user.id ));
router.get( '/:id', auth, controller.show );
router.post( '/',   auth, controller.update );

module.exports = router;
