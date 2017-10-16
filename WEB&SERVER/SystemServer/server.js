/**
 * Created by Conan on 2017/4/22.
 */
var DeviceType=new Array();
DeviceType["controler"]=0;
DeviceType["pc"]=1;
DeviceType["mobile"]=2;
DeviceType["revealjs"]=3;
DeviceType["controler"]=4;

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
        var data = JSON.parse(message);
        if (data.sender === DeviceType["controler"]) {
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
        if(data.sender==DeviceType["pc"]){
        	var command = {};
        }




        }
    });
});


