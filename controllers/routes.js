const express = require("express")
const router = express.Router()
const userHandler = require("./user.handler");
const authHandler = require("./auth.handler");


router.get('/', (req, res) => {
    res.send('Hello this is mini project jenius!\ngenerate by agus triantoro')
})

router.use("/auth", authHandler);
router.use("/users", userHandler);

module.exports = router