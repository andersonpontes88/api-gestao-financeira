"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;
var _server = _interopRequireDefault(require("./server.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PORT = process.env.PORT || 5000;
var server = exports.server = _server["default"].listen(PORT, function () {
  console.log("Servidor rodando na porta ".concat(PORT));
});

// Exporta o servidor para fechar durante os testes