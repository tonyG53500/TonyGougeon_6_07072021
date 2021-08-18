const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");
const verifyEmail = require("../middleware/email");
const verifyPassword = require("../middleware/pass");

router.post("/signup", verifyEmail, verifyPassword, userCtrl.signupUser);
router.post("/login", userCtrl.loginUser);

module.exports = router;
