var socket = io();

socket.on('connect', function(){
	console.log('conectado al servidor');
});
// los "on" son para escuchar
socket.on('disconnect', function(){
	console.log('Perdimos conexión con el servidor');
});

//los "emit" son para emitir información
socket.emit('enviarMensaje', {
	usuario: 'Javier',
	mensaje: 'Hola Mundo'
}, function(resp){
	console.log('respesta server:', resp);
})

// escuchar mensaje del servidor

socket.on('enviarMensaje', function(mensaje){

	console.log('Servidor: ', mensaje);

});