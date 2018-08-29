const express       = require( 'express' );
const router        = express.Router();

const auth          = require( '../middlewares/auth' );
const controller    = require( '../controllers/feed-controller' );

router.get( '/',    auth, controller.index );
router.post( '/',   auth, controller.create );

module.exports = router;