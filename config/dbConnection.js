const mongoose = require("mongoose");


async function mongoDbconnect(url) {
    mongoose.connect(url)
        .then((res) => console.log("mongooes Connected"))
        .catch((err) => console.log(err))
}

module.exports={mongoDbconnect}
