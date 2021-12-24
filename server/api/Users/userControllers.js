const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./userModel");
const RefreshToken = require("../Tokens/tokenModel");
const { isUsername, validator } = require("../../tools/validator");
const { sendVerificationEmail } = require("../../tools/email");

module.exports.userRegister = async (req, res) => {
  let data = req.body;

  const error = validator(data);

  if (error) res.status(400).json(error);
  else {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    // Create new user
    const user = new User({
      email: data.email,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });

    // Save User in the database
    const registredUser = await User.create(user);

    // Generate token email
    jwt.sign(
      {
        id: registredUser.id,
        username: registredUser.username,
      },
      process.env.EMAIL_JWT_PRIVATEKEY,
      {
        expiresIn: "24h",
      },
      (err, emailToken) => {
        sendVerificationEmail(emailToken, registredUser.email);
      }
    );
    return res.status(201).send("User Registred!");
  }
};

module.exports.userLogin = async (req, res) => {
  const data = req.body;

  const error = isUsername(data.username);
  if (error) return res.status(400).send(error);

  // Check if username exists
  const existingUser = await User.getUser(data.username);
  if (!existingUser)
    return res.status(400).send("Invalid username or password.");

  // check if user's mail is confirmed
  if (!existingUser.confirmed)
    return res.status(401).send("Please confirm your account!");

  // Check if the password is correct
  const validPassword = await bcrypt.compare(
    data.password,
    existingUser.password
  );
  if (!validPassword)
    return res.status(400).send("Invalid username or password.");

  // Generate Access token
  const jwtToken = jwt.sign(
    {
      _id: existingUser.id,
      username: existingUser.username,
    },
    process.env.JWT_PRIVATEKEY,
    {
      expiresIn: process.env.JWT_EXPIRATION,
    }
  );

  // Check if Refresh Token exists
  let refreshToken = await RefreshToken.findOneByUserID(existingUser.id);
  if (refreshToken) await RefreshToken.delete(refreshToken.id);

  // Generate Refresh Token
  refreshToken = await RefreshToken.create(existingUser.id);
  res.send({
    username: existingUser.username,
    accessToken: jwtToken,
    refreshToken: refreshToken,
  });
};

module.exports.userConfirm = async (req, res) => {
  const user = jwt.verify(req.params.token, process.env.EMAIL_JWT_PRIVATEKEY);

  await User.confirm(user.id);

  return res.redirect("http://localhost:3000/login");
};