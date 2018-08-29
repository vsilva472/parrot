const express       = require( 'express' );
const router        = express.Router();

const noauth        = require( '../middlewares/noauth' );
const controller    = require( '../controllers/auth-controller' );

router.get( '/',    noauth, controller.passwordRecoverForm );
router.post( '/',   noauth, controller.passwordRecover );

module.exports = router;