"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiError = void 0;
var ApiError = /** @class */ (function () {
    function ApiError() {
    }
    ApiError.prototype.notFound = function (req, res, next) {
        var error = new Error("Not found");
        res.status(404);
        next(error);
    };
    ApiError.prototype.errorHandler = function (err, req, res, next) {
        console.error(err);
        res.status(404 || 500).send("Message : " + err);
    };
    return ApiError;
}());
exports.apiError = new ApiError();
