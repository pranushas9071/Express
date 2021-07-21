import express from "express";
import helmet from "helmet";
import compression from "compression";

import router from "./routes/birds.route.js";
import { apiError } from "./controllers/error.controller.js";
import fileRouter from "./routes/file.route.js";

const app = express();

app.use(helmet());
app.use(compression());
app.disable("X-powered-by");
app.use("/birds", router);
app.use("/files", fileRouter);

app.use("*", (req, res) => {
  res.status(404);
  res.send("Page not found!!!");
});

app.use(apiError.notFound);
app.use(apiError.errorHandler);

// app.use(express.static("public")); //http://localhost:8080/front.html =>html page
// app.use("/static", express.static("public")); //http://localhost:8080/static/front.html

app.listen(8080);
