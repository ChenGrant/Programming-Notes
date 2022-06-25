const path = require("path");
const morgan = require("morgan");
const config = require("./config.js");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("./firebase");
const foodRoutes = require("./routes/foodRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client/build")));
app.use(cors());
if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// routes
app.use("/foods", foodRoutes);

app.use("/workouts", workoutRoutes);

app.use("/users", userRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/build/index.html"));
});

// mongoose and server
const LOCALHOST_PORT = 5000;
const PORT = process.env.PORT || LOCALHOST_PORT;

mongoose
  .connect(config.MONGODB_ATLAS_URI)
  .then(() => {
    console.log(`connected to mongodb atlas`);
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log("failed to connect to mongodb atlas ", error));
