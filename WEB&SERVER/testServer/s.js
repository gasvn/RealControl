/**
 * Created by Conan on 2017/4/22.
 */
const WebSocket = require('ws');
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 3000 });
    console.log('start');
wss.on('connection', function (ws) {
    console.log('client connected');
    console.log(' has connected to the server');
    // Broadcast to all.

    ws.on('message', function (message) {
        console.log(message);

       wss.broadcast = function broadcast(data) {
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(data);
                    }
                });
            };

        if(message[1]===48){
            var command = {};
           // command.action =3;
            command.action =message[2];
            wss.broadcast(JSON.stringify(command));
        }else{
             wss.broadcast(message);

             console.log("FDSFDSFDSFSD");
        }
  

       /* if(message[0]===48){//代表0
        	console.log("hello");
        }*/
     /* var data = JSON.parse(message);
        if(data.mode===1){
        	var command = {};
        	command.action = data.action;
            wss.broadcast = function broadcast(data) {
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(data);
                    }
                });
            };
            wss.broadcast(JSON.stringify(command));
       }*/
    });
});


