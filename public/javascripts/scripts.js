(function ($) {
    $( 'form' ).on( 'submit', function (e) {
        const $this = $(this);
        
        if ($this.data('invalid') === true) {
            e.preventDefault();
        } else { return true; }
        
        const validator = new Validator();
        const $button = $this.find( '[type="submit"]' );
        
        // limpa os errors do form
        FormErrors.clear();

        // disabilita o form para previnir multiplos submmits
        $this.find( 'fieldset' ).attr( 'disabled', true );

        // muda o texto do botao
        if ( $button.data('loading') && $button.data('text') ) {
            $button.text($button.data('loading'));
        }

        // validar
        $( '[data-validator]' ).each(function (i, element) {
            var validation = $(element).data('validator');
            var selector = $(element).data('selector');

            if (validation === 'equals') validator[validation](element, $(selector).val());    
            else validator[validation](element);
        });

        // mostrar errors
        if ( validator.hasErrors() ) {
            FormErrors.show( validator.getErrors() );
            
            // volta com o texto do botao original
            if ( $button.data('loading') && $button.data('text') ) {
                $button.text($button.data('text'));
            }

            // habilita do form denovo
            $this.find( 'fieldset' ).attr( 'disabled', false );
            return false;
        }

        // precisa habilitar o form denovo para fazer o submit com os dados do form
        // caso contrario o form vai ser enviado em dados
        $this.find( 'fieldset' ).attr( 'disabled', false );
        $this.data('invalid', false);
        $this.submit();
        $this.find( 'fieldset' ).attr( 'disabled', true );
    });
} (jQuery));


(function ($) {
    $( '.user-menu-toggler' ).on('click', function (e) {
        $('.user-menu').toggle(200);
    });
} (jQuery));

(function ($) {
    $('#post-modal').on('hidden.bs.modal', function (e) {
        $(this).find('#post-field').val('').trigger('input'); // zerar o contador
        $( '#img-data' ).val('');
        $('.image-to-upload-wrapper').find('img').remove();
    });
} (jQuery) );

(function ($) {
    var MAX_CHARS = 240;
    var $charsLeftArea = $( '.chars-left' );

    $( document ).on('input', '#post-field', function (e) {
        var charsLeft = MAX_CHARS - $(this).val().length;
        
        if (charsLeft < 50 && charsLeft >= 0) {
            $charsLeftArea.addClass('text-warning').removeClass('text-danger');
        } 
        else if (charsLeft < 0) {
            $charsLeftArea.removeClass('text-warning').addClass('text-danger');
        }
        else {
            $charsLeftArea.removeClass('text-warning text-danger');
        }

        $charsLeftArea.text(charsLeft);
    });
} (jQuery));

(function ( $ ) {
    $( '#post-button' ).click(function (e) {
        var $this = $(this);
        var post = $.trim($( '#post-field' ).val());
        var image = $( '#img-data' ).val();
        
        if (!post.length) return;

        $this.text($this.data('loading')).attr('disabled', true);
        var data = {post: post, image: image};

        $.post('/feed', data, function (response) {
            $(document).trigger( 'onPostSuccess', response );
            $this.parents('#post-modal').modal('hide');
        }, 'json')
        
        .fail(function (e) {
            console.log(e);
        })
        
        .always(function () {
            $this.text($this.data('text')).attr('disabled', false);
        });
    });

    $( document ).on( 'onPostSuccess', function (e, data) {
        var $feed = $('.feed-component'), $template = $($('#post-item').html());

        $template.find('.user-avatar').attr('src', '/images/avatars/' + data.user.avatar);
        $template.find('.post-user-name').text(data.user.name);
        $template.find('.post-user-alias').text('@' + data.user.username);
        $template.find('.post-time').text('1 s');
        $template.find('.feed-post-content').html(data.post);       

        $feed.removeClass('d-none');
        $template.insertAfter('.list-group-header');
        $( '.welcome-component' ).remove();

    } );
} (jQuery));

(function ($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-navigate]').on('click', function (e) {
        e.preventDefault();
        window.location.href = $(this).data('navigate');
    });
} (jQuery));

(function ($) {
    if (  !window.URL || ! window.URL.createObjectURL) {
        $( '.uplaod-image-button-area' ).remove();
    }
   
    function convertImageToBase64 () {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this, 0,0);
        $( '#img-data' ).val(canvas.toDataURL());
        delete canvas;
      }

    function createImage (src) {              
        var img = new Image();
        img.src = URL.createObjectURL(src);
        img.onload = convertImageToBase64;
        img.onerror = console.log;
        return img;
    }

    $( document ).on('change',  "#post-image-input", function (e) {
        if (!this.files[0])  return;

        var image = this.files[0];

        if (image.type != 'image/png' && image.type != 'image/jpeg') {
            $('[data-toggle="tooltip"]').tooltip('hide');
            $( '.post-error-area' ).text('Somente JPEG ou PNG permitidos').show();
            return;
        }

        if (image.size > 800000) {
            $('[data-toggle="tooltip"]').tooltip('hide');
            $( '.post-error-area' ).text('a imagem deve ter até 800Kb').show();
            return;
        }

        $( '.post-error-area' ).hide();
        $('[data-toggle="tooltip"]').tooltip('hide');

        // storeImageBase64(image);
        var img = createImage(image);        
        img.classList = 'img-fluid';

        $(this).parents('.modal-footer').prev().find('.image-to-upload-wrapper').find('img').remove();
        $(this).parents('.modal-footer').prev().find('.image-to-upload-wrapper').append($(img).clone());
    } );

    $( document ).on( 'click', '.btn-remove-upload-image', function (e) {
        $(this).parent().find('img').remove();
        $( '#img-data' ).val('');
    });
} (jQuery));

