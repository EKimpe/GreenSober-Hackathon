const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const { userTransporter } = require("./conf.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/contact", (req, res) => {
  // create reusable transporter object using the default SMTP transport
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: userTransporter.user,
        pass: userTransporter.pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: "Sober Green", // sender address
      to: req.body.email, // list of receivers
      subject: "Nous avons bien reçu votre message :)", // Subject line
      text: req.body.message, // plain text body
      html: "<b>Nous vous répondrons dans les meilleurs délais ;)</b>" // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      res.status(200).send("Ok");
      console.log("Message sent: %s", info.messageId);
    });
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
