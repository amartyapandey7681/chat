const path=require("path");
const http=require("http");
const publicPath=path.join(__dirname,"/../public");
const express= require("express");

const socket= require("socket.io");

const port= process.env.PORT || 3000;

var app=express();

app.use(express.static(publicPath));


app.listen(port,function(){

    console.log(`logging server at ${port}`);
});
