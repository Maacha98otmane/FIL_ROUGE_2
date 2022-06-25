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
router.get("/getOne/:id", _controllers.getCourse);
router.get("/getRandomCourse", _controllers.getRandomCourse);
router.get("/getCourseWithEpisodes/:id", _controllers.getCourseWithEpisodes);
router.get("/getAll", _controllers.getAllCourse);
router.post("/create", _controllers.addCourse);
router["delete"]("/delete/:id", _controllers.deleteCourse);
router.patch("/update/:id", _controllers.updateCourse);