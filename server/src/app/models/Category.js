const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    name: {
      type: "string",
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", Category);
