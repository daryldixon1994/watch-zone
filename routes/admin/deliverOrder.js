const Order = require("../../models/Order");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    await Order.findByIdAndUpdate(id, {
      $set: { isDelivered: true },
    });
    res.status(204).end();
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
