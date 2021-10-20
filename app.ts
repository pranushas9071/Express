import express, { Request, Response } from "express";
import * as cross from "cors";
import helmet from "helmet";
import actuator from "express-actuator";
import { createHttpTerminator } from "http-terminator";
import { createLightship } from "lightship";
// import { MongoClient } from "mongodb";

import { apiError } from "./controllers";
import authentication from "./middleware/basicAuth.middleware.js";
import { fileRouter, router, upload_multiple, upload_single } from "./routes";

const app = express();
const lightship = createLightship();
app.use(helmet()); //for security
// app.use(express.urlencoded({ extended: false }));
app.use(actuator());
// app.use(authentication);
// app.use(cors());

const options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cross.default(options))

app.use("/birds", router);
app.use("/files", fileRouter);
app.use("/image", upload_single);
app.use("/images", upload_multiple);

// app.get("/countdown", function (req: Request, res: Response) {
//   res.writeHead(200, {
//     "Content-Type": "text/event-stream",
//     "Cache-Control": "no-cache",
//     Connection: "keep-alive",
//   });
//   countdown(res, 10);
// });

// function countdown(res: any, count: number) {
//   res.write("data: " + count + "\n\n");
//   if (count) setTimeout(() => countdown(res, count - 1), 1000);
//   else res.end();
// }

app.use("*", (req: Request, res: Response) => {
  res.status(404);
  res.send("Page not found!!!");
});

app.use(apiError.notFound);
app.use(apiError.errorHandler);

// app.use(express.static("public")); //http://localhost:8080/front.html =>html page
// app.use("/static", express.static("public")); //http://localhost:8080/static/front.html

const server = app.listen(8080, () => {
  lightship.signalReady();
  console.log("Server started..");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});

const terminator = createHttpTerminator({ server });

// setTimeout(() => {
// console.log("Server terminated");
// terminator.terminate(); //server will be terminated after 5 sec
// }, 1000);

// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect(
//   "mongodb://localhost:27017/Dog-data",
//   (err: Error, client: any) => {
//     const db = client.db("Dog-data");
//     // console.log(db.collection("example").find());
//     db.collection("example")
//       .find()
//       .toArray((_er: Error, res: any) => {
//         console.log(res);
//       });
//   }
// );
