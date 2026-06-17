const asyncHandler=require("express-async-handler")
// @description get All contacts
//@route GET /api/contacts
//@access public

const getContact = async(req, res) => {
    res.send("Hello")
}

const postNewContact = async(req, res) => {
    const body = req.body
    
    console.log(body)
    res.send(body)
}

const singleUserGet = async(req, res) => {

    res.send("Hello singleData")
}

const updateSingleData = async(req, res) => {
    res.send("Hello Put Data")
}

const deleteSingleData = async(req, res) => {
    res.send("Hello Delete Data")
};

const PatchDataRequest =async (req, res) => {
    res.send("Hello Patch Data")
}

module.exports = {
    getContact,
    postNewContact,
    singleUserGet,
    updateSingleData,
    deleteSingleData,
    PatchDataRequest
}