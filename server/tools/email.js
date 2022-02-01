const nodemailer = require("nodemailer");

// create transporter object using the default SMTP transport
console.log(process.env.GMAIL_USER);
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendVerificationEmail = async (emailToken, email) => {
  const url = `http://localhost:1337/verification/${emailToken}`;
  // send mail with defined transport object
  let info = await transporter.sendMail({
    to: email,
    subject: "Confirm Email",
    html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
  });

  return 0;
};

module.exports = {
  sendVerificationEmail,
};
