import { Router } from 'express';
import TvScrapper from '../controllers/todaytvserties/todaytvseries';

const route = Router();

route.get('/', TvScrapper.episodes);


export default route;
