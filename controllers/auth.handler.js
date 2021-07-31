const express = require("express")
const router = express.Router()
const constant = require('../constants')
const jwt = require('jsonwebtoken');


router.post('/token', (req, res) => {
    if (
        req.body.username !== 'admin'
        && req.body.password !== 'password'
    ) {
        res.json(
            { message: 'Username and password invalid' }
        ).status(400);
    }
    const token = jwt.sign(
        { name: req.body.username }, 
        constant.secretKey, 
        { expiresIn: constant.exp, algorithm: constant.algorithm }
    );
    res.json({ "access_token": token });
});

module.exports = router