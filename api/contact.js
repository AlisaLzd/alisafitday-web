require("dotenv").config();
const express = require("express");
var path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

//enable express to parse URL-encoded body i.e. info from HTML form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("../client"));

//Gmail
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alisafitday@gmail.com",
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

//POST request to send gmail

app.post("/api/contact", (req, res) => {
  const email = req.body.email;

  const text = req.body.text;

  const mail = {
    to: "alisafitday@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Email: ${email}</p>
             <p>Message: ${text}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Done!" });
    }
  });
});

module.exports = app;
