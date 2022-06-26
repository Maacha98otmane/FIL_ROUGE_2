"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _customer = _interopRequireDefault(require("../models/customer"));

var _course = _interopRequireDefault(require("../models/course"));

//get 4 random course with rating >= 4 and get 6 customer with rating >= 4
var getRandomCourse = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var courses, customers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _course["default"].aggregate([{
              $sample: {
                size: 4
              }
            }, {
              $match: {
                rating: {
                  $gte: 4
                }
              }
            }]);

          case 3:
            courses = _context.sent;
            _context.next = 6;
            return _customer["default"].aggregate([{
              $sample: {
                size: 6
              }
            }, {
              $match: {
                rating: {
                  $gte: 4
                }
              }
            }]);

          case 6:
            customers = _context.sent;
            data = {
              courses: courses,
              customers: customers
            };
            res.status(200).json(data);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getRandomCourse(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();