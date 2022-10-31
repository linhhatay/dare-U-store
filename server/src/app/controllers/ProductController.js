const Product = require("../models/Product");

class ProductController {
  async create(req, res) {
    try {
      const { image, name, oldPrice, newPrice, color, amount, description } =
        req.body;
      const newProduct = await new Product({
        image,
        name,
        oldPrice,
        newPrice,
        color,
        amount,
        description,
      });

      await newProduct.save();

      res.status(200).json({ newProduct });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async get(req, res) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async update(req, res) {
    try {
      const updateProduct = req.body;
      const product = await Product.findByIdAndUpdate(
        { _id: req.params.id },
        updateProduct,
        { new: true }
      );

      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

module.exports = new ProductController();
