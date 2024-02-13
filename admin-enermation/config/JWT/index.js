const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRECT } = require("../index");


class JWTService {

    static signAccessToken(payload, expiryTime) {
        return jwt.sign(payload, ACCESS_TOKEN_SECRECT, { expiresIn: expiryTime })
    }

    static verifyAccessToken(token) {
        return jwt.verify(token, ACCESS_TOKEN_SECRECT)
    }


}


module.exports = JWTService;