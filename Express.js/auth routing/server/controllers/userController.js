const mongoose = require("mongoose");

const getAllUsers = async (req, res) => {
  const allUsers = await mongoose.connection.db
    .collection("users")
    .find()
    .toArray();
  res.json(allUsers);
};

const getUserFromUid = async (req, res) => {
  const uid = req.params.uid;
  const user = await mongoose.connection.db
    .collection("users")
    .findOne({ uid: uid });
  res.json(user);
};

module.exports = { getAllUsers, getUserFromUid };
