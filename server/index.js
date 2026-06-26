const http=require("http")
const express=require("express");
const app=express();
const {Server}=require("socket.io");
const cors=require("cors");
const server=http.createServer(app);
const clientOrigin="http://localhost:5173";

const io=new Server(server,{
    cors:{
        origin:clientOrigin,
        methods:["GET","POST"],
        credentials:true,
    }
});

app.use(cors({
        origin:clientOrigin,
        methods:["GET","POST"],
        credentials:true,
    }));

io.on("connection",(socket)=>{
  console.log("User connection")
  console.log("Id",socket.id)
  socket.emit("welcome",`welcome to the server`)
  socket.broadcast.emit("welcome",`Welcome to sever,${socket.id}`)
  socket.on("message",({room,message})=>{
    console.log("message Value",{room,message});
    socket.broadcast.emit("receive-message",message)
    // io.emit("message",data);
  })
  socket.on("disconnect",(data)=>{
    console.log(data)
    io.emit("receive-message",data);
  })
  socket.on("receive-message",(data)=>{
    console.log("receive-message",data)
  })
  return ()=>{
   socket.disconnect();
  }
})

// app.get("/",(req,res)=>{
//     res.send("value added");
// })

server.listen(8000,()=>console.log("Server Started"));
