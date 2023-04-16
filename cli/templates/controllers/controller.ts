import { Response, Request } from "express";

const hellocontroller = (req: Request, res: Response) => {
  res.send("Hello World!");
};

export default hellocontroller;
