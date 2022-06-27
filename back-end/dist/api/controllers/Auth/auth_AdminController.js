"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.logoutAdmin = exports.loginAdmin = void 0;

var _helpers = require("../../helpers");

var Admin = require('../../models/admin');

var signup = function signup(req, res) {
  var admin = new Admin(req.body);
  admin.save(function (err, admin) {
    if (err) {
      return res.status(400).send(err);
    }

    res.send(admin);
  });
};

exports.signup = signup;

var loginAdmin = function loginAdmin(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  Admin.findOne({
    email: email
  }, function (err, admin) {
    if (err || !admin) {
      return res.status(400).json({
        isLogged: false,
        error: 'User not Found with this email@'
      });
    }

    if (!admin.authenticate(password)) {
      return res.status(401).json({
        isLogged: false,
        error: 'Email and Password dont Match !'
      });
    }

    var token = (0, _helpers.createToken)({
      id: admin._id,
      role: admin.role
    }, "ADMIN");
    res.cookie('tokenAdmin', token, {
      expires: new Date(Date.now() + 4 * 3600000)
    });
    return token ? res.status(200).json({
      isLogged: true,
      token: token
    }) : res.status(500).json({
      isLogged: false,
      error: "cant create token"
    });
  });
};

exports.loginAdmin = loginAdmin;

var logoutAdmin = function logoutAdmin(req, res) {
  res.clearCookie('tokenAdmin');
  res.json({
    message: "Logout"
  });
};

exports.logoutAdmin = logoutAdmin;