(function ($) {
    $( '.btn-follow' ).on( 'click', function (e) {
        e.stopImmediatePropagation();
        var $this = $(this);
        console.log($this.data('user_id'));
        $this.attr('disabled', true);

        if ( $this.data('action') === 'follow' ) {
            $.post( '/user/follow', { user_id: $this.data('user_id') }, function (response) {}, 'json')
            .always(function() {
                $this.text($this.data('follow'));
                $this.data('action', 'unfollow');
                $this.removeClass( 'btn-outline-primary' ).addClass( 'btn-primary' );
            } );

            $this.removeAttr('disabled');
            return;
        } 

        $.post( '/user/unfollow', { user_id: $this.data('user_id') }, function (response) {}, 'json')
            .always(function() {
                $this.removeAttr('disabled');
                $this.text($this.data('unfollow'));
                $this.data('action', 'follow');
                $this.removeClass( 'btn-primary' ).addClass( 'btn-outline-primary' );
            });
    });
} (jQuery));

// profile update
( function ( $ ) {
    $( document).on( 'click', '#update-profile-button', function ( e ) {
        e.preventDefault();
        var $this = $( this ); 
        var $modalContent = $this.parents( '.modal-footer' ).prev();

        var profileData = {
            name: $modalContent.find('#txtname').val(),
            username: $modalContent.find('#txtusername').val(),
            bio: $modalContent.find('#txtbio').val(),
        };

        if ( $( '#input-profile-cover' ).val() ) profileData.cover = $( '#input-profile-cover' ).val();
        if ( $( '#input-profile-avatar' ).val() ) profileData.avatar = $( '#input-profile-avatar' ).val();

        $this.text($this.data('loading')).attr('disabled', true);
        $( '.alert-update-profile' ).remove();
        
        $.post( '/profile', profileData, function ( response ) {
            showAlert( 'success', 'Profile atualizado!' );
            window.location.reload();
        }, 'json' )
        .catch( function ( e, v, c ) {
            if ( e.status === 422 ) {
                showAlert( 'warning', 'Username já está em uso, escolha outro.' );
            }
            else {
                showAlert( 'danger', 'Erro ao atualizar o profile' );
            }
        } )
        .always( function () {
            $this.text($this.data('text')).removeAttr('disabled');
        } );
    });

    const showAlert = function ( type, msg ) {
        const $alertTmpl = $( '<div />' ).addClass( 'alert' );
        
        $alertTmpl.clone()
        .addClass( 'alert-update-profile alert-' + type )
        .css({marginTop: '1rem'})
        .text( msg )
        .insertBefore( '#lbl-profile-username' );
    };

    $( document ).on( 'image-size-error', function () {
        showAlert( 'warning', 'Imagem muito pesada. Selecione outra até 800Kb' );
    } );

    $( document ).on( 'image-mime-error', function () {
        showAlert( 'warning', 'Apenas imagens PNG ou JPG são permitidas' );
    } );

    $( document ).on( 'inputFile-chooseFile', function () {
        $( '#modal-edit-profile' ).find( '.alert' ).remove();
    });
} ( jQuery ) );


// input file upload
( function ( $ ) {
    $.fn.inputFile = function () {
        return this.each( function () {
            $( this ).on( 'change', function () {
                $( document ).trigger( 'inputFile-chooseFile' );
                console.log( this.files );
                if ( ! this.files.length ) return;
                
                const file = this.files[ 0 ];
                const imgContainer = $( this ).data( 'img-container' );
                const hiddenInput = $( this ).data( 'img-target' );
                const inputName = $( this ).attr( 'name' );

                
                if ( file.size > 800000 ) {
                    $( document ).trigger( 'image-size-error' );
                    return;
                }
                
                if ( file.type != 'image/png' && file.type != 'image/jpeg' ) {
                    $( document ).trigger( 'image-mime-error' );
                    return;
                }

                var img         = new Image();
                img.src         = URL.createObjectURL( file );
                img.onerror     = console.log;
                img.onload      = function () {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    
                    canvas.width    = this.width;
                    canvas.height   = this.height;
                    
                    ctx.drawImage(this, 0,0);
                    
                    var imgData = canvas.toDataURL();
                    
                    $( hiddenInput ).val( imgData );
                    $( imgContainer ).find( 'img' ).attr( 'src', imgData );
                    
                    delete canvas;
                };
            });
        });
    };

    $( '.file' ).inputFile();
} ( jQuery ) );