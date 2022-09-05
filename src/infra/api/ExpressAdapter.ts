import express, { Request, Response } from "express";
import HttpServer from "./HttpServer";

const cors = require("cors");

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.use(cors())
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (request: Request, response: Response) {    
      const output = await callback(request, response);      
      return output
    });
  }

  listen(port: number): void {
    this.app.listen(port);
  }
}
