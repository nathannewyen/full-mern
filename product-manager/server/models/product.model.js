const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A product must have a title"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      minlength: [1, "Price must be at least $1"],
    },
    description: {
      type: String,
      required: [true, "Please descript your product."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  Product: mongoose.model("Product", ProductSchema),
};
