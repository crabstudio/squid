import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import "dotenv/config";
import router from "../routes/routes";
import { request, response } from "express";

const port = process.env.PORT || 8080;
const isDev: boolean = process.env.NODE_ENV == "production";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(morgan(isDev ? "combined" : "dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.get("/", (req: request, res: response) => {
  res.send("Welcome to SQUID");
});

app.use("/hello", router);

app.get("/health", (req: request, res: response) => {
  res.status(200).json({
    status: "Working",
    hostname: process.env.HOST,
    uptime: process.uptime(),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
