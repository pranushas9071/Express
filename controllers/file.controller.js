import fs from "fs";

class MyFile {
  readMyFile(req, res) {
    let readStream = fs.createReadStream("express/" + "../public/data.txt");
    //to print the buffer
    readStream.on("data", (chunk) => {
      console.log("New chunk...");
      console.log(chunk);
    });
    readStream.pipe(res);
  }
  writeStream(req, res) {
    let writeStream = fs.createWriteStream(
      "express/" + "../public/newData.txt"
    );
    
    writeStream.pipe(res);
  }
}

export const myFile = new MyFile();
