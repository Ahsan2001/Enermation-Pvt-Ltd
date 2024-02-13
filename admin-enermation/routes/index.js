const express = require("express");
const router = express.Router();


// ------------------Authentication Module-----------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------

// import auth controller
const authController = require("../controllers/auth");

// register endpoint
router.post("/register", authController.register)

// login endpoint
router.post("/login", authController.login)

// otp endpoint
router.post("/forget", authController.forget)

// otp endpoint
router.post("/otp", authController.otp)

// reset password endpoint
router.post("/reset-password", authController.resetPassword)

// logout endpoint
router.get("/logout", authController.logout)
















module.exports = router;
