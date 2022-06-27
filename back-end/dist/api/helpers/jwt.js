"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.createToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv").config(); // generate tokens :


var createToken = function createToken() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var role = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!payload) return null;
  if (!role) return null;

  switch (role) {
    case "ADMIN":
      return _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY_ADMIN, {
        expiresIn: "1h"
      });

    case "FORMER":
      return _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY_FORMER, {
        expiresIn: "1h"
      });

    case "CUSTOMER":
      return _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY_CUSTOMER, {
        expiresIn: "1h"
      });

    default:
      return null;
  }
};

exports.createToken = createToken;

var verifyToken = function verifyToken() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var role = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!token) return null;
  if (!role) return null;

  try {
    switch (role) {
      case "ADMIN":
        return _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY_MANAGER);
        break;

      case "FORMER":
        return _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY_FORMER);
        break;

      case "CUSTOMER":
        return _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY_CUSTOMER);
        break;

      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

exports.verifyToken = verifyToken;