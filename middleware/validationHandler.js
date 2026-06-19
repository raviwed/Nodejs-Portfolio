const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const ValidateToken = (async (req, res, next) => {
    let token;
    let authorHeader = req.headers.Authorization || req.headers.authorization
    if (authorHeader && authorHeader.startsWith("Bearer")) {
        token = authorHeader.split(" ")[1]
        jwt.verify(token, "Raviteja@9908", (err, decode) => {
            if (err) {
                res.status(401);
                throw new Error("user is not authorized")
            }
            // console.log(decode)
            req.user = decode.user
            next()
        })
        if(!token){
            res.status(401)
            throw new Error("User is not")
        }
    }

})

module.exports = { ValidateToken }