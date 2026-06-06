const { getUser } = require("../services/authUser");
const cookieparser = require("cookie-parser")
// const {}=require("/")
async function resistrictToLoggedinUserOnly(req, res, next) {
    const authUserId = req.cookies.uid;
    if (!authUserId) return res.redirect('/login')
    const user = getUser(userUid)
    req.user = user;
    next();
}
module.exports = { resistrictToLoggedinUserOnly }