const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

const User = require("../../models/user");

router.route("/").get(userController.findAll);

router.route("/signup").post((req, res) => {
  console.log("Post");

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  user.save((error, docs) => {
    if (error) {
      console.log(error);
      res.redirect("/signup");
    } else {
      console.log("Signed Up!");

      console.log(docs);
      req.session.user = docs;
      res.redirect("/");
    }
  });
});

router.route("/login").post(async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  console.log("Login");

  try {
    const user = await User.findOne({ username }).exec();

    if (!user) {
      res.redirect("login");
    }
    user.comparePassword(password, (error, match) => {
      if (!match) {
        res.redirect("/login");
      }
    });
    console.log("Logged In!");

    // eslint-disable-next-line require-atomic-updates
    req.session.user = user;
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
