const express = require("express");

// allows to export routes
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in middleware");
  // sending a request
  res.send("<h1>Add product</h1>");
});

// use for post requiest
router.post("/product", (req, res, next) => {
  console.log(req.body);
  // redirects from this rout to "/"
  res.redirect("/");
});

module.exports = router;
