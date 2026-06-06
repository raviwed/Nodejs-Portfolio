const mongoose = require("mongoose");
const authUserSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        requried: true,
        unique: true,
    }
}, { timestamps: true })

const authUser = mongoose.model("authUser", authUserSchema)
module.exports = {authUser};