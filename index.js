const db = require("./db");
var app = require("express")();

const main = () => {
  // respond with "hello world" when a GET request is made to the homepage
  app.get("/", function (req, res) {
    res.send("hello world");
  });
  app.listen(4000);
  db();
};

main();
