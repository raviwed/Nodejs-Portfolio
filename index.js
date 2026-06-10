const express = require("express");
const cors=require("cors")
const app = express();


app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello")
})


app.listen(8000,()=>console.log("Start Server"))


