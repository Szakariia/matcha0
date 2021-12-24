const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const sql = require("../../db");

// constructor
const RefreshToken = function (refreshToken) {
  this.token = refreshToken.token;
  this.expiryDate = refreshToken.expiryDate;
  this.userId = refreshToken.userId;
};

RefreshToken.create = (userId) => {
  let expiredAt = new Date();

  expiredAt.setSeconds(
    expiredAt.getSeconds() + process.env.JWT_REFRESHEXPIRATION
  );

  // Create new refreshToken
  const refreshToken = new RefreshToken({
    token: uuidv4(),
    expiryDate: moment(expiredAt.getTime()).format("YYYY-MM-DD hh:mm:ss.ms"),
    userId: userId,
  });

  return new Promise((resolve, reject) => {
    sql.query("INSERT INTO refreshTokens SET ?", refreshToken, (err, res) => {
      if (err) reject(err);
      resolve(refreshToken.token);
    });
  });
};

RefreshToken.findOne = (refreshToken) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `SELECT * FROM refreshTokens WHERE token = "${refreshToken}"`,
      (err, res) => {
        if (err) reject(err);
        resolve(res[0]);
      }
    );
  });
};

RefreshToken.findOneByUserID = (userId) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `SELECT * FROM refreshTokens WHERE userId = "${userId}"`,
      (err, res) => {
        if (err) reject(err);
        resolve(res[0]);
      }
    );
  });
};

RefreshToken.delete = (tokenId) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `DELETE FROM refreshTokens WHERE id = "${tokenId}"`,
      (err, res) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

module.exports = RefreshToken;
