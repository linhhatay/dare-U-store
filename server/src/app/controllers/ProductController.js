const Product = require("../models/Product");

class ProductController {
  async create(req, res) {
    try {
      const { images, tile, price, content, category, description } = req.body;
      const newProduct = await new Product({
        images,
        tile,
        price,
        content,
        category,
        description,
      });

      await newProduct.save();

      res.status(200).json({ message: "Created a product!" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
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

      res.status(200).json({ message: "Updated a product!" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
