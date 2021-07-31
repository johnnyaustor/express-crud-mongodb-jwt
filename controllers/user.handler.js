const express = require("express")
const router = express.Router()
const User = require('../models/user.schema')


router.post("", async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber,
    })
    await user.save()
    res.send(toDto(user));
})

router.get("", async (req, res) => {
    const users = (await User.find().exec()).map(toDto);
    res.send(users);
})

router.get("/:id", async (req, res) => {
    try {
        const user = (await User.findById(req.params.id).exec());
        res.send(toDto(user));
    } catch {
        res.status(404)
        res.send({ error: "User doesn't exist!" })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body).exec()
        res.send(toDto(user))
    } catch {
        res.status(404)
        res.send({ error: "User doesn't exist!" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "User doesn't exist!" })
    }
})

function toDto(user) {
    return {
        id: user._id,
        userName: user.userName,
        accountNumber: user.accountNumber,
        emailAddress: user.emailAddress,
        identityNumber: user.identityNumber,
    }
}

module.exports = router