const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    image: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    price: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    color: {
      type: "string",
    },
    size: {
      type: "string",
      default: false,
    },
    category: {
      type: "string",
      required: true,
    },
    sold: {
      type: "number",
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
