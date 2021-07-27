const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");

router.post("/signup", userCtrl.signupUser);
router.post("/login", userCtrl.loginUser);

module.exports = router;
