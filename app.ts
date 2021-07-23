import express, { Request, Response } from "express";
import helmet from "helmet";
// import compression from "compression";

import { apiError } from "./controllers";
import authentication from "./middleware/basicAuth.middleware.js";
import { fileRouter, router } from "./routes";

const app = express();

app.use(helmet());
// app.use(compression());

app.use(authentication);

app.use("/birds", router);
app.use("/files", fileRouter);

app.get("/countdown", function (req: Request, res: Response) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  countdown(res, 10);
});

function countdown(res: any, count: number) {
  res.write("data: " + count + "\n\n");
  if (count) setTimeout(() => countdown(res, count - 1), 1000);
  else res.end();
}

app.use("*", (req: Request, res: Response) => {
  res.status(404);
  res.send("Page not found!!!");
});

app.use(apiError.notFound);
app.use(apiError.errorHandler);

// app.use(express.static("public")); //http://localhost:8080/front.html =>html page
// app.use("/static", express.static("public")); //http://localhost:8080/static/front.html

app.listen(8080,()=>{
  console.log("Server started..");
});
