const Customer = require("../../models/Customer");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    const newCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Details was updated successfully",
      data: newCustomer,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
