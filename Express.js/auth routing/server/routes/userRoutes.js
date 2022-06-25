const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAdmin = require("../middleware/isAdmin");
const authenticate = require("../middleware/authenticate");

router.get("/", authenticate, isAdmin, userController.getAllUsers);

router.get("/:uid", authenticate, userController.getUserFromUid);


module.exports = router;
