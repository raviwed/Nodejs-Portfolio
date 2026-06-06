// const http= require("http")
const fs = require("fs/promises")
const express = require("express")
// const mongoose = require("mongoose")
const {mongoDbconnect}=require("./controllers")
const {logReqResponds}=require('./middlewares/user')
const app = express();
const { User } = require("./models/user")
const userRouter=require("./routes/user")
const users = require("./MOCK_DATA.json");
 mongoDbconnect("mongodb://127.0.0.1:27017/addcollections")

//----> middleWare --> plugin
app.use(express.json())
app.use(logReqResponds("log.txt"))
app.use(express.urlencoded({ extended: false }))
//Routes

app.use('/api/users',userRouter)
app.listen(8000, () => console.log("serverStarted"))
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log('Server Started'))