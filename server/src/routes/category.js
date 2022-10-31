const express = require("express");
const router = express.Router();
const CategoryController = require("../app/controllers/CategoryController");
const middlewareController = require("../app/controllers/MiddlewareController");

router.post("/create", CategoryController.create);
router.get("/", CategoryController.get);
router.patch("/update/:id", CategoryController.update);
router.delete("/delete/:id", CategoryController.delete);

module.exports = router;
