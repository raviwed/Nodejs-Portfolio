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
    res.send("Hello")
})



const postNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body

    console.log(name, email, phone, password)

    if (!name || !email || !phone || !password) {
        res.status(400)
        throw new Error("All feilds are mandatory !")
    }

    const existingEmail = await Contact.findOne({ email })
    if (existingEmail) {
        res.status(400);
        throw new Error("User already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    //  console.log(hashedPassword,"<---hashedpassword--->")
    const contacts = await Contact.create({
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
                    password: user._id
                }
            },
            "Raviteja@9908",
            { expiresIn: "15m" }
        )
        res.status(200).json({accessToken})
        res.send({ message: "this password is valid" })
    } else {
        res.status(401)
        throw new Error("Password Error")
        res.send({ message: "this is Invalid password" })
    }
})


const singleUserGet = asyncHandler(async (req, res) => {
    res.send("Hello singleData")
})

const updateSingleData = asyncHandler(async (req, res) => {
    res.send("Hello Put Data")
})

const deleteSingleData = asyncHandler(async (req, res) => {
    res.send("Hello Delete Data")
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
