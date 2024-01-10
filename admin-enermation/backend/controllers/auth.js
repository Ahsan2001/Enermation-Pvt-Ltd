const UserDto = require("../config/Dto/user");
const JWTService = require("../config/JWT");
const User = require("../models/user");
const {userRegisterSchema,userLoginSchema, forgetSchema} = require("../schema/auth");
const bcrypt = require("bcrypt");


const authController = {

    async register(req, res, next) {

        const { error } = userRegisterSchema.validate(req.body);
        if (error) {
            return next(error)
        }

        const { firstName, lastName, phone, email, password } = req.body;


        try {
            const emailInUse = await User.exists({ email });
            if (emailInUse) {
                const error = {
                    status: 409,
                    message: "Email Already Register, Use Another Email Address"
                }
                return next(error)
            }
        } catch (error) {
            return next(error)
        }

        const hashPassword = await bcrypt.hash(password, 10)

        let user,accessToken;

        try {
            const userToRegister = new User({
                firstName,
                lastName,
                phone,
                email,
                password: hashPassword,
            })

            user = await userToRegister.save();
            accessToken = JWTService.signAccessToken({ _id: user._id }, "60m");

        } catch (error) {
            return next(error);
        }

        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        });

        const userDTO = new UserDto(user)

        return res.status(201).json({ user: userDTO, auth: true });

    },

    async login(req, res, next) {

        const { error } = userLoginSchema.validate(req.body);
     
        if (error) {
            return next(error)
        }

        const { email, password } = req.body;


        let user;
     
        try {
            user = await User.findOne({ email })

            if (!user) {
                const error = {
                    status: 401,
                    message: "Invalid Email"
                }
                return next(error)
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                const error = {
                    status: 401,
                    message: "Invalid Password"
                }
                return next(error)
            }

        } catch (error) {
            return next(error)
        }

        const accessToken = JWTService.signAccessToken({ _id: user._id }, "60m");

        // send tokens in cookie
        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
        });

        const userDTO = new UserDto(user)
        return res.status(200).json({ user: userDTO, auth: true })


    },

    async forget(req, res) {


        const { error } = forgetSchema.validate(req.body);
     
        if (error) {
            return next(error)
        }

        const { email } = req.body;

        let user;
     
        try {
            user = await User.findOne({ email })

            if (!user) {
                const error = {
                    status: 401,
                    message: "Invalid Email"
                }
                return next(error)
            }
        }
        catch (error) {
            return next(error)
        }

    },

    async otp(req, res) {
        res.send('hello world form otp controller')
    },

    async resetPassword(req, res) {
        res.send('hello world form resetPassword controller')
    },

    async logout(req, res) {

        const { accessToken } = req.cookies;
        console.log("before", accessToken);

        res.clearCookie("accessToken");
        console.log("after", accessToken);

        res.status(200).json({ user: null, auth: false });

    }



}

module.exports = authController;