const Headphone = require("../models/Products/headphoneModel");
const Keyboard = require("../models/Products/keyboardModel");
const Mouse = require("../models/Products/mouseModel");
const Mousepad = require("../models/Products/mousepadModel");
const Product = require("../models/Products/productModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadProductImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 20 },
]);

exports.resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover) return next();

  // 1) Cover image
  req.body.imageCover = `product-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(640, 640)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/products/${req.body.imageCover}`);

  // 2) Images
  if (!req.files.images) return next();
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(640, 640)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/products/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

// prettier-ignore
const models = {
  'Tai Nghe': Headphone,
  'Bàn Phím': Keyboard,
  'Chuột': Mouse,
  'Bàn Di Chuột': Mousepad,
};

const createSubProduct = (category, data) => {
  const Model = models[category];
  if (!Model) {
    throw new Error(`Invalid category: ${category}`);
  }
  return new Model(data);
};

exports.createProduct = catchAsync(async (req, res, next) => {
  // prettier-ignore
  const { name, rating, price, imageCover, images, discount, quantity, description, category, productType, ...rest } = req.body;

  // prettier-ignore
  const productData = { name, rating, price, imageCover, images, discount, quantity, description, category, productType };
  const subProductData = { ...rest };
  const newProduct = new Product(productData);
  const subProductObj = createSubProduct(category, subProductData);

  subProductObj.product = newProduct._id;
  await subProductObj.save();

  newProduct.specs = subProductObj._id;
  await newProduct.save();

  res.status(201).json({
    status: "success",
    data: {
      newProduct,
    },
  });
});

exports.aliasTopProducts = (req, res, next) => {
  req.query.limit = "7";
  req.query.fields = "name,rating,price,discount,imageCover,quantity";
  next();
};

exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product, "specs");
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
