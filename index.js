const http=require('http')
const express = require('express');
const { Server } = require("socket.io");
const app = express();
const PORT=8000;
const path=require("path");
const server=http.createServer(app)
 const io= new Server(server)

 io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit("message",message)
        //   console.log(socket,message,"<---socket--->")
    })
 })
app.use(express.static(path.resolve("./public")))

app.get("/",(req,res)=>{
    res.sendFile("./public/index.html")
})
server.listen(PORT,()=>console.log("ServerStarted"))