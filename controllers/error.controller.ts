import {Request} from "express"
import {Response} from "express"

class ApiError {
  notFound(req:Request, res:Response, next:any) {
    const error = new Error("Not found");
    res.status(404);
    next(error);
  }
  errorHandler(err:Error, req:Request, res:Response, next:any) {
    console.error(err);
    res.status(404 || 500).send("Message : " + err);
  }
}

export const apiError = new ApiError();
