const express = require("express")
const { handleAuthUserSignUp,handleAuthLoginUser } = require('../controllers/authuser')
const router = express.Router();

router.post('/', handleAuthUserSignUp )
router.post('/login', handleAuthLoginUser)
module.exports=router