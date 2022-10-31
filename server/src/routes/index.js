const productRouter = require("./product");
const authRouter = require("./auth");
const categoryRouter = require("./category");

function route(app) {
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/category", categoryRouter);
}

module.exports = route;
