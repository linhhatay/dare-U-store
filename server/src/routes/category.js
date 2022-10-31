const express = require("express");
const router = express.Router();
const CategoryController = require("../app/controllers/CategoryController");

router.get("/", CategoryController.get);

module.exports = router;
