const Category = require("../models/Category");

class CategoryController {
  async get(req, res) {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CategoryController();
