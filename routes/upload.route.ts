import express from "express";
import multer from "multer";

import { upload_file } from "../controllers";

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets");
  },
  filename: (req, file, cb) => {
    // cb(null, new Date().toISOString().split("T")[0] + " - " + file.originalname);
    cb(null, Date.now() + " - " + file.originalname);
  },
});

// const upload = multer({ dest: "./assets",preservePath:true });
const upload = multer({ storage: fileStorage });

export const upload_single = express.Router();
upload_single.post(
  "/upload",
  upload.single("uploaded-file"),
  upload_file.upload
);

export const upload_multiple = express.Router();
upload_multiple.post(
  "/upload_multiple",
  upload.array("uploaded-files", 3),
  upload_file.upload_multiple
);
