const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router
  .route("/top-products")
  .get(productController.aliasTopProducts, productController.getAllProducts);

router.route("/").get(productController.getAllProducts);

module.exports = router;
