"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomCourse = exports.getCourseWithEpisodes = exports.getCourse = exports.getAllCourse = exports.deleteCourse = exports.addCourse = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _course = _interopRequireDefault(require("../models/course"));

var _category = _interopRequireDefault(require("../models/category"));

var getCourse = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, course;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _course["default"].find({
              _id: id
            });

          case 4:
            course = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              course: course
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(400).json({
              status: false,
              message: _context.t0.message
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function getCourse(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCourse = getCourse;

var addCourse = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, title, slug, level, description, price, photo, hours, category, course;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, title = _req$body.title, slug = _req$body.slug, level = _req$body.level, description = _req$body.description, price = _req$body.price, photo = _req$body.photo, hours = _req$body.hours, category = _req$body.category;
            course = new _course["default"]({
              title: title,
              slug: slug,
              level: level,
              description: description,
              price: price,
              photo: photo,
              hours: hours,
              category: category
            });
            _context2.next = 5;
            return course.save();

          case 5:
            res.status(200).json({
              status: true,
              message: "course added successfully",
              course: course
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function addCourse(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addCourse = addCourse;

var getAllCourse = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var courses;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _course["default"].find({});

          case 3:
            courses = _context3.sent;
            res.status(200).json(courses);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getAllCourse(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAllCourse = getAllCourse;

var deleteCourse = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _course["default"].findOneAndRemove({
              _id: id
            });

          case 4:
            res.status(200).json({
              status: true,
              message: "deleted successfully"
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(400).json({
              status: false,
              message: _context4.t0.message
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function deleteCourse(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //get 5 random course


exports.deleteCourse = deleteCourse;

var getRandomCourse = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var courses;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _course["default"].aggregate([{
              $sample: {
                size: 5
              }
            }]);

          case 3:
            courses = _context5.sent;
            res.status(200).json(courses);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getRandomCourse(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //get course with all episodes


exports.getRandomCourse = getRandomCourse;

var getCourseWithEpisodes = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, course;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _course["default"].findById(id).populate("episodes");

          case 4:
            course = _context6.sent;
            res.status(200).json(course);
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function getCourseWithEpisodes(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //get 3 course rating >= 4


exports.getCourseWithEpisodes = getCourseWithEpisodes;

var getCourseRating = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var courses;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _course["default"].find({
              rating: {
                $gte: 4
              }
            }).limit(3);

          case 3:
            courses = _context7.sent;
            res.status(200).json(courses);
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            res.status(500).json(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function getCourseRating(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();