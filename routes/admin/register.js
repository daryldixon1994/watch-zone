const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    //   verify the email
    const verifyEmail = await Admin.findOne({ email });
    if (verifyEmail) {
      return res.status(401).json({
        status: false,
        message: "This email is already exists, please try another one",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newAdmin = new Admin({
      fullName,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();

    res
      .status(200)
      .json({ status: true, messge: "Admin was created successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
