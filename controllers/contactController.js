const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModels");
// @description get All contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
    res.send("Hello")
})

const postNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body

    console.log(name, email, phone)

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All feilds are mandatory !")
    }

    const contacts = await Contact.create({
        name,
        email,
        phone,
    })

    res.status(201).json(contacts)
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

module.exports = {
    getContact,
    postNewContact,
    singleUserGet,
    updateSingleData,
    deleteSingleData,
    PatchDataRequest
}
