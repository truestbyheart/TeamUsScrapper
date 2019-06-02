import cheerio from 'cheerio';
import axios from 'axios';
import actualPath from '../../helper/getUrl';

class TvScrapper {
  static async episodes(req, res) {
    const { searchTerm } = req.query;
    const Data = [];

    /**
     * @author daniel mwangila
     * @description Serch for the series to get the actual path to it page.
     *
     */
    const actualUrl = await actualPath(searchTerm);
    const url = `http://www.todaytvseries2.com${actualUrl}`;

    /**
    * @description retriving the list of episodes from the series page.
    */
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const list = $('.row2');
    list.each((i, element) => {
      const episode = $(element).find('.cell2');
      const size = $(element).find('.cell3');
      const link = $(element).find('.cell4 a').attr('href');

      const eps = {
        episode: episode.text(),
        size: size.text(),
        link,
      };

      Data.push(eps);
    });

    res.json({
      status: 200,
      series: Data,
    });
  }
}

export default TvScrapper;
