const express = require("express");
const router = express.Router();
const userControllers = require("./userControllers");
const { duplicateEmailOrUsername } = require("../../middlewares/verifySignUp");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/register",
  duplicateEmailOrUsername,
  userControllers.userRegister
);
router.post("/login", userControllers.userLogin);
router.get("/verification/:token", userControllers.userConfirm);


module.exports = router;
