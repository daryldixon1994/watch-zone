const Product = require("../../models/Product");
const cloudinary = require("../../middlewares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    let { path } = req.file;
    const { url } = await uploader(path);
    fs.unlinkSync(path);
    let newProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: { pImg: url },
      },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Product was updated successfully",
      data: newProduct,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
};
