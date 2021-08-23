const router = require("express").Router();
const path = require("path");
const root = path.join(__dirname, "../../client/config/dist/");

router.get("/", (req, res) => {
  console.log(req.session);
  console.log("Slash All");
  res.sendFile("index.html", { root });
});

module.exports = router;
