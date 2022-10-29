require("dotenv").config();
const express = require("express");
var path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us14",
});

//enable express to parse URL-encoded body i.e. info from HTML form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("../client"));
//POST request to subscribe to mailing list
app.post("/api/form", function (req, res) {
  var email = req.body.email;
  console.log(email);

  const run = async () => {
    const response = await client.lists.batchListMembers("a7eb41ccfb", {
      members: [
        {
          email_address: email,
          status: "subscribed",
        },
      ],
    });
  };

  run().catch((e) => res.send(console.log(e)));
});

module.exports = app;
