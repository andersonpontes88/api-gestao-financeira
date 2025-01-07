"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _transactionController = require("../controllers/transactionController.js");
var _authMiddleware = require("../middlewares/authMiddleware.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post("/", _authMiddleware.authMiddleware, _transactionController.createTransaction);
router.get("/", _authMiddleware.authMiddleware, _transactionController.getTransactions);
router.put("/:id", _authMiddleware.authMiddleware, _transactionController.updateTransaction);
router["delete"]("/:id", _authMiddleware.authMiddleware, _transactionController.deleteTransaction);
router.get("/summary", _authMiddleware.authMiddleware, _transactionController.getSummary);
var _default = exports["default"] = router;