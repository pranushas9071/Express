import express from "express";

import { myFile } from "../controllers/file.controller.js";

let fileRouter = express.Router();
fileRouter.get("/aspire", myFile.readMyFile);

export default fileRouter;