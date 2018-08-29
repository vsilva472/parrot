const express       = require( 'express' );
const router        = express.Router();

const auth          = require('../middlewares/auth');
const controller    = require('../controllers/who-to-follow-controller');

router.get( '/', auth, controller.index );

module.exports = router;