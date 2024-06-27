const Customer = require("../../models/Customer");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { password, newPassword } = req.body;
    let customer = await Customer.findById(id);
    const test = bcrypt.compareSync(password, customer.password);
    if (!test) {
      return res
        .status(401)
        .json({ status: false, message: "This operation is not allowed" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedNewPassword = bcrypt.hashSync(newPassword, salt);

    await Customer.findByIdAndUpdate(id, {
      $set: { password: hashedNewPassword },
    });
    res
      .status(200)
      .json({ status: true, message: "Password was updated successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
