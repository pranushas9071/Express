"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
// import compression from "compression";
var controllers_1 = require("./controllers");
var basicAuth_middleware_js_1 = __importDefault(require("./middleware/basicAuth.middleware.js"));
var routes_1 = require("./routes");
var app = express_1.default();
app.use(helmet_1.default());
// app.use(compression());
app.use(basicAuth_middleware_js_1.default);
app.use("/birds", routes_1.router);
app.use("/files", routes_1.fileRouter);
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
app.listen(8080, function () {
    console.log("Server started..");
});
