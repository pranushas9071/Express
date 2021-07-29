import Cookies from "cookies";
import { Request, Response } from "express";
import finalhandler from "finalhandler";
import fs from "fs";
import parseurl from "parseurl";
import { pathToRegexp } from "path-to-regexp";
import send from "send";
/* @ts-ignore */
import route from "path-match"

class MyFile {
  readMyFile(req: Request, res: Response) {
    //.............................................................................................
    const cookie = new Cookies(req, res);
    let lastvisit = cookie.set("Lastvisit", new Date().toISOString());

    const keys: any = [];
    const regexp = pathToRegexp("/foo/:bar", keys);
    console.log(`regexp : ${regexp}`);

    const p = parseurl(req);

    console.log(p);

    // const val=route
    //..............................................................................................

    let readStream = fs.createReadStream("express/" + "../public/data.txt");

    //to print the buffer
    readStream.on("data", (chunk) => {
      console.log("New chunk...");
      console.log(chunk);
    });
    readStream.pipe(res);
  }

  writeStream(req: Request, res: Response) {
    let writeStream = fs.createWriteStream(
      "express/" + "../public/newData.txt"
    );
    writeStream.write("Welcom Aspirian");
    let reader = fs.createReadStream("express/" + "../public/newData.txt");
    reader.pipe(res); //piping for readable stream only
  }

  handle(req: Request, res: Response) {
    const done = finalhandler(req, res);
    // fs.readFile("express/" + "../public/data.txt", (err, buf)=> {
    fs.readFile("file/do/not/exists", (err, buf) => {
      if (err) return done(err);
      res.send(buf);
    });
  }
  
  readFileBySend(req: Request, res: Response) {
    send(req, "C:/Users/pranusha.sivasamy/Documents/GitHub/Express/public/data.txt")
      .on("error", (err) => {
        console.log(err.message);
        res.end(`Error occurred!! Message : ${err.message}`);
      })
      .pipe(res);
  }
}

export const myFile = new MyFile();
