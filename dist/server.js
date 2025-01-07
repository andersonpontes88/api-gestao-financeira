"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _authRoutes = _interopRequireDefault(require("./routes/authRoutes.js"));
var _transactionRoutes = _interopRequireDefault(require("./routes/transactionRoutes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());

// Rotas
app.get("/", function (req, res) {
  return res.json("Hello World!");
});
app.use("/api/auth", _authRoutes["default"]);
app.use("/api/transactions", _transactionRoutes["default"]);
var _default = exports["default"] = app; // Exporta o app para ser usado em outros lugares