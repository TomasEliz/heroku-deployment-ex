const User = require("../models/User");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    const error = new Error("Cannot find users");
    next(error);
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    const error = new Error("Cannot create user");
    next(error);
  }
};
