import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import router from "./routes/";

const app = express();

// app configurations
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// logger
app.use(morgan("dev"));

// setting up views
app.set("views", [path.join(__dirname + "/views")]);
app.set("view engine", "pug");

app.get("/api/", (req, res) => {
  res.json({
    status: 200,
    message: "welcome to the TeamUsScrapper, please signUp and read the docs",
  });
});

app.use("/api/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

export default app;
