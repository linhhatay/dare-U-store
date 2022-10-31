const express = require("express");
const router = express.Router();
const ProductController = require("../app/controllers/ProductController");

router.post("/create", ProductController.create);
router.get("/", ProductController.get);
router.patch("/update/:id", ProductController.update);
router.delete("/delete/:id", ProductController.delete);

module.exports = router;
