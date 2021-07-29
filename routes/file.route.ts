import express from "express";

// import { myFile } from "../controllers/file.controller.js";
import { myFile } from "../controllers";

export let fileRouter = express.Router();
fileRouter.get("/aspire", myFile.readMyFile);
fileRouter.get("/welcome", myFile.writeStream);
fileRouter.get("/handle",myFile.handle);
fileRouter.get("/aspireFile",myFile.readFileBySend);

// export default fileRouter;
