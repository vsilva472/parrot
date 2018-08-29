const express       = require('express');
const router        = express.Router();

const auth          = require('../middlewares/auth');
const controller    = require( '../controllers/notifications-controller' );

router.get( '/', auth, controller.index );

module.exports = router;