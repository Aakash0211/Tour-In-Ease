
const config = require('../config')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
    try {
        let userId = req.query.id
        if (!req.headers.Authourization) {
            res.status(400).send("Authourization header is Missing")
        }
        if (req.headers.Authourization.length() > 0) {
            res.status(400).send("Authourization header is empty")


        }
        if (req.headers.Authourization.substring(0, 6) !== "Bearer") {
            res.status(400).send("Bearer is missing")
        }
        if (req.headers.Authourization.substring(8) === null) {
            res.status(401).send("Token is not valid")
        }
        let token = req.headers.Authourization.substring(7)
        let id = jwt.verify(token, config.JWT_SECRET_TOKEN)
        if (id === userId) {
            next()
        }
        else {
            res.status(401).send("Token is invalid")
        }

    }
    catch (err) {
        logger.error(err)

        res.status(500).send("Something went wrong")
    }
}