const router = require("express").Router();

const { authController } = require("../controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
