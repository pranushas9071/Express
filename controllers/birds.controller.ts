import { Request, Response } from "express";

class Bird {
  home(req:Request, res:Response) {
    res.send("Home page...");
  }
  about(req:Request, res:Response): void {
    // throw "Testing";
    res.send("About birds...");
  }
}
export const bird = new Bird();
