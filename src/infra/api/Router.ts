import GetUser from "../../application/GetUser";
import UserRepository from "../../domain/repository/UserRepository";
import HttpServer from "./HttpServer";

export default class Router {
  constructor(
    readonly httpServer: HttpServer,
    readonly userRepository: UserRepository
  ) {}

  async init() {
    this.httpServer.on("post", "/auth", async (request: any, response: any) => {
      const authUser = new GetUser(this.userRepository);
      await authUser.execute(request.body);
    });
  }
}
