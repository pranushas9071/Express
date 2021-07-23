"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
var express_1 = __importDefault(require("express"));
// import { myFile } from "../controllers/file.controller.js";
var controllers_1 = require("../controllers");
exports.fileRouter = express_1.default.Router();
exports.fileRouter.get("/aspire", controllers_1.myFile.readMyFile);
exports.fileRouter.get("/welcome", controllers_1.myFile.writeStream);
// export default fileRouter;
