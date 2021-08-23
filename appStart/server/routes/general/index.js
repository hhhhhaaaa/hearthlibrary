const router = require("express").Router();
const allRoute = require("./all");
const homeRoute = require("./home");
const logoutRoute = require("./logout");

// Post routes
router.use("/", homeRoute);
router.use("/*", allRoute);
router.use("/logout", logoutRoute);

module.exports = router;
