const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(cors());

// Serve up static assets (usually on heroku)

// eslint-disable-next-line global-require
const root = path.join(__dirname, "../client/config/dist/");

app.use(express.static(root));
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

// Login
app.use('/login', (req, res) => {
  res.send({
    token: "aTestToken"
  });
});

// Add routes, both API and view
app.use(routes);

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
