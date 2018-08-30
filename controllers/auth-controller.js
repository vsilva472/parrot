'use strict';

const userRepository    = require( '../repositories/user-repository' );
const authService       = require( '../services/auth-service' );

exports.loginForm = ( req, res, next ) => {
    const redir = (req.query.redirect && req.query.redirect.length) 
        ? decodeURIComponent(req.query.redirect) 
        : '';

    res.render( 'login', { 
        title: 'Entrar', 
        data: { email: '', password: ''  }, 
        bodyClass: 'auth', 
        redir: redir 
    });
};

exports.login = async ( req, res, next ) => {
    const credentials = Object.assign({ email: '', password: '' }, req.body);

    try {
        req.assert( 'email', 'Email inválido' ).isEmail();
        req.assert( 'password', 'A senha deve ter entre 6 e 100 caracteres.' ).notEmpty().len( 6,100 );
          
        if ( req.validationErrors() ) {
            res.render('login', authService.formatLoginError( 'warning', credentials, errors[0].msg ) );
            return;
        }
    
        const user = await userRepository.oneBy( 'email', credentials.email );
      
        if ( !user || !user.hasValidPassword( credentials.password ) ) {
            res.render('login', authService.formatLoginError( 'warning', credentials, 'Email e/ou senha inválidos.' ) );
            return;
        }
    
        authService.createSessionFor( user, req );
        
        if ( req.body.redir.length ) res.redirect(req.body.redir);
        else  res.redirect('/feed');
    } 
    catch ( e ) {
      console.log('ERROR LOGIN #############################');
      console.log( e.message );
      res.render( 'login', authService.formatLoginError( 'danger', credentials, 'Erro ao efetuar login. Tente novamente mais tarde.' ));
    }
}

exports.logout = ( req, res, next ) => {
    req.session.destroy();
    res.redirect('/');
}

exports.signupForm = ( req, res, next ) => {
    res.render('signup', { title: 'Cadastre-se', bodyClass: 'auth', data: { email: '', password: '', password_conf: '', name: '' } });
};

exports.signup = async ( req, res, next ) => {
    const data = Object.assign({ email: '', password: '', password_conf: '', name: '' }, req.body);
    try {
        req.assert( 'name', 'Nome inválido' ).isLength({min: 3});
        req.assert( 'email', 'Email inválido' ).isEmail();
        req.assert( 'password', 'A senha deve ter entre 6 e 100 caracteres.' ).notEmpty().len(6,100);
        req.assert( 'password_conf', 'As senhas não coincidem.' ).equals(req.body.password);
    
        const errors = req.validationErrors();
    
        if ( errors ) {
            res.render('signup', authService.formatSignUpError( 'warning', data, errors[0].msg ) );
            return;
        }
        
        const user = await userRepository.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            username: 'user' + new Date().getTime()
        });

        authService.createSessionFor( user, req );
        res.redirect('/feed');
    }
    catch ( e ) {
        if ( e.errors ) { // erro de validacao unica do email pelo sequelizes
            res.render('signup', authService.formatSignUpError( 'danger', data, e.errors[0].message ));
        }
        else {
            console.log( 'ERROR SIGNUP #############' );
            console.log( e.message );
            res.render('signup', authService.formatSignUpError( 'danger', data, 'Erro ao realizar cadastro.' ));
        }
    }
};

exports.passwordRecoverForm = ( req, res, next ) => {
    res.render( 'password-recover', { title: 'Recuperar Senha', bodyClass: 'auth' } );
};

exports.passwordRecover = async (req, res, next) => {
    const data = { email: req.body.email };
    
    try {
        req.assert('email', 'Endereço de email inválido').isEmail();
        
        if ( req.validationErrors() ) {
            res.render( 'password-recover', authService.formatPasswordRecoverData('warning', data, error[0].msg ) );
            return;
        }
    
        const user = await userRepository.oneBy( 'email', data.email );
        // TODO enviar email para usuario
    
        res.render( 'password-recover', authService.formatPasswordRecoverData( 'success',
            { email: '' }, 
            'Se existe este email, enviamos uma mensagem com instruções para recuperar a senha.' 
        ));
    }
    catch ( e ) {
        console.log( 'ERRO PASSWORD RECOVER ################################' );
        console.log( e.message );

        res.render( 'password-recover', authService.formatPasswordRecoverData( 'danger', data, 
            'Erro ao recuperar a senha. Tente mais tarde.'
        ));
    }
};