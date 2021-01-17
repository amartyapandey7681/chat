const server = require("http").createServer();
const io= require("socket.io")(server ,{

    path : '/socket.io',
    serverClient: true,
    pingInterval:10000,
    pingTimeout: 5000,
    cookie: false
});

io.of('/').emit("hi","everyone")

server.listen(3000);