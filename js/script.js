$(document).ready(function(){

    $('#panel').load('./panels/panelInicio.html');

    $('#panelInicio').click(function(){
        $('#panel').load('./panels/panelInicio.html');
    });

	$('#panelServicios').click(function(){
		$('#panel').load('./panels/panelServicios.html');
	});
	
	$('#panelInstalaciones').click(function(){
		$('#panel').load('./panels/panelInstalaciones.html');
	});
	
	$('#panelReserva').click(function(){
		$('#panel').load('./panels/panelReserva.html');
	});
	
	$('#panelRegistro').click(function(){
		$('#panel').load('./panels/panelRegistro.html');
	});
	
	$('#panelLogin').click(function(){
		$('#panel').load('./panels/panelLogin.html');
	});
	
	$('#btnLogin').click(function(){
		let user = $('#usuarioInput');
		let psw = $('#claveInput');

		let check = comprobarLogin(user, psw);

		if(check){
            $.ajax({
                url: 'http://fenw.etsisi.upm.es:5555/users/login?username='+user.val()+'&password='+psw.val(),
                async: true,
                type: 'GET',
                success: function (data, texStatus, request) {
                    window.document.cookie = 'tokenAPI='+request.getResponseHeader('Authorization')+'; path=/ ;expires= 31 Dec 2050 23:59:59 GMT;';
                    window.document.location.href = 'index.html';
                },
                error: function (e) {
                    console.log('ERROR: ' + e);
                }
            });
		}


	});
	
	function comprobarRegistro() {
		var usuario = $('#usuarioInput').val();
		
    }

    function comprobarLogin(user, psw){
		let check = true;

        if(user.val() === ''){
            user.addClass('error');
            check = false;
        }else{
            user.removeClass('error');
        }

        if(psw.val() === ''){
            psw.addClass('error');
            check = false;
        }else{
            psw.removeClass('error');
        }

        return check;
	}
});