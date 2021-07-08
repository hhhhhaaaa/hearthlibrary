const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/userdb");
const user = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


require("dotenv").config();

InitiateMongoServer();

// Define middleware here
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(cors());


// Serve up static assets (usually on heroku)

// eslint-disable-next-line global-require
const root = path.join(__dirname, "../client/config/dist/");

app.use(express.static(root));

app.use('/login', (req, res) => {
  res.send({ token: "testToken" });
});

 app.use("/user", user);

// Add routes, both API and view
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

// const url = 'mongodb://localhost:27017/';
// const dbname = "userdb";
// mongoCLient.connect(url, (err,client)=> {
//   if(!err) { 
//     console.log("succesful");
//   } else
//     console.log("Couldnt connect");
// })

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearthdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
