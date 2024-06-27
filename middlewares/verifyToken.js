const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res, next) => {
  const PKEY = process.env.PKEY;
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ status: false, message: "Unauthorized" });
  }
  jwt.verify(token, PKEY, (err, data) => {
    if (err) {
      return res.status(401).json({ status: false, message: "Not Allowed" });
    }
    // console.log(data);
    req.auth = { id: data.id };
    next();
  });
};
