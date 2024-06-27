const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  pName: {
    type: String,
    required: true,
  },
  pPrice: {
    type: Number,
    required: true,
  },
  pDesc: String,
  pAvailable: {
    type: Boolean,
    default: true,
  },
  pImg: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/76/76007.png",
  },
});

module.exports = Product = mongoose.model("products", productSchema);
