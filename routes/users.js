const express = require("express");
const { addTelegramCredentials, saveData } = require("../controllers/user.controller");
const Router = express.Router();
const isAuth = require("../middleware/passport-setup");

console.log('working');
Router.post("/telegramCred", addTelegramCredentials);

Router.get("/information", isAuth(), (req, res) => {
  console.log(`re.user`, req.user);
  res.json(req.user);
});

Router.post("/saveData", saveData)

module.exports = Router;
