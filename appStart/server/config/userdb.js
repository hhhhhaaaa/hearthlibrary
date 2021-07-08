const mongoose = require("mongoose");
const MONGOURI = process.env.MONGODB_URI || "mongodb://localhost/hearthdb";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Hey your conneceted brah");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;
