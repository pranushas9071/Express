"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFile = void 0;
var cookies_1 = __importDefault(require("cookies"));
var finalhandler_1 = __importDefault(require("finalhandler"));
var fs_1 = __importDefault(require("fs"));
var parseurl_1 = __importDefault(require("parseurl"));
var path_to_regexp_1 = require("path-to-regexp");
var send_1 = __importDefault(require("send"));
var MyFile = /** @class */ (function () {
    function MyFile() {
    }
    MyFile.prototype.readMyFile = function (req, res) {
        //.............................................................................................
        var cookie = new cookies_1.default(req, res);
        var lastvisit = cookie.set("Lastvisit", new Date().toISOString());
        var keys = [];
        var regexp = path_to_regexp_1.pathToRegexp("/foo/:bar", keys);
        console.log("regexp : " + regexp);
        var p = parseurl_1.default(req);
        console.log(p);
        // const val=route
        //..............................................................................................
        var readStream = fs_1.default.createReadStream("express/" + "../public/data.txt");
        //to print the buffer
        readStream.on("data", function (chunk) {
            console.log("New chunk...");
            console.log(chunk);
        });
        readStream.pipe(res);
    };
    MyFile.prototype.writeStream = function (req, res) {
        var writeStream = fs_1.default.createWriteStream("express/" + "../public/newData.txt");
        writeStream.write("Welcom Aspirian");
        var reader = fs_1.default.createReadStream("express/" + "../public/newData.txt");
        reader.pipe(res); //piping for readable stream only
    };
    MyFile.prototype.handle = function (req, res) {
        var done = finalhandler_1.default(req, res);
        // fs.readFile("express/" + "../public/data.txt", (err, buf)=> {
        fs_1.default.readFile("file/do/not/exists", function (err, buf) {
            if (err)
                return done(err);
            res.send(buf);
        });
    };
    MyFile.prototype.readFileBySend = function (req, res) {
        send_1.default(req, "C:/Users/pranusha.sivasamy/Documents/GitHub/Express/public/data.txt")
            .on("error", function (err) {
            console.log(err.message);
            res.end("Error occurred!! Message : " + err.message);
        })
            .pipe(res);
    };
    return MyFile;
}());
exports.myFile = new MyFile();
