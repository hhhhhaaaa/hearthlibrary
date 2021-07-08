const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// router.get("/me", async (req, res) => {
//     try {
//         const user = await user.findById(req.use.id);
//         res.json(user);
//     } catch (e) {
//         res.send({ message: "Error  in fetching user"});
//     }
// });

module.exports = router;
