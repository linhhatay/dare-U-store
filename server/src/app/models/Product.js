const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    image: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    oldPrice: {
      type: "string",
    },
    newPrice: {
      type: "string",
    },
    color: {
      type: "string",
      required: true,
    },
    amount: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
