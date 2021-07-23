"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_auth_1 = __importDefault(require("basic-auth"));
var authentication = function (req, res, next) {
    res.setHeader("name", "pranusha");
    console.log("Basic authentication");
    var user = basic_auth_1.default(req);
    var username = "admin";
    var password = "123";
    //   console.log(!!user);
    if (!!user && user.name === username && user.pass === password) {
        next();
    }
    else {
        var err = new Error("Authentication required!!");
        err.message = "401";
        next(err);
    }
};
exports.default = authentication;
