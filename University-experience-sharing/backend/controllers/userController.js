const config = require("../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ObjectID } = require("bson");
const User = require("../models/user");

exports.signup = async (req, res, next) => {
  try {
    const exists = await User.findOne({ email: req.body.email }).exec();
    if (exists) throw new Error(`User already exists`);
    const password = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email.toLowerCase(),

      password: password,
    });
    await user.save();
    res.json({ success: 1 });
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Invalid Password");
    const payload = {};
    payload.email = user.email;
    payload.name = user.name;
    payload.id = user._id;
  

    const token = jwt.sign(
      {
        ...payload,
      },
      config.secret
    );
    res.json({
      status: "success",
      result: token,
      id: user._id,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllusers = async (req, res) => {
  await User.find(function (err, data) {
    if (err) return res.status(404).json(err);

    res.json({ status: "success", result: data });
  });
};

exports.getUserById = async function (req, res, next) {
  await User.findOne({ _id: new ObjectID(req.params.id) }).then((data) => {
    res.status(200).json({ status: "success", result: data });
  });
};
