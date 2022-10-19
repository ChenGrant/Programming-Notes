const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(
  "mongodb+srv://grantchendev:FVQ9AHpaymgjQ63x@mongodb-notes.lzka0.mongodb.net/my-db?retryWrites=true&w=majority",
  () => {
    console.log("CONNECTED TO MONGODB ATLAS");
    run();
  },
  (e) => console.log(e)
);

const run = async () => {
  try {
    await User.create({ name: "Grant", email: "grantchen2021@gmail.com" });
  } catch (err) {
    console.log(err.message);
  }
};
