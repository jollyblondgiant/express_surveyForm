var express, app, server, io;
express = require('express');
app = express();
server = require('http').createServer(app);
io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client){
	console.log("CLIENT CONNECTED")

	client.on('join', function(data){
		console.log(data)
		
	})
	client.on('messages', function(data){
		client.emit('broad', data);
		client.broadcast.emit('broad',data);
		console.log(data)
	})
})



server.listen(1337);
