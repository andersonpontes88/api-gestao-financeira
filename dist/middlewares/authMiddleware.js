"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authMiddleware = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var authMiddleware = exports.authMiddleware = function authMiddleware(req, res, next) {
  var _req$headers$authoriz;
  var token = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1];
  if (!token) return res.status(401).json({
    error: "Acesso negado"
  });
  try {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      error: "Token inválido"
    });
  }
};