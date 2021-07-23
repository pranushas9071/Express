"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
// import { bird } from "../controllers/birds.controller.js";
var controllers_1 = require("../controllers");
exports.router = express_1.default.Router();
exports.router.get("/", controllers_1.bird.home);
exports.router.get("/about", controllers_1.bird.about);
// router.use() =>router middleware.....
// export default router;
