const express = require("express");
const route = express.Router();
const verify = require("../../middlewares/verifyToken");

// register : /api/customer/register
route.post("/register", require("./register"));

// login : /api/customer/login
route.post("/login", require("./login"));

// products : /api/customer/products
route.get("/products", require("./getProducts"));

// updateEmail : /api/customer/updateEmail
route.put("/updateEmail", verify, require("./updateEmail"));

// updatePassword : /api/customer/updatePassword
route.put("/updatePassword", verify, require("./updatePassword"));

// updateDetails : /api/customer/updateDetails
route.put("/updateDetails", verify, require("./updateDetails"));

// addProductToCart : /api/customer/addProductToCart
route.post("/addProductToCart/:pId", verify, require("./addProductToCart"));

// incProductOfCart : /api/customer/incProductOfCart
route.put("/incProductOfCart/:id", verify, require("./incProductOfCart"));

// decProductOfCart : /api/customer/decProductOfCart
route.put("/decProductOfCart/:id", verify, require("./decProductOfCart"));

// cart : /api/customer/cart
route.get("/cart", verify, require("./getCart"));

// createOrder : /api/customer/createOrder
route.post("/createOrder", verify, require("./createOrder"));

// myOrders : /api/customer/myOrders
route.get("/myOrders", verify, require("./getOwnOrders"));

module.exports = route;
