// node js http
const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

// exporting admin route
const adminRoutes = require("./routes/admin");
// adds to rout universal admin
app.use("/admin", adminRoutes);

const shopRoutes = require("./routes/shop");
app.use(shopRoutes);

// created app
const app = express();

// get incoming body
app.use(bodyParser.urlencoded());
// public folder
app.use(express.static(path.join(__dirname, "public")));

// for not existing routes. error handler
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// middlware
// app.use((req, res, next) => {
//   console.log("in middleware");
//   // need to use next to continue to the next middlware
//   next();
// });

// order is important becouse if use "/" we will never reach "/add-product". From more specific to less specific
// app.use("/add-product", (req, res, next) => {
//   console.log("in middleware");
//   // sending a request
//   res.send("<h1>Add product</h1>");
// });

// // use for post requiest
// app.post("/product", (req, res, next) => {
//   console.log(req.body);
//   // redirects from this rout to "/"
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   console.log("in middleware");
//   // sending a request
//   res.send("<h1>Hello</h1>");
// });

// server creation
const server = http.createServer(app);

// app will run on 3000 port
server.listen(3000);
