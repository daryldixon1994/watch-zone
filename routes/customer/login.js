const Customer = require("../../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res) => {
  const PKEY = process.env.PKEY;
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(401).json({
        status: false,
        message: "Wrong email or passwrod, please try again",
      });
    }
    const comparePWD = bcrypt.compareSync(password, customer.password);
    if (!comparePWD) {
      return res.status(401).json({
        status: false,
        message: "Wrong email or passwrod, please try again",
      });
    }
    const token = jwt.sign({ id: customer._id }, PKEY, { expiresIn: "1h" });

    res.status(200).json({
      status: true,
      data: {
        token,
        isLoggedIn: true,
        isBanned: customer.isBanned,
      },
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
