const { add, sub } = require("./src/math")
const http = require("http")
const fs = require("fs")
console.log("Hello World", add(2, 5), sub(5, 4))

const myServer = http.createServer((req, res) => {
    console.log("New Request Rec.", req.headers);
    const log=`${Date.now()}:${req.url}New Request Received`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
          case "/":
           res.end("Home Page");
          break
          case "/about":
            res.end("this is About Page")
        case "/takeOut":
            res.end("this End is About page")
            default:
              res.end("404")    
        }
    })
    // res.end("Hello from Server");
})

myServer.listen(8000, () => console.log("Server Started!"));
