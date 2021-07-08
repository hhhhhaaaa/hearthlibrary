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
app.use(
  session({
    key: "user_sid",
    secret: "Secret Unnel",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

app.use(express.static(path.join(__dirname)));
app.use(express.static(root));
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies_user_sid) {
    return res.redirect("/");
  }
  console.log(req.session);

  return next();
};

app.use(routes);

app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
});

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

InitiateMongoServer();

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
