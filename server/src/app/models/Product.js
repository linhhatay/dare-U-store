const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      require: true,
    },
    color: {
      type: Array,
    },
    sw: {
      type: Array,
    },
    category: {
      type: String,
      required: true,
    },
    sale: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
