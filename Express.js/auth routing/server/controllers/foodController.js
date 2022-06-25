const mongoose = require("mongoose");

const getAllFoods = async (req, res) => {
  const fruits = await mongoose.connection.db
    .collection("foods")
    .find()
    .toArray();
  res.json(fruits);
};

module.exports = { getAllFoods };
