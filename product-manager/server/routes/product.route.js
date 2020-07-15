const product = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products", product.index);

  // Create a product
  app.post("/api/products", product.create);
};
