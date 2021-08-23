const router = require("express").Router();

const sessionChecker = (req, res, next) => {
  console.log("Check");
  if (req.session.user && req.cookies_user_sid) {
    return res.redirect("/");
  }
  console.log(req.session);

  return next();
};

router.get("/", sessionChecker, (req, res) => {
  res.send("Hello");
});

module.exports = router;
