var PORT = 8008; //Порт, который будет слушать соккет

var io = require('socket.io').listen(server);
server.listen(PORT);

io.sockets.on('connection', function (client) { //Когда соединяется новый клиент
console.info("New Client Connected"); //Выводим в консоль сервера сообщение о том, что клиент подключился
client.on('message', function (message) { //Когда клиент отправляет сообщение
client.emit('message', message); //Отправляем сообщение самому клиенту
client.broadcast.emit('message', message); //Всем подключенным клиентам
});
});