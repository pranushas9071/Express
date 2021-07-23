import { Request, Response } from "express";
import fs from "fs";

class MyFile {
  readMyFile(req:Request, res:Response) {
    let readStream = fs.createReadStream("express/" + "../public/data.txt");
    //to print the buffer
    readStream.on("data", (chunk) => {
      console.log("New chunk...");
      console.log(chunk);
    });
    readStream.pipe(res);
  }
  writeStream(req:Request, res:Response) {
    let writeStream = fs.createWriteStream(
      "express/" + "../public/newData.txt"
    );
    writeStream.write("Welcom Aspirian");
    let reader = fs.createReadStream("express/" + "../public/newData.txt");
    reader.pipe(res); //piping for readable stream only
  }
}

export const myFile = new MyFile();
