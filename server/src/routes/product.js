const express = require("express");
const router = express.Router();

const ProductController = require("../app/controllers/ProductController");

router.get("/", ProductController.get);
router.post("/create", ProductController.create);
router.patch("/update:id", ProductController.update);
router.delete("/delete:id", ProductController.delete);

module.exports = router;
