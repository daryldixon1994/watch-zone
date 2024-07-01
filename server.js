const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
// constants
const port = process.env.PORT || 5000;
const URI = process.env.URI;
mongoose
  .connect(URI)
  .then(() => console.log("connected to database 🚀"))
  .catch((err) => console.log("❌", err));
// middlewares
// let corsOptions = {
//   origin: "http://localhost:3000/",
//   optionsSuccessStatus: 200,
// };
app.use(express.json());
app.use(cors());
// routes
app.use("/api/customer", require("./routes/customer"));
app.use("/api/admin", require("./routes/admin"));
// listen
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is up and running ✅");
});
