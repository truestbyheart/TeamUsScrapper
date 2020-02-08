"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const statusCodes_1 = __importDefault(require("../helper/constants/statusCodes"));
const getUrl_1 = __importDefault(require("../helper/getUrl"));
const { OK, BAD_REQUEST } = statusCodes_1.default;
class TodayTvSeriesController {
    static getTvEpisodes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { searchTerm } = req.params;
            const { isView } = req.query;
            const Data = [];
            let eps = {};
            /**
             * @author daniel mwangila
             * @description Search for the series to get the actual path to it page.
             *
             */
            const actualUrl = yield getUrl_1.default(searchTerm);
            const url = `http://www.todaytvseries2.com${actualUrl}`;
            /**
             * @description retriving the list of episodes from the series page.
             */
            const { data } = yield axios_1.default.get(url);
            const $ = cheerio_1.default.load(data);
            const list = $(".row2");
            const coverImage = $(".imageseries1").find("img").attr("src");
            list.each((i, element) => {
                const episode = $(element).find(".cell2");
                const size = $(element).find(".cell3");
                const link = $(element).find(".cell4 a").attr("href");
                eps = {
                    episode: episode.text(),
                    size: size.text(),
                    link,
                    coverImage,
                };
                Data.push(eps);
            });
            if (isView) {
                res.status(OK).render("series", {
                    logoText: "TeamUsScrapper",
                    data: Data,
                });
            }
            else {
                res.status(OK).json({
                    status: OK,
                    episodes: Data,
                });
            }
        });
    }
}
exports.default = TodayTvSeriesController;
//# sourceMappingURL=TodayTvSeriesController.js.map