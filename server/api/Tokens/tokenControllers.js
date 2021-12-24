const jwt = require("jsonwebtoken");

const RefreshToken = require("./tokenModel");
const { verifyTokenExpiration } = require("../../tools/tokens");

exports.refreshToken = async (req, res) => {
  const { requestToken } = req.body;

  if (!requestToken) {
    return res.status(403).send("Refresh Token is required!");
  }

  let refreshToken = await RefreshToken.findOne(requestToken);

  if (!refreshToken)
    return res.status(403).send("Refresh token is not in database!");

  if (verifyTokenExpiration(refreshToken)) {
    await RefreshToken.delete(refreshToken.id);
    return res
      .status(403)
      .send("Refresh token was expired. Please make a new signin request");
  }

  let newAccessToken = jwt.sign(
    { id: refreshToken.userId },
    process.env.JWT_PRIVATEKEY,
    {
      expiresIn: process.env.JWT_EXPIRATION,
    }
  );

  return res
    .status(200)
    .send({ accessToken: newAccessToken, refreshToken: refreshToken.token });
};
