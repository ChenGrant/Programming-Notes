const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.get("/", urlController.url_list);
router.post("/", urlController.url_create_post);
router.get("/:id", urlController.url_detail)

module.exports = router;
