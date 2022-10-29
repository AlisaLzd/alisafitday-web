const app = require("express")();

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
