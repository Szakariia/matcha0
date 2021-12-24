const sql = require("../../db");

// constructor
const User = function (user) {
  this.email = user.email;
  this.username = user.username;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.password = user.password;
};



// User Creation
User.create = (newUser) => {
  return new Promise((resolve, reject) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) reject(err);
      resolve({ id: res.insertId, ...newUser });
    });
  });
};

// Get User by unique Email
User.uniqueEmail = (email) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `SELECT email FROM users WHERE email = "${email}"`,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

// Get User by unique Username
User.uniqueUsername = (username) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `SELECT username FROM users WHERE username = "${username}"`,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

// Get User by username, password, confirmed status
User.getUser = (username) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `SELECT id,username,password,confirmed FROM users WHERE username = "${username}"`,
      (err, res) => {
        if (err) reject(err);
        resolve(res[0]);
      }
    );
  });
};

// Update User confirm status
User.confirm = (userId) => {
  return new Promise((resolve, reject) => {
    sql.query(
      `UPDATE users SET confirmed = ? WHERE id = ?`,[true, userId],
      (err, res) => {
        if (err) reject(err);
        resolve(res[0]);
      }
    );
  });
};


module.exports = User;
