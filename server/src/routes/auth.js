const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/AuthController");
const middlewareController = require("../app/controllers/MiddlewareController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", middlewareController.verifyToken, authController.logout);
router.post("/refresh_token", authController.refreshToken);

module.exports = router;
