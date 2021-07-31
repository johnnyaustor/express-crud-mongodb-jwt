const express = require('express')
const mongoose = require("mongoose")
const constant = require('./constants')

mongoose
    .connect(constant.mongodbDatasource, { useNewUrlParser: true })
    .then(() => {
        const app = express()
        const routes = require("./controllers/routes")        
        const expressJwt = require('express-jwt');

        // middleware
        app.use(express.json())

        // jwt
        app.use(expressJwt({
            secret: constant.secretKey,
            algorithms: [constant.algorithm]
        }).unless({ path: ['/auth/register', '/auth/token'] }));

        app.use(function (err, req, res, next) {
            if (res.headersSent) {
                return next(err)
            }
            res.status(err.status)
            res.json({ error: err })
        })

        // routes
        app.use("", routes) // new




        app.listen(constant.port, () => {
            console.log(`Example app listening at http://localhost:${constant.port}`)
        })
    })


