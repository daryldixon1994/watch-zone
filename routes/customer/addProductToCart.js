const Customer = require("../../models/Customer");
const Product = require("../../models/Product");
const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    const { pId } = req.params;
    const { id } = req.auth;
    const existedProduct = await Cart.findOne({ productId: pId });
    if (existedProduct) {
      await Cart.updateOne(
        { productId: pId },
        {
          $inc: {
            qte: 1,
          },
        }
      );
      return res.status(204).end();
    }
    let newCart = new Cart({
      productId: pId,
      customerId: id,
    });
    await newCart.save();
    res
      .status(200)
      .json({ status: true, message: "Product was added to cart" });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
