"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bird = void 0;
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.home = function (req, res) {
        res.send("Home page...");
    };
    Bird.prototype.about = function (req, res) {
        // throw "Testing";
        res.send("About birds...");
    };
    return Bird;
}());
exports.bird = new Bird();
