const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");


require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(cors());

// Serve up static assets (usually on heroku)

// eslint-disable-next-line global-require
const root = require("path").join(__dirname, "../client/config/dist/");

app.use(express.static(root));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root });
});

app.use('/login', (req, res) => {
  res.send({ token: "testToken" });
});

// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hearth", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
