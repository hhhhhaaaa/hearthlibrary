const express = require("express");
const routes = require("./routes");
const InitiateMongoServer = require("./config/db");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const root = path.join(__dirname, "../client/config/dist/");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
app.use(cookieParser());

const auth = {
  key: "user_sid",
  secret: "Secret Unnel",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
};

app.use(session(auth));

app.use(express.static(path.join(__dirname)));
app.use(express.static(root));
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

app.use(routes);

InitiateMongoServer();

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
