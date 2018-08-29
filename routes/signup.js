var express         = require( 'express' );
var router          = express.Router();
var noauth          = require('../middlewares/noauth');

const controller    = require( '../controllers/auth-controller' );

router.get( '/',    noauth, controller.signupForm );
router.post( '/',   noauth, controller.signup );

module.exports = router;