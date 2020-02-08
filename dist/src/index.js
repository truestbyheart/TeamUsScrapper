"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes/"));
const app = express_1.default();
// app configurations
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// logger
app.use(morgan_1.default("dev"));
// setting up views
app.set("views", [path_1.default.join(__dirname + "/views")]);
app.set("view engine", "pug");
app.get("/api/", (req, res) => {
    res.json({
        status: 200,
        message: "welcome to the TeamUsScrapper, please signUp and read the docs",
    });
});
app.use("/api/", routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
exports.default = app;
//# sourceMappingURL=index.js.map