"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TodayTvSeriesRouter_1 = __importDefault(require("./TodayTvSeriesRouter"));
const router = express_1.Router();
router.use("/series/today/", TodayTvSeriesRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map