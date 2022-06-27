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
//     Auth
// } from "../middlewares"
router.post("/confirmFormerEmail/:id", _controllers.confirmFormerEmail);
router.get("/getAllFormers", _controllers.getAllFormers);
router.get("/countFormers", _controllers.countFormers);
router.get("/getTopFormersByRating", _controllers.getTopFormersByRating);
router.get("/getFormer/:id", _controllers.getFormer);
router.post("/createFormer", _controllers.createFormer);
router["delete"]("/deleteFormer/:id", _controllers.deleteFormer);
router.patch("/updateFormer/:id", _controllers.updateFormer);
router.patch("/updateRating/:id", _controllers.updateRating);