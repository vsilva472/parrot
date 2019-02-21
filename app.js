var path                = require('path');
var logger              = require('morgan');
var session             = require('express-session');
var express             = require('express');
var createError         = require('http-errors');
var cookieParser        = require('cookie-parser');
var expressValidator    = require('express-validator');

var feedRouter              = require('./routes/feed');
var indexRouter             = require('./routes/index');
var usersRouter             = require('./routes/users');
var signupRouter            = require('./routes/signup');
var profileRouter           = require('./routes/profile');
var whoToFollowRouter       = require('./routes/who-to-follow');
var notificationsRouter     = require('./routes/notifications');
var passwordRecoverRouter   = require('./routes/password-recover');

var app = express();

// view engine setup
app.set( 'views',        path.join( __dirname, 'views' ) );
app.set( 'view engine',  'pug' );

app.use( logger( 'dev' ) );
app.use( express.json( { limit: '2mb' } ) );
app.use( express.urlencoded( {  extended: true, limit: '2mb' } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( expressValidator() );

app.use( session({
  secret            : 'pombasocialnetwork',
  resave            : false,
  saveUninitialized : false,
  // cookie         : { secure: true }
}));

app.use('/',                  indexRouter );
app.use('/feed',              feedRouter );
app.use('/user',              usersRouter );
app.use('/signup',            signupRouter );
app.use('/profile',           profileRouter );
app.use('/who-to-follow',     whoToFollowRouter );
app.use('/notifications',     notificationsRouter );
app.use('/password-recover',  passwordRecoverRouter );

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
  next( createError( 404 ) );
});

// error handler
app.use( function( err, req, res, next ) {
  // set locals, only providing error in development
  res.locals.message  = err.message;
  res.locals.error    = req.app.get('env') === 'development' ? err : {};

  console.log(err);

  // render the error page
  let errStatus = err.status || 500; 
  res.status( errStatus );
  res.render( 'error' + errStatus );
});

app.locals.moment = require('moment');
app.locals.moment.defineLocale('pt-br-vinny', {
  parentLocale: 'pt-br',
  relativeTime : {
    future : 'em%s',
    past : '%s',
    s : '1s',
    ss : '%ds',
    m : '1m',
    mm : '%dmin',
    h : '1h',
    hh : '%dh',
    d : '1 dia',
    dd : '%d dias',
    M : 'um mês',
    MM : '%d meses',
    y : 'um ano',
    yy : '%d anos'
  },
  /* */
});

app.locals.moment.locale('pt-br-vinny');
module.exports = app;
