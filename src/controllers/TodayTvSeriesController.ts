import axios from "axios";
import cheerio from "cheerio";
import status from "../helper/constants/statusCodes";
import actualPath from "../helper/getUrl";

const { OK, BAD_REQUEST } = status;
class TodayTvSeriesController {
    public static async getTvEpisodes(req: any, res: any) {
        const { searchTerm } = req.params;
        const { isView } = req.query;
        const Data: any[] = [];
        let eps = {};

        /**
         * @author daniel mwangila
         * @description Search for the series to get the actual path to it page.
         *
         */
        const actualUrl = await actualPath(searchTerm);
        const url = `http://www.todaytvseries2.com${actualUrl}`;

        /**
         * @description retriving the list of episodes from the series page.
         */
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
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
        } else {
            res.status(OK).json({
                status: OK,
                episodes: Data,
            });
        }

    }
}

interface IEpisode {
    coverImage?: string;
    episode?: string;
    link?: string;
    size?: string;
}
export default TodayTvSeriesController;
