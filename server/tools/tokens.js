const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const sql = require("../db");

const verifyTokenExpiration = (token) => {
  return token.expiryDate.getTime() < new Date().getTime();
};

module.exports = {
  verifyTokenExpiration,
};
