const mongoose = require("mongoose");

module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    "mongodb://mongo:27017/",
    {
      dbName: "mongo",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => (err ? console.log(err) : console.log("Connected to database"))
  );
};
