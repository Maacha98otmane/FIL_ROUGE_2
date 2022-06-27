"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEpisode = exports.getEpisode = exports.getAllEpisodes = exports.deleteEpisode = exports.deleteAllEpisodes = exports.countEpisodes = exports.addEpisode = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _episode = _interopRequireDefault(require("../models/episode"));

//Add episode
var addEpisode = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newEpisode, episode;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newEpisode = new _episode["default"](req.body);
            _context.prev = 1;
            _context.next = 4;
            return newEpisode.save();

          case 4:
            episode = _context.sent;
            res.status(200).json(episode);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function addEpisode(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //get one episode


exports.addEpisode = addEpisode;

var getEpisode = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, episode;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _episode["default"].findById(id);

          case 4:
            episode = _context2.sent;
            res.status(200).json(episode);
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

  return function getEpisode(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //get all episodes according to course


exports.getEpisode = getEpisode;

var getAllEpisodes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var courseId, episodes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            courseId = req.params.courseId;
            _context3.next = 4;
            return _episode["default"].find({
              course: courseId
            });

          case 4:
            episodes = _context3.sent;
            res.status(200).json(episodes);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getAllEpisodes(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //delete episode


exports.getAllEpisodes = getAllEpisodes;

var deleteEpisode = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _episode["default"].findOneAndRemove({
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

  return function deleteEpisode(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //update episode


exports.deleteEpisode = deleteEpisode;

var updateEpisode = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, name;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            name = req.body.name;
            _context5.next = 5;
            return _episode["default"].findOneAndUpdate({
              id: id
            }, {
              name: name
            });

          case 5:
            res.status(200).json({
              status: true,
              message: "updated successfully"
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            res.status(400).json({
              status: false,
              message: _context5.t0.message
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function updateEpisode(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //count episodes according to course


exports.updateEpisode = updateEpisode;

var countEpisodes = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var courseId, count;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            courseId = req.params.courseId;
            _context6.next = 4;
            return _episode["default"].countDocuments({
              course: courseId
            });

          case 4:
            count = _context6.sent;
            res.status(200).json(count);
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

  return function countEpisodes(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //delete all episodes according to course


exports.countEpisodes = countEpisodes;

var deleteAllEpisodes = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var courseId;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            courseId = req.params.courseId;
            _context7.next = 4;
            return _episode["default"].deleteMany({
              course: courseId
            });

          case 4:
            res.status(200).json({
              status: true,
              message: "deleted successfully"
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            res.status(400).json({
              status: false,
              message: _context7.t0.message
            });

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function deleteAllEpisodes(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteAllEpisodes = deleteAllEpisodes;