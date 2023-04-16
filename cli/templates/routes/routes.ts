import express from "express";
import hellocontroller from "../controllers/controller";

const router = express.Router();

router.get("/", hellocontroller);

export default router;
