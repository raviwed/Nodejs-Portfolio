const http = require("http");

const path = require("path");
const express = require("express");
const app = express();
const { Server } = require("socket.io");
const cors = require("cors");
const server = http.createServer(app);
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })


// Middlewares
app.use(cors());
app.use(express.json());

// View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended:false}));

// Routes
app.get("/", (req, res) => {
    return res.render("homepage");
});

app.post('/upload',upload.single("profileimage"),(req,res)=>{
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/")
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})



// Server
server.listen(8000, () => {
    console.log("Server Started on Port 8000");
});