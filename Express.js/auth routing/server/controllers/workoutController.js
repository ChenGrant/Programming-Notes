const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
  const workouts = await mongoose.connection.db
    .collection("workouts")
    .find()
    .toArray();
  res.json(workouts);
};

module.exports = { getAllWorkouts };
