const Headphone = require("../models/Products/headphoneModel");
const Keyboard = require("../models/Products/keyboardModel");
const Mouse = require("../models/Products/mouseModel");
const Mousepad = require("../models/Products/mousepadModel");
const Product = require("../models/Products/productModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.aliasTopProducts = (req, res, next) => {
  req.query.limit = "7";
  req.query.fields = "name,rating,price,discount,imageCover,quantity";
  next();
};

exports.getAllProducts = catchAsync(async (req, res) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const products = await features.query;

  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
});
