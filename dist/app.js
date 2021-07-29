"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var express_actuator_1 = __importDefault(require("express-actuator"));
var http_terminator_1 = require("http-terminator");
var lightship_1 = require("lightship");
// import { MongoClient } from "mongodb";
var controllers_1 = require("./controllers");
var routes_1 = require("./routes");
var app = express_1.default();
var lightship = lightship_1.createLightship();
app.use(helmet_1.default()); //for security
// app.use(express.urlencoded({ extended: false }));
app.use(express_actuator_1.default());
// app.use(authentication);
app.use("/birds", routes_1.router);
app.use("/files", routes_1.fileRouter);
app.use("/image", routes_1.upload_single);
app.use("/images", routes_1.upload_multiple);
app.get("/countdown", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
    });
    countdown(res, 10);
});
function countdown(res, count) {
    res.write("data: " + count + "\n\n");
    if (count)
        setTimeout(function () { return countdown(res, count - 1); }, 1000);
    else
        res.end();
}
app.use("*", function (req, res) {
    res.status(404);
    res.send("Page not found!!!");
});
app.use(controllers_1.apiError.notFound);
app.use(controllers_1.apiError.errorHandler);
// app.use(express.static("public")); //http://localhost:8080/front.html =>html page
// app.use("/static", express.static("public")); //http://localhost:8080/static/front.html
var server = app.listen(8080, function () {
    lightship.signalReady();
    console.log("Server started..");
});
process.on("SIGTERM", function () {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close(function () {
        console.log("HTTP server closed");
    });
});
var terminator = http_terminator_1.createHttpTerminator({ server: server });
// setTimeout(() => {
// console.log("Server terminated");
// terminator.terminate(); //server will be terminated after 5 sec
// }, 1000);
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/Dog-data", function (err, client) {
    var db = client.db("Dog-data");
    // console.log(db.collection("example").find()); 
    db.collection("example")
        .find()
        .toArray(function (_er, res) {
        console.log(res);
    });
});
