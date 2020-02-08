"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TodayTvSeriesController_1 = __importDefault(require("../controllers/TodayTvSeriesController"));
const TodayTvSeriesRoute = express_1.Router();
TodayTvSeriesRoute.get("/:searchTerm", TodayTvSeriesController_1.default.getTvEpisodes);
exports.default = TodayTvSeriesRoute;
//# sourceMappingURL=TodayTvSeriesRouter.js.map