const mongoose = require("mongoose");
const config = require("config");

const mongoUri = config.get("mongoURI");
module.exports = () =>
  mongoose.connect(
    process.env.mongoURI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => (err ? console.error(err) : console.log(`db is connected...`))
  );