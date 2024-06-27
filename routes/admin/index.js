const express = require("express");
const route = express.Router();
const multer = require("../../middlewares/multer");
const verify = require("../../middlewares/verifyToken");
// register : /api/admin/register
// route.post("/register", require("./register"));

// login : /api/admin/login
route.post("/login", require("./login"));

// products : /api/admin/products
route.get("/products", verify, require("./getProducts"));

// customers : /api/admin/customers
route.get("/customers", verify, require("./getCustomers"));

// addProduct : /api/admin/addProduct
route.post(
  "/addProduct",
  verify,
  multer.single("photo"),
  require("./addProduct")
);

// updateProduct : /api/admin/updateProduct/:id
route.put("/updateProduct/:id", verify, require("./updateProduct"));

// updateAvailability : /api/admin/updateAvailability/:id
route.put("/updateAvailability/:id", verify, require("./updateAvailability"));

// updateProductImage : /api/admin/updateProductImage/:id
route.put(
  "/updateProductImage/:id",
  verify,
  multer.single("photo"),
  require("./updateProductImage")
);

// deleteProduct : /api/admin/deleteProduct/:id
route.delete("/deleteProduct/:id", verify, require("./deleteProduct"));

// banCustomer : /api/admin/banCustomer/:id
route.put("/banCustomer/:id", verify, require("./banCustomer"));

// unbanCustomer : /api/admin/unbanCustomer/:id
route.put("/unbanCustomer/:id", verify, require("./unbanCustomer"));

// getOrders : /api/admin/getOrders
route.get("/getOrders", verify, require("./getOrders"));

// confirmOrder : /api/admin/confirmOrder
route.put("/confirmOrder/:id", verify, require("./confirmOrder"));

// deliverOrder : /api/admin/deliverOrder
route.put("/deliverOrder/:id", verify, require("./deliverOrder"));

// cancelOrder : /api/admin/cancelOrder
route.put("/cancelOrder/:id", verify, require("./cancelOrder"));

module.exports = route;
