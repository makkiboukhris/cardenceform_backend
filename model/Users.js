const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
  name: String,

  familyName: String,

  email: String,

  TelegramID: String,

  telegramAuthDate: String,

  walletAdress: String,

  follow: Boolean,

  tweet: Boolean,

  saved: Boolean,

});

module.exports = User = mongoose.model("user", userSchema);
