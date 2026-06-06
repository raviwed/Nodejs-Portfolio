// const http= require("http")
const fs = require("fs/promises")
const express = require("express")
// const mongoose = require("mongoose")
const { mongoDbconnect } = require("./controllers")
const { logReqResponds } = require('./middlewares/user')
const app = express();
const { User } = require("./models/user")
// const cookieparser = require("cookie-parser")

//----->Routes Start----->
const userRouter = require("./routes/user")
const authUserRouter= require("./routes/authuser")
//----->Routes End ---->
const users = require("./MOCK_DATA.json");
mongoDbconnect("mongodb://127.0.0.1:27017/Authuser")

//----> middleWare Start --> plugin
app.use(express.json())
app.use(logReqResponds("log.txt"))
//-----> middleWare End ----> plugin
app.use(express.urlencoded({ extended: false }))
// app.use(cookieparser())
//<----- Routes Start ---->
app.use('/api/authUser', authUserRouter)
app.use('/api/users', userRouter)
// app.use(cookies)
//<----- Routes End ----->
app.listen(8000, () => console.log("serverStarted"))
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log('Server Started'))