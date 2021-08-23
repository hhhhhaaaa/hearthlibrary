const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Second Test");
  if (req.session.user && req.cookies.user_sid) {
    console.log("Logged Out!");
    res.clearCookie("user_sid");
    res.redirect("/");
  }
  res.redirect("/login");
});

module.exports = router;
