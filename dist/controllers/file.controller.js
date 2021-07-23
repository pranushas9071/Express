"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFile = void 0;
var fs_1 = __importDefault(require("fs"));
var MyFile = /** @class */ (function () {
    function MyFile() {
    }
    MyFile.prototype.readMyFile = function (req, res) {
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
    return MyFile;
}());
exports.myFile = new MyFile();
