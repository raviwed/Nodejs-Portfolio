// const http= require("http")
const fs = require("fs/promises")
const express = require("express")
const app = express();
const users = require("./MOCK_DATA.json")
//----> middleWare --> plugin
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    return res.send("Hello From Home Page")
})
app.get("/about", (req, res) => {
    return res.send("Hello From about Page" + " hey " + req.query.name + " you are age " + req.query.age)
})
app.get("/setup", (req, res) => {
    return res.json(users)
})

app.get("/setup/:userId", (req, res) => {
    const data = Number(req.params.userId)
    const value = users.filter((el) => el.id === data)
    return res.json(value)
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: 'success' });
    })
    return res.json({ status: "pending" });
})

app.patch("/api/users/:id", (req, res) => {

    return res.json({ status: "pending" });
})

app.delete("/api/users/:id", (req, res) => {
    const query = Number(req.params.id)
    const userExists = users.some((user) => user.id === query);
    
    if (!userExists) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }
    const updated = users.filter((el) => el.id !== query)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated), (err, data) => {
        return res.json({ status: 'success' });
    })
    return res.json({ status: "pending" });
})


app.listen(8000, () => console.log("serverStarted"))
// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log('Server Started'))