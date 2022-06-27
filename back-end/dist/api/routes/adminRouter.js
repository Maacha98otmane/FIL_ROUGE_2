"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("../controllers");

var router = _express["default"].Router();

exports.router = router;
// import {
//     CreatUserValidator,
//     Auth
// } from "../middlewares"
router.post("/login", _controllers.loginAdmin);
router.post("/signup", _controllers.signup);
router.get("/logout", _controllers.logoutAdmin);