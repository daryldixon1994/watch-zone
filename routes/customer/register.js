const Customer = require("../../models/Customer");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { fullName, email, password, phone, address } = req.body;
    //   verify the email
    const verifyEmail = await Customer.findOne({ email });
    if (verifyEmail) {
      return res.status(401).json({
        status: false,
        message: "This email is already exists, please try another one",
      });
    }
     const verifyPhone = await Customer.findOne({ phone });
     if (verifyPhone) {
       return res.status(401).json({
         status: false,
         message: "This phone is already taken, please try another one",
       });
     }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newCustomer = new Customer({
      fullName,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newCustomer.save();
    res
      .status(200)
      .json({ status: true, messge: "Customer was created successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
