const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "customers",
    },
    qte: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Cart = mongoose.model("carts", cartSchema);
