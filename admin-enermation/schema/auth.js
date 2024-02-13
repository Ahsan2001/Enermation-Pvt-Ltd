const Joi = require("joi");

const userRegisterSchema = Joi.object({
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    phone: Joi.string().min(9).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
    confirmPassword: Joi.ref("password"),
});



const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
});

const forgetSchema = Joi.object({
    email: Joi.string().email().required(),
});


module.exports = { userRegisterSchema, userLoginSchema, forgetSchema};