const app= require("express")();
const http= require('http').Server(app);
const io = require("socket.io")(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/in.html");
})
io.on("connection",(socket)=>{
    console.log("a new user");
    socket.on("disconnect",()=>{
        console.log("user diss");
    })
})

http.listen(3000,()=>{
    console.log("listening at 3000");
})