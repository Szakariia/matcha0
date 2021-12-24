const User = require("../api/Users/userModel");

const errorMessage = {};
const duplicateEmailOrUsername = async (req, res, next) => {
  const userEmail = await User.uniqueEmail(req.body.email);
  if (userEmail.length) return res.status(400).send({ ...errorMessage, email : "Email already exists!"});

  const userUsername = await User.uniqueUsername(req.body.username);
  if (userUsername.length)
    return res.status(400).send({ ...errorMessage, username : "Username already exists!"});
  next();
};

module.exports = {
  duplicateEmailOrUsername,
};
