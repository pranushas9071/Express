"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload_file = void 0;
var UploadFile = /** @class */ (function () {
    function UploadFile() {
    }
    UploadFile.prototype.upload = function (req, res) {
        console.log(req.file);
        res.send("Successfully uploaded single file ..");
    };
    UploadFile.prototype.upload_multiple = function (req, res) {
        console.log(req.files);
        res.send("Successfully uploaded multiple files!!");
    };
    return UploadFile;
}());
exports.upload_file = new UploadFile();
