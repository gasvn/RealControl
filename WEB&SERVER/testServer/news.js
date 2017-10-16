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
                        console.log("send data");
                    }
                });
            };
        var data = JSON.parse(message);
        if(data.type===0){
            var command = {};
           // command.action =3;
            command.action =data.fun;
            console.log("DataType:"+data.fun);
            wss.broadcast(JSON.stringify(command));
        }else{
             wss.broadcast(message);
        }
    });
});


