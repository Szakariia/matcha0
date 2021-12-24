const express = require("express");
const router = express.Router();

const tokenController = require("./tokenControllers");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/", tokenController.refreshToken);
module.exports = router;
