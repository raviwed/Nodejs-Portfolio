const jwt = require("jsonwebtoken");
const secret = "Raviteja@99083"

function setUser(user) {
    return jwt.sign({
        _id: user.id,
        email: user.email,

    }, secret)
}

function getUserId(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        console.log(err)
    }

}
module.exports = { setUser, getUserId }