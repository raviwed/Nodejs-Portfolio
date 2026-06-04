// const http= require("http")
const fs = require("fs/promises")
const express = require("express")
const mongoose = require("mongoose")
const app = express();
const users = require("./MOCK_DATA.json");
//----> middleWare --> plugin
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/addcollections")
.then((res) => console.log("mongooes Connected"))
.catch((err) => console.log(err))
const userScehma = new mongoose.Schema({
    id: {
        type: Number,
        requried: true,
    },
    first_name: {
        type: String,
        requried: true,
    },
    last_name: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    gender: {
        type: String,
        requried: true,
        unique: true,
    },
    ip_address: {
        type: Number,
        requried: true,
    }
}, { timestamps: true })
const User = mongoose.model("user", userScehma);

app.use(express.urlencoded({ extended: false }))
app.get("/", async(req, res) => {
    const allDbUser= await User.find({})
    return res.send(`home Page getData ${allDbUser}`)
})
app.get("/about", (req, res) => {
    return res.send("Hello From about Page" + " hey " + req.query.name + " you are age " + req.query.age)
})
app.get("/setup", (req, res) => {
    return res.json(users)
})

app.get("/setup/:userId", (req, res) => {
    const data = Number(req.params.userId)
    const value = User.findById(data)
    if(!value) return res.status(404).json({error:"user not found"})
    return res.json(value)
})

app.post("/api/users", async (req, res) => {
    const body = req.body;
    users.push({ ...body })
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({ status: 'success' });
    // })

    const result = await User.create({
        id: body.id,
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        ip_address: body.ip_address,
    })
    console.log("result", result)
    return res.status(200).json({ msg: "success" });
})

app.patch("/api/users/:id", async(req, res) => {
    const query = req.params.id
    const updatedFeilds = req.body;
    const userIndex = await User.findByIdAndUpdate(query,updatedFeilds)
    return res.json({ status: "pending" });
})

app.put("/api/userput/:id", async(req, res) => {
    const query = Number(req.params.id)
    const updatedFeilds = req.body;
    const userIndex=await User.findOneAndUpdate(query,updatedFeilds)

    return res.json({ status: "pending" });
})
app.delete("/api/users/:id", async (req, res) => {
    const query = Number(req.params.id)

    const update=await User.findByIdAndDelete(query)

    return res.json({ status: "pending" });
})


app.listen(8000, () => console.log("serverStarted"))
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log('Server Started'))