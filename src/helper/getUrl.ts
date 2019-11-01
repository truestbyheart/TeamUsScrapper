import axios from "axios";
import cheerio from "cheerio";

const actualPath = async (searchTerm: string) => {
  const url = `http://www.todaytvseries2.com/search-series?searchword=${searchTerm}&searchphrase=all`;

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const content = $(".content2").find("a").attr("href");

  return content;
};

export default actualPath;
