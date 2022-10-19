const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: (value) => value % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    minLength: "10",
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users",
  },
  hobbies: [String],
  address: addressSchema,
});

userSchema.methods.sayHi = function () {
  console.log("hi from instance with name of:", this.name);
};

userSchema.statics.findByName = function (name) {
  return this.find({ name: name });
};

userSchema.query.byName = function (name) {
  return this.where("name").equals(name);
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next()
});

userSchema.post("save", function (doc, next) {
  doc.sayHi();
  next();
});

module.exports = mongoose.model("Users", userSchema);
