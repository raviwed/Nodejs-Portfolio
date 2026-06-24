const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModels");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// @description get All contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})



const postNewContact = asyncHandler(async (req, res) => {
    const { user_id,name, email, phone, password } = req.body

    if (!user_id||!name || !email || !phone || !password) {
        res.status(400)
        throw new Error("All feilds are mandatory !")
    }

    const existingEmail = await Contact.findOne({ email })
    if (existingEmail) {
        res.status(400);
        throw new Error("User already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 8)
    //  console.log(hashedPassword,"<---hashedpassword--->")
    const contacts = await Contact.create({
        user_id,
        name,
        email,
        phone,
        password: hashedPassword
    })

    res.status(201).json(contacts)
})



const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("Please provide and email & password");
    }
    const user = await Contact.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    name: user.name,
                    email: user.email,
                    id: user._id
                }
            },
            "Raviteja@9908",
            { expiresIn: "15m" }
        )
        res.status(200).json({ accessToken })
    } else {
        res.status(401)
        throw new Error("Password Error")
    }
})


const singleUserGet = asyncHandler(async (req, res) => {
    let userId = req.params.id;
    const getSingleData = await Contact.findById(userId)
     if(!getSingleData){
      return  res.status(400).json("Invalid Id you have given ")
     }
   return res. status(200).send(getSingleData)
})

const updateSingleData = asyncHandler(async (req, res) => {
    const userId=req.params.id;
    const body=req.body;
    const updatePostReq = await Contact.findByIdAndUpdate(userId, body);
    if(!updatePostReq){
        res.status(400).json("Some  thing When wrong")
    }
    res.status(202).send("Hello Put Data")
})

const deleteSingleData = asyncHandler(async (req, res) => {
    let userId = req.params.id;
    const deleteUser = await Contact.findByIdAndDelete(userId);
    if (deleteUser) {
        res.status(400).json("This Id is In valid")
        throw new Error("This id Don't extist in")
    }
    res.status(202).json("SucessFully Deleted")


});

const PatchDataRequest = asyncHandler(async (req, res) => {
    res.send("Hello Patch Data")
})

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})


module.exports = {
    getContact,
    postNewContact,
    singleUserGet,
    updateSingleData,
    deleteSingleData,
    PatchDataRequest,
    loginUser,
    currentUser
}
