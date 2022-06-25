const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");
const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, workoutController.getAllWorkouts);

module.exports = router;
