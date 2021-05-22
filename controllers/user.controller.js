const config = require("config");
const User = require("../model/Users");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


exports.addTelegramCredentials = async (req, res) => {
  const { name, familyName, TelegramID, telegramAuthDate } = req.body;
  try {
    const searchResult = await User.findOne({ TelegramID });
    if (searchResult) {
      const payload = {
        _id: searchResult._id,
        TelegramID: searchResult.TelegramID,
      };
      const token = await jwt.sign(payload, process.env.secretOrKey);
      return res.status(200).json({ token: `Bearer ${token}` });
    }
    const newUser = new User({
      TelegramID,
      name,
      familyName,
      telegramAuthDate,
      saved: false,
    });
    const addedUser = await newUser.save();
    const payload = {
      _id: addedUser._id,
      TelegramID: addedUser.TelegramID,
    };
    const token = await jwt.sign(payload, process.env.secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

exports.saveData = async (req, res) => {
  const {
    emailAddress,
    walletAddress,
    telegramID,
    tweetClicked,
    followClicked,
  } = req.body;
  try {
    const updated = await User.findOneAndUpdate(
      { TelegramID: telegramID },
      {
        walletAdress: walletAddress,
        email: emailAddress,
        tweet: tweetClicked,
        follow: followClicked,
        saved: true,
      },
      {
        new: true,
      }
    );
    const payload = {
      _id: updated._id,
      TelegramID: updated.TelegramID,
    };
    const token = await jwt.sign(payload, process.env.secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};
