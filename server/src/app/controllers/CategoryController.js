const Category = require("../models/Category");

class CategoryController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ name });

      if (category) {
        return res
          .status(400)
          .json({ message: "This category already exists!" });
      }

      const newCategory = new Category({ name });

      await newCategory.save();

      res.status(200).json({ message: "Category saved!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { name } = req.body;
      await Category.findByIdAndUpdate({ _id: req.params.id }, name, {
        new: true,
      });
      res.status(200).json({ message: "Updated a category!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Deleted a category!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CategoryController();
