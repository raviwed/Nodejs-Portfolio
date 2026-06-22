const mongoose = require("mongoose");


async function mongoDbconnect(url) {
    try {
        await mongoose.connect(url, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("mongoose Connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports={mongoDbconnect}
