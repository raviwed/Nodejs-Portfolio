const mongoose = require("mongoose");
const userScehma = new mongoose.Schema({
    id: {
        type: Number,
        requried: true,
    },
    first_name: {
        type: String,
        requried: true,
    },
    last_name: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    gender: {
        type: String,
        requried: true,
        unique: true,
    },
    ip_address: {
        type: Number,
        requried: true,
    }
}, { timestamps: true })
const User = mongoose.model("user", userScehma);
module.exports = { User };
