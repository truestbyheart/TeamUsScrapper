import cheerio from 'cheerio';
import axios from 'axios';

const actualPath = async (searchTerm) => {
  const url = `http://www.todaytvseries2.com/search-series?searchword=${searchTerm}&searchphrase=all`;

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const content = $('.content2').find('a').attr('href');

  return content;
};

export default actualPath;
