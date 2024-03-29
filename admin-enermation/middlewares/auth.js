const JWTService = require("../config/JWT");
const User = require('../models/user');
const UserDto = require('../config/Dto/user');

const auth = async (req, res, next) => {
    try {
        // 1. refresh, access token validation
        const { accessToken } = req.cookies;

        if (!accessToken) {
            const error = {
                status: 401,
                message: 'Unauthorized'
            }

            return next(error)
        }

        let _id;

        try {
            _id = JWTService.verifyAccessToken(accessToken)._id;
        }
        catch (error) {
            return next(error);
        }

        let user;

        try {
            user = await User.findOne({ _id: _id });
        }
        catch (error) {
            return next(error);
        }

        const userDto = new UserDto(user);

        req.user = userDto;

        next();
    }
    catch (error) {
        return next(error);
    }
}

module.exports = auth;