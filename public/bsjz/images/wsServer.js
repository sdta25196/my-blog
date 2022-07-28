//server端

var ws = require ("nodejs-websocket");

var PORT = 3000;

//计数
var clientCount = 0;

var server = ws.createServer(function (conn){
    console.log('New connection');

    clientCount ++;
    conn.nikename = "user" + clientCount;
    var mes = {};
    mes.type="enter";
    mes.data=conn.nikename + "come in";
    broadcast(JSON.stringify(mes));

    conn.on("text",function (str){
        console.log("Received" + str);
        var mes = {};
        mes.type="message";
        mes.data=conn.nikename + 'says' + str;
        broadcast(JSON.stringify(mes));

    });
    conn.on("close",function (code,reason){
        console.log("connection closed");
        var mes = {};
        mes.type="leave";
        mes.data=conn.nikename + "leave";
        broadcast(JSON.stringify(mes));
    });
    conn.on('error',function (err){
        console.log("haddle err");
        console.log(err);
    })
}).listen(PORT);

console.log(PORT);

function broadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str);
    })
}
