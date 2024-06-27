const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { pName, pPrice, pDesc } = req.body;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    let { path } = req.file;
    const { url } = await uploader(path);
    fs.unlinkSync(path);
    let newProduct = new Product({
      pName,
      pPrice,
      pDesc,
      pImg: url,
    });
    await newProduct.save();
    res
      .status(200)
      .json({ status: true, message: "Product was added successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
