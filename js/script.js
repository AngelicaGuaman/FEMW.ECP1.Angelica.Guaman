$(document).ready(function(){
	
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
	
	
	$('#btnLogin').on("click", function(){
		var user = $('#login_usuario').val();
		var psw = $('#login_psw').val();
	});
});