import { Router } from "express";
import TodayTvSeriesController from "../controllers/TodayTvSeriesController";

const TodayTvSeriesRoute = Router();

TodayTvSeriesRoute.get("/:searchTerm", TodayTvSeriesController.getTvEpisodes);

export default TodayTvSeriesRoute;
