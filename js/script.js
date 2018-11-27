$(document).ready(function () {

    $('#panel').load('./panels/panelInicio.html');

    if (sessionStorage.getItem('tokenAPI') || sessionStorage.getItem('username')) {
        $('#panelLogin').addClass('invisible');
        $('#panelLogout').removeClass('invisible');
        $('#panelReserva').removeClass('invisible');
    }

    $('#logo').click(function () {
        $('#panel').load('./panels/panelInicio.html');
    });

    $('#panelInicio').click(function () {
        $('#panel').load('./panels/panelInicio.html');
    });

    $('#panelServicios').click(function () {
        $('#panel').load('./panels/panelServicios.html');
    });

    $('#panelInstalaciones').click(function () {
        $('#panel').load('./panels/panelInstalaciones.html');
    });

    $('#panelReserva').click(function () {
        $('#panel').load('./panels/panelEnConstruccion.html');
    });

    $('#panelRegistro').click(function () {
        $('#panel').load('./panels/panelRegistro.html');
    });

    $('#panelLogin').click(function () {
        $('#panel').load('./panels/panelLogin.html');
    });

    $(document).on('click', '#btnRegistro', function () {
        var error = comprobarRegistro();

        if(error){
            $('#info').removeClass('invisible');
        }
    });

    $(document).on('click', '#panelLogout', function () {
        sessionStorage.removeItem("tokenAPI");
        sessionStorage.clear();
        window.document.location.href = 'index.html';

        $('#panelLogout').addClass('invisible');
        $('#panelLogin').removeClass('invisible');
        $('#panelReserva').addClass('invisible');
    });

    $(document).on('click', '#btnLogin', function () {
        var user = $("#loginUsuario").val();
        var psw = $("#loginPsw").val();

        let check = comprobarLogin();

        if (check) {
            $.ajax({
                url: 'http://fenw.etsisi.upm.es:5555/users/login?username=' + user + '&password=' + psw,
                type: 'GET',
                port: 5555,
                success: function (data, textStatus, request) {
                    window.document.location.href = 'index.html';
                    sessionStorage.setItem('tokenAPI', request.getResponseHeader('Authorization'));
                    sessionStorage.setItem('username', user);
                },
                error: function (e) {
                    console.log("Error");
                    $('#info').removeClass(invisible);
                }
            });
        } else {
            $('#info').removeClass('invisible');
        }
    });

    function comprobarLogin() {
        let check = true;

        var user = $("#loginUsuario");
        var psw = $("#loginPsw");

        if (user.val() === '') {
            user.addClass('border-danger');
            check = false;
        } else {
            user.removeClass('border-danger');
        }

        if (psw.val() === '') {
            psw.addClass('border-danger');
            check = false;
        } else {
            psw.removeClass('border-danger');
        }

        return check;
    }

    function comprobarRegistro() {
        var error = false;

        var user = $('#registroUsuario');
        var email = $('#registroCorreo');
        var psw = $('#registroPsw');
        var psw2 = $('#registroPsw2');

        if(user.val() === ''){
            user.addClass('border-danger');
            error = true;
        } else {
            user.removeClass('border-danger');
        }

        if(email.val() === ''){
            email.addClass('border-danger');
            error = true;
        } else {
            email.removeClass('border-danger');
        }

        if(psw.val() === ''){
            psw.addClass('border-danger');
            error = true;
        } else {
            psw.removeClass('border-danger');
        }

        if(psw2.val() === ''){
            psw2.addClass('border-danger');
            error = true;
        } else {
            psw2.removeClass('border-danger');
        }

        return error;
    }
});