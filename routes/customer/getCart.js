const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    const { id } = req.auth;
    const data = await Cart.find({ customerId: id }).populate("productId");
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
