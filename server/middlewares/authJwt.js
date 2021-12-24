const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError)
    return res.status(401).send("Unauthorized! Access Token was expired!");

  return res.sendStatus(401).send("Unauthorized!");
};

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("No token provided!");
  }

  jwt.verify(token, process.env.JWT_PRIVATEKEY, (err, decoded) => {
    if (err) {
      return catchError(err, res);
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };
