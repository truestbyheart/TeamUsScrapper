import { Router } from "express";
import TodayTvSeriesRouter from "./TodayTvSeriesRouter";

const router = Router();

router.use("/series/today/", TodayTvSeriesRouter);

export default router;
