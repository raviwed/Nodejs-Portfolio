const mongoose = require("mongoose");

const constantSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:"User"
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "please add the contact email"]
    },
    phone: {
        type: Number,
        required: [true, "Please add the phone number "]
    },
    password: {
        type: String,
        required: [true, "Please give  your password"]
    }

},
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Contact", constantSchema);
