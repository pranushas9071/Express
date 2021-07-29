import { Request, Response } from "express";

class UploadFile {
  upload(req: Request, res: Response) {
    console.log(req.file);
    res.send("Successfully uploaded single file ..");
  }
  upload_multiple(req: Request, res: Response) {
    console.log(req.files);
    res.send("Successfully uploaded multiple files!!");
  }
}

export const upload_file = new UploadFile();
