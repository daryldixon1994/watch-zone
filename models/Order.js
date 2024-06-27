const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    cart: {
      type: [
        {
          productId: {
            type: mongoose.Types.ObjectId,
            ref: "products",
          },
          qte: Number,
        },
      ],
    },
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "customers",
    },
    total: Number,
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    isCanceled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Order = mongoose.model("orders", orderSchema);
