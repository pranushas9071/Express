import auth from "basic-auth";

import { Request, Response } from "express";

const authentication = (req:Request, res:Response, next:any) => {
  res.setHeader("name", "pranusha");
  console.log("Basic authentication");
  const user = auth(req);
  const username = "admin";
  const password = "123";
  //   console.log(!!user);
  if (!!user && user.name === username && user.pass === password) {
    next();
  } else {
    const err = new Error("Authentication required!!");
    err.message="401"
    next(err);
  }
};

export default authentication;
