const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    fullname: {
      type: "string",
      default: "",
    },
    password: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
