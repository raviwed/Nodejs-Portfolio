const { getUser } = require("../services/authUser");
const cookieparser = require("cookie-parser")
// const {}=require("/")



function checkForAuthentication(req,res,next){
    const authorizationHeaderValue=req.headers["authorization"]
    const token = userUid.split("Bearer")[1];
    if(!authorizationHeaderValue || !authorizationHeaderValue.startWith("")){
        return next()
    }
    const token=authorizationHeaderValue.split("Bearer")[1]
    getUser()
}
async function resistrictToLoggedinUserOnly(req, res, next) {
    const authUserId = req.cookies.uid;
    
    if (!authUserId) return res.redirect('/login')
    const user = getUser(userUid)
    req.user = user;
    next();
}
module.exports = { resistrictToLoggedinUserOnly }