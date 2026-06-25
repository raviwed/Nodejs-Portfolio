const http=require("http")
const express=require("express");
const app=express();
const {Server}=require("socket.io")
const server=http.createServer(app);
// const io=new Server(app);

server.listen(8000,()=>console.log("Server Started "))