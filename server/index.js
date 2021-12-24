const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importing Middlwares
const authJwt = require("./middlewares/authJwt");
const verifySignUp = require("./middlewares/verifySignUp");

module.exports = {
  authJwt,
  verifySignUp,
};

// Importing Routes
const usersRoutes = require("./api/Users/userRoutes");
const tokenRoutes = require("./api/Tokens/tokenRoutes");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", usersRoutes);
app.use("/refreshtoken", tokenRoutes);

app.get("/", (req, res) => {
  res.send("Working...");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
