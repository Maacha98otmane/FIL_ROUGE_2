"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _db = _interopRequireDefault(require("./config/db"));

var _routes = require("./api/routes");

require("dotenv").config();

var host = process.env.HOST;
var port = process.env.PORT || 8080;
var app = (0, _express["default"])(); // //mid

app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _expressValidator["default"])());
app.use((0, _cookieParser["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/admin", _routes.adminRouter);
app.use("/api/category", _routes.categoryRouter);
app.use("/api/cart", _routes.cartRouter);
app.use("/api/order", _routes.orderRouter);
app.use("/api/stripe", _routes.stripeRouter);
app.use("/api/course", _routes.courseRouter);
app.use("/api/former", _routes.formerRouter);
app.use("/api/episode", _routes.episodeRouter);
app.listen(port, function () {
  console.log("Running on http://".concat(host, ":").concat(port));
});
(0, _db["default"])();