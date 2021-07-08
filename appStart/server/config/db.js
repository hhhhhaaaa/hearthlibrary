const mongoose = require("mongoose");

const InitiateMongoServer = () => {
  try {
    return mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/hearthdb",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = InitiateMongoServer;
