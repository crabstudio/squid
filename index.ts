import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
