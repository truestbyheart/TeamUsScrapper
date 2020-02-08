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
const actualPath = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `http://www.todaytvseries2.com/search-series?searchword=${searchTerm}&searchphrase=all`;
    const { data } = yield axios_1.default.get(url);
    const $ = cheerio_1.default.load(data);
    const content = $(".content2").find("a").attr("href");
    return content;
});
exports.default = actualPath;
//# sourceMappingURL=getUrl.js.map