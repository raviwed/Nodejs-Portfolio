const mongoose = require("mongoose");

const constantSchema = mongoose.Schema({
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

},
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Contact", constantSchema);
