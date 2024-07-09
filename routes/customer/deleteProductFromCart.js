const Customer = require("../../models/Customer");
const Product = require("../../models/Product");
const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
