const express = require("express");
// allows to create path to the file
const path = require("path");

// allows to export routes
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("in middleware");
  // sending a file
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
