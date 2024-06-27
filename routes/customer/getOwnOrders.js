const Order = require("../../models/Order");

module.exports = async (req, res) => {
  try {
    const { id } = req.auth;
    const data = await Order.find({ customerId: id })
      .select({ customerId: 0 })
      .populate("cart.productId");
    res.status(200).json({ status: true, data });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
