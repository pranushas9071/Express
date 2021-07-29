"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload_multiple = exports.upload_single = void 0;
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var controllers_1 = require("../controllers");
var fileStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./assets");
    },
    filename: function (req, file, cb) {
        // cb(null, new Date().toISOString().split("T")[0] + " - " + file.originalname);
        cb(null, Date.now() + " - " + file.originalname);
    },
});
// const upload = multer({ dest: "./assets",preservePath:true });
var upload = multer_1.default({ storage: fileStorage });
exports.upload_single = express_1.default.Router();
exports.upload_single.post("/upload", upload.single("uploaded-file"), controllers_1.upload_file.upload);
exports.upload_multiple = express_1.default.Router();
exports.upload_multiple.post("/upload_multiple", upload.array("uploaded-files", 3), controllers_1.upload_file.upload_multiple);
