const io = require('socket.io-client');
const socket = io.connect('http://192.168.1.124:5678/temp');

socket.on('connecton', () => {
	console.log('connected');
});

socket.on('temperature', (temperatureData) => {
	console.log(temperatureData);
});